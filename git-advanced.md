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

### 過去に遡ってブランチを分岐する
まず、前述のコマンドで過去のコミットに移動する。そこから新たなコミットを行い、現在地にブランチを作成する（順不同）することで、過去に遡ってブランチを分岐させることができる。基礎編に記述したように、「予め」ブランチを作成しておかなければならないわけではない。  
新たなコミットを行ったにも関わらずブランチを作成しなかった場合は、他のブランチからそのコミットは参照できなくなる。こうしたコミットが十分に多くの数溜まったとき、Gitは長時間どのブランチからも到達できないままになっているコミットを削除することがある。このようなコミットが生まれる場合は、Gitは警告を発する。

参考：
* [Git の仕組み (2) - コミット・ブランチ・タグ - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/06/11/inside-git-2a)

### detached HEADから抜け出す
`git switch [branch]`により、既存のブランチへとHEADを移動させればよい。ただし前述の通り、到達不能なコミットが生まれないか、生まれる場合はそれでいいのかを検討すること。

## Gitコマンド逆引き
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
* リモート追跡ブランチ
    * 後述するリモートリポジトリを設定した場合、ローカルリポジトリ内のブランチにはそれぞれ、リモート追跡ブランチと呼ばれる、リモートリポジトリ内の対応するブランチ（＝上流ブランチ）を追跡する（反映する）ブランチが設定される。リモート追跡ブランチは、変更をリモートリポジトリからローカルリポジトリに取り込む際に利用される。
    [Git で「追跡ブランチ」って言うのやめましょう - Qiita](https://qiita.com/uasi/items/69368c17c79e99aaddbf)  
* pull, fetch
    * https://tech-blog.rakus.co.jp/entry/20220805/git
    * リモートリポジトリ内のあるブランチを、フェッチはリモート追跡ブランチに、プルは*作業中のワークツリーに、*「マージ」する。次のコマンドは、どちらもリモートのoriginリポジトリ内のmainブランチを「マージ」してきている。フェッチだけでは変更がワークツリーに反映されないことに注意せよ。そのためには別途マージが必要である。
    ```
    git fetch origin main
    git pull origin main
    ```
    [【初心者向け】git fetch、git merge、git pullの違いについて - Qiita](https://qiita.com/wann/items/688bc17460a457104d7d)

    リモート追跡ブランチってリモート（origin）がmasterブランチ、ローカルがmainブランチだったらorigin/master？
    「作業中のワークツリーに」は本当？非ブランチのコミットへもプルできる？
    * git pushがリモートリポジトリにおけるgit merge main(localの) のことであることを記述
* git diff
    * https://qiita.com/shibukk/items/8c9362a5bd399b9c56be
    * https://kemarii.com/blog/git/git-diff-cached/
    * ステージした変更を参照する
        * https://qiita.com/miriwo/items/74ec1cfe2f4754d4cb8a
* インデックスの正体
    * [Gitのインデックスの中身](https://zenn.dev/kaityo256/articles/inside_the_index)

git addのオプション
    ```
    git add -A
    ```
    `-A`オプションを用いると、`-u`オプションでステージされるものに加えて、まだGitに管理されていないファイルにおける変更（すなわちGit管理下へのそのファイルの追加）もステージされる。

[gitconfig の基本を理解する - Qiita](https://qiita.com/shionit/items/fb4a1a30538f8d335b35)

git reset --soft: コミットを取り消す


### ブランチをマージする
現在のブランチに別のブランチでの変更状況を取り込んだコミットを作成する。注意すべきことに、あくまで変更を取り込んでくるのであって、それらを統合する訳ではない。次のコマンドは、現在のブランチ（例えばmain）にsubブランチを取り込む。このとき、mainブランチはここで生成される、（元の）mainとsubを親とするマージコミットに移動する。subブランチは移動しない。
```
git merge sub
```
マージを行う際、コンフリクト（食い違う変更が混在すること）が発生することがある。その場合、どの変更を採用するかを手動のファイル編集で選択したのち、ステージ・コミットをする（`git merge --continue`でまとめて行うこともできるらしい）か、マージを取り消す（`git merge --abort`による）かのどちらかを行う必要がある。

    ブランチ以外から操作できるか？

参考：
* [ブランチの統合｜サル先生のGit入門【プロジェクト管理ツールBacklog】](https://backlog.com/ja/git-tutorial/stepup/04/)
* [git merge(マージ)とは何か？使い方を実例で解説｜-mオプションでコミットメッセージを指定する方法](https://prograshi.com/general/git/how-to-use-git-merge/)
* [git merge でのコンフリクト(競合)の解決方法まとめ \| WWWクリエイターズ](https://www-creators.com/archives/1938)

リモート追跡ブランチとdiffをとる
第9話 git diff で差分を確認！【連載】マンガでわかるGit ～コマンド編～ - itstaffing エンジニアスタイル

-->