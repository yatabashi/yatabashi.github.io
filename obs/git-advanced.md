# Git発展編
[Git基礎編](./git-basic.html)で述べたこと以上の、Gitについての発展的・実用的な事項を記述する。さまざまなコマンドを列挙することはせず、新たな概念を導入することを主眼に置いたページである。

## ブランチでないコミットを対象とするGit操作
基礎編では、HEADは常にブランチに存在し、あらゆる操作はブランチを対象に行われるかのように記述したが、事実はそうではない。

### detached HEAD
`git checkout [commit]`は、HEADを指定したコミットに移動させるコマンドである（同時にワークツリーもそれに同期する）。コミットの指定には、コミットに割り当てられたハッシュ値（`git log`で確認できる）や、その先頭数文字（`git log --oneline`で確認できる）を用いる。  
これを実行してHEADがブランチを指さなくなった状態のことを、「detached HEAD」と呼び、この状態になったとき、Gitは警告を発する。これは後述の注意が必要であるからである。しかし、特定の時点において、detached HEADの状態においても、通常のHEADがブランチを指定している状態と同じく（結果的に）特定のコミットをしていることは変わらないということは理解しておく必要がある。

参考：
* [git checkout解説 - Qiita](https://qiita.com/yunano/items/f3133ea64efed762df2f)
* [\[Git\]ワークツリーをそのまま特定のコミットに戻す方法](https://kajindowsxp.com/git-reset/)

#### detached HEADから抜け出す
`git switch [branch]`により、既存のブランチへとHEADを移動させればよい。ただし前述の通り、到達不能なコミットが生まれないか、生まれる場合はそれでいいのかを検討すること。実際には警告が発される。

### 過去に遡ってブランチを分岐する
過去のコミットに移動した上で現在地にブランチを作成することで、過去に遡ってブランチを分岐させることができる。常に、基礎編に記述したように「予め」ブランチを作成しておかなければならないわけではない。  
新たなコミットを行ったにも関わらずブランチを作成しなかった場合は、他のブランチからそのコミットは参照できなくなる。こうしたコミットが十分に多くの数溜まったとき、Gitは長時間どのブランチからも到達できないままになっているコミットを削除することがある。このようなコミットが生まれる場合は、Gitは警告を発する。

参考：
* [Git の仕組み (2) - コミット・ブランチ・タグ - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/06/11/inside-git-2a)

## ブランチのマージ
現在のブランチに別のブランチでの変更を取り込むことをマージと言う。注意すべきこととして、あくまで変更を取り込んでくるのであって、二つのブランチを統合する訳ではない。次のコマンドは、現在のブランチ（例えばmain）にsubブランチを取り込む。
```
git merge sub
```
このとき、subブランチの状態によって、2通りの異なる変化が起こる。
1. subブランチがmainブランチの先頭から伸びている場合  
    この場合、変更の取り込みは容易であり、両ブランチのマージはmainブランチがsubブランチの位置にただ移動することによって行われる。この種のマージをfast-forwardマージと呼ぶ。

1. subブランチがmainブランチの途中から伸びている場合  
    この場合、mainブランチは、ここで生成される、（元の）mainとsubを親とするマージコミットに移動する。subブランチは移動しない。  
    この際、mainブランチの変更とsubブランチの変更が競合（コンフリクト）することがある。その場合、次のどちらかの行動をしなければならない。
    * どの変更を採用するかを手動で選択してコミットする  
        `git status`によって競合が起きたファイルを確認することができる。競合が起きたファイルでは、以下のような編集がなされている。
        ```
        <<<<<<< HEAD
        （mainブランチで行われた変更）
        =======
        （subブランチで行われた変更）
        >>>>>>> sub
        ```
        「<<<<<<<」や「=======」を含む行がGitによって追加されている。二つの異なる変更のうち、残したい方を残すように手動でファイルを編集すれば良い。

        競合の修正が終わったら、`git add (該当ファイル)`をしたのちに`git commit`または`git merge --continue`をすることでマージを完了させられる。
    * マージを取り消す  
        `git merge --abort`によって行うことができる。

参考：
* [ブランチの統合｜サル先生のGit入門【プロジェクト管理ツールBacklog】](https://backlog.com/ja/git-tutorial/stepup/04/)
* [git merge(マージ)とは何か？使い方を実例で解説｜-mオプションでコミットメッセージを指定する方法](https://prograshi.com/general/git/how-to-use-git-merge/)
* [git merge でのコンフリクト(競合)の解決方法まとめ \| WWWクリエイターズ](https://www-creators.com/archives/1938)

## リモートからローカルへ
ローカルの変更をリモートに押し出す`git push`に対して、リモートの変更をローカルに引っ張ってくるためのコマンドとして`git pull`というものが存在する。取得するブランチを指定して以下のようにすることもできる（`origin`リポジトリの`main`ブランチを参照している）。
```
git pull origin main
```

### リモート追跡ブランチ
ところで、実は、`git pull`は`git fetch`と`git merge origin/main`の合成コマンドである。`git fetch`は、リモートの変更をローカルにある「リモート追跡ブランチ」に取り入れるためのコマンドである。`origin`リポジトリの`main`ブランチを追跡するリモート追跡ブランチは`origin/main`として参照されるので、HEADにこれをマージすることで、最終的にリモートの変更をローカルのHEADとして取り込むことができる。

参考：
* [【初心者向け】git fetch、git merge、git pullの違いについて - Qiita](https://qiita.com/wann/items/688bc17460a457104d7d)
* ["git pull origin master" の正体 - Qiita](https://qiita.com/nasutaro211/items/c590994a5d5091206c08)

## コマンド集
その他のコマンドについては、[Gitコマンド逆引き](./git-commands.html)を参照せよ。





<!--- 
概念の導入
* git 一般
    * https://snowsystem.net/git/git-master/git-1/
    * https://backlog.com/ja/git-tutorial/
    * https://note.com/asahi_ictrad/n/n8764312bd843
    * https://qiita.com/_ha1f/items/2dca1047c57d4f0bd465
    * [Git の仕組み (1) - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/04/22/inside-git-1)  
    * [Git の仕組み (2) - コミット・ブランチ・タグ - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/06/11/inside-git-2)  
    * [【Git】新人エンジニア、git pushまでの道 - Qiita](https://qiita.com/yukibe/items/9ef9d54f2e7d53cfb51c)  
    * [あなたはまだGitを使いこなせていない - Qiita](https://qiita.com/hitochan/items/32f43181a3e7db342188)  
    * https://www.asobou.co.jp/blog/web/git-beginner
    * https://zenn.dev/coder_ka/articles/1424213850674e#fn-8c67-1
* 過去のコミットを参照する
    * https://qiita.com/yagaodekawasu/items/18a2c395722a4f012338
    * https://prograshi.com/general/git/meaning-of-head-and-at-mark/
* checkout, switch; reset, restore
    * https://kakakakakku.hatenablog.com/entry/2020/04/08/151627
    * https://ebc-2in2crc.hatenablog.jp/entry/2020/11/22/130521
    * https://qiita.com/shuntaro_tamura/items/db1aef9cf9d78db50ffe
* インデックスの正体
    * [Gitのインデックスの中身](https://zenn.dev/kaityo256/articles/inside_the_index)

[gitconfig の基本を理解する - Qiita](https://qiita.com/shionit/items/fb4a1a30538f8d335b35)

git reset --soft: コミットを取り消す


リモート追跡ブランチとdiffをとる
第9話 git diff で差分を確認！【連載】マンガでわかるGit ～コマンド編～ - itstaffing エンジニアスタイル

git rm
git reset

一連の流れ：
echo "# randomwalk" >> README.md
git init
git add README.md
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/yatabashi/randomwalk.git
git push -u origin main

-

git add .
git commit -m "bug fixed"
git push origin main # 上流ブランチを設定していればorigin mainは不要？
-->