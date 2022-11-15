# Git実用編
[Git基礎編](./fundamentals-of-git.html)で述べたことに加えて、Gitを実用する際に理解していると望ましい事項について列挙する。  
筆者が必要になったものから追記していく。記述はあまり体系だったものでない可能性がある。

## Gitコマンド逆引き
Gitでやりたいことを見出しに、その方法をそれぞれ解説している。

### 複数のファイルを一度にステージする
一度に複数のファイル（の変更）をステージすることもできる。
```
git add README.md LICENSE.md
```
このコマンドは`README.md`と`LICENSE.md`の二つのファイルについて同時にステージングを行う。三つ以上の場合も同様に並べていけば良い。  
また、ステージの対象に`.`を指定する次のコマンドは、カレントディレクトリ内の（そのファイルがGit管理下にあるかどうかに関わらず）全ての差分をステージする。
```
git add .
```

参考：
* [【 git add 】コマンド――変更内容をインデックスに追加してコミット対象にする：Linux基本コマンドTips（384） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2003/13/news031.html)
* [git add -u と git add -A と git add . の違い \| note.nkmk.me](https://note.nkmk.me/git-add-u-a-period/)


### 一ファイル内の変更を分割してステージする
`git add -p`を使うことで、ファイルに生じている差分の一部のみをステージすることができる。
```
git add -p README.md
```
実行すると、差分の部分部分について、ステージするかどうかを尋ねられるので、一つずつ処理していく。yで採用、nで不採用、sで採用・不採用を判断する範囲の細分、eでsでは対応できない細かな取捨選択のための修正ができる。eを選択した場合、編集のためのテキストエディタが開く。また、qでステージングを中断できるが、それまでに採用した差分はステージされている。

参考：
* [【 git add 】コマンド――変更内容をインデックスに追加してコミット対象にする：Linux基本コマンドTips（384） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2003/13/news031.html#sample4)  
* [Gitで部分的にコミットする方法 - Qiita](https://qiita.com/miyohide/items/79ab0ff3b3852289a6be)

### コミットメッセージをコマンドラインで設定する
コミットには次のコマンドを用いる。
```
git commit
```
これを実行した際、コミットメッセージを設定するためにテキストエディタが開かれる。テキストエディタを開かずに、メッセージを直接コマンドラインに入力するためには、`-m`オプションを用いる。
```
git commit -m "commit message"
```

### テキストエディタを変更する
コミットメッセージの入力時などに開くテキストエディタは、デフォルトではvi/vimであるようだが、これらは一般的な多くのエディタとは操作方向は大きく異なるので、不慣れな場合は注意されたい。また、開かれるエディタは変更可能である。テキストエディタの設定は、ユーザー名などの設定と同様`~/.gitconfig`に、`core.editor`として保存される。ここでは、例としてVSCodeへの変更を行っている。
```
git config --global core.editor 'code --wait'
```
なお、実際にVSCodeを利用する場合には、VSCode側での設定も必要である（→参考）。

参考：
* [vim コマンド集 - Qiita](https://qiita.com/ktoyod/items/0a8491cdb6c0191ab0cc)  
* [GitのエディターをVScodeに設定する方法(Macユーザー向け) - Qiita](https://qiita.com/kzk_engineer/items/6b6d10397557ecb553df)

### ステージング状況を確認する
あるプロジェクトにおいて、Gitがどのファイルの変更を捕捉しているか、またどの変更がステージされているかを確認するコマンドとして次がある。
```
git status
```
実行すると、Gitの捕捉している情報が
* Changes to be committed
* Changes not staged for commit
* Untracked files

に分類して表示される。

<!-- マージでコンフリクトがあったときにも使えるらしい -->

### コミット履歴を確認する
現在のブランチから見えるコミットを一覧する。
```
git log
```
<!-- ブランチでないコミットからでも見られるよ -->
<!-- ブランチの情報もあるよ -->

参考：
* [git-log – Git コマンドリファレンス（日本語版）](https://tracpath.com/docs/git-log/)

### ステージングを取り消す
誤った差分をステージしてしまった直後には、`git status`で確認できるように、次のコマンドでステージングを取り消すことができる。
```
git restore --staged
```
正確には、ワーキングツリーはそのままに、インデックスを最新のコミットと同じ状態に上書きしているらしい。  
また、`git reset --mixed`を利用することもできる。

参考：
* [元に戻すgitコマンド その6（間違えて git add したら 編） - Qiita](https://qiita.com/ryosuketter/items/a6047b0270ea999fd51b)
* [これからは git restore を使ってみようかな - Mitsuyuki.Shiiba](https://bufferings.hatenablog.com/entry/2020/05/01/013451)
* [[git reset (--hard/--soft)]ワーキングツリー、インデックス、HEADを使いこなす方法 - Qiita](https://qiita.com/shuntaro_tamura/items/db1aef9cf9d78db50ffe)

### リモートリポジトリを対応させる
プッシュの度にリモートリポジトリをURLで指定することもできるが、事前に名前を付けて、対応するリモートリポジトリとして設定に追加しておくこともできる。
```
git remote add origin https://github.com/xxx/yyy.git
```
設定は`.git/config`に保存されている。

参考：
* [【Git&GitHub】GitHubにプッシュ（git pushコマンド） - 未来エンジニア養成所Blog](https://phoeducation.work/entry/20210810/1628549880)

### 上流ブランチを設定する
ローカルのブランチごとに、push先になるリモートのブランチを一つ指定し、これを、push先を特に指定しなかったときにデフォルトで選ばれるリモートリポジトリ・ブランチとしておくことができる。このブランチを、当該ブランチの上流ブランチと呼ぶ。初回のpush時に`-u`オプションを用いることで設定できる。
```
git push -u origin main
```
このコマンドでは、originリポジトリのmainブランチを、現在の（ローカル）ブランチの上流ブランチとして設定している。  
また、上流ブランチの設定のみを行うこともできるらしい。次のコマンドは、先のコマンドと同様の設定を行う。
```
git branch -u origin/main
```

参考：
* [Git用語：上流ブランチとは？ \| WWWクリエイターズ](https://www-creators.com/archives/4931)
* [【Github】git pushの-uオプションとは何か？上流ブランチやupstreamについて実例で解説｜–set-upstreamとの違いや上流ブランチの確認・設定方法（初心者向け、わかりやすい）](https://prograshi.com/general/git/git-push-u-upstream/)

### Gitの監視対象から特定のファイルを除外する
Gitは原則としてそのワークツリー内の全てのファイルの変更を監視するが、ユーザーがファイルを指定し、監視対象から除外することもできる。除外したいファイルがまだ監視されていない場合と、すでに監視下に入ってしまっている場合で手続きが異なる。
まだ監視されていない場合、そのユーザーの全てのプロジェクトに関わる除外設定は`~/.config/git/ignore`に、特定のプロジェクトにのみ関わる除外設定はそのディレクトリ直下の`.gitignore`に保存すればよい。例えば、次のコマンドはあらゆるプロジェクトで`.DS_Store`というファイルを無視させるために、`~/.config/git/ignore`に追記している。
```
echo '.DS_Store' >> ~/.config/git/ignore
```
すでに監視されている場合、監視を外す作業が必要である。
```
git rm --cached README.md
```
`--cached`オプションなしで実行した場合、ワークツリーから当該ファイルが削除されるので注意せよ。

### Gitに監視されているファイルの名前を変更する
Gitを介さずにファイル名（ディレクトリ名）の変更を行った場合、元の名前のファイルは削除された扱いになり、新しい名前の「別の」ファイルは監視されていない状態になる。監視対象に戻すためには別途ステージすればよいが、この作業をまとめて行うのが`git mv`である。
```
git mv README.md DONTREADME.md
```
「`README.md`を`DONTREADME.md`に移動する」ことで、ファイル名の変更を実現している。

### GitHubでアクセストークンによる認証を行う
GitではなくGitHubに関する話題だが、ここに併載する。  
GitHubはGit操作におけるパスワード認証を廃止しており、HTTP接続状態では`git push`時にパスワード入力を求められるにも関わらず、github.comでログインに用いるパスワードを入力しても認証に失敗し、personal access tokenを利用せよと案内される。よって、アクセストークンを取得する必要がある。アクセストークンの取得は、github.comにアクセスし、Settings内のDeveloper Settingsから行うことができる（→参考）。

参考：
* [GitHubのAccess token認証方法とは？Password認証の廃止 \| ポテパンスタイル](https://style.potepan.com/articles/34189.html)






<!-- 
* git 一般
    * https://snowsystem.net/git/git-master/git-1/
    * https://backlog.com/ja/git-tutorial/
    * https://note.com/asahi_ictrad/n/n8764312bd843
    * https://qiita.com/_ha1f/items/2dca1047c57d4f0bd465
    * [Git の仕組み (1) - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/04/22/inside-git-1)  
    * [Git の仕組み (2) - コミット・ブランチ・タグ - こせきの技術日記](https://koseki.hatenablog.com/entry/2014/06/11/inside-git-2)  
    * [【Git】新人エンジニア、git pushまでの道 - Qiita](https://qiita.com/yukibe/items/9ef9d54f2e7d53cfb51c)  
    * [あなたはまだGitを使いこなせていない - Qiita](https://qiita.com/hitochan/items/32f43181a3e7db342188)  
* リモートリポジトリ作成後の初手
    * https://prograshi.com/general/git/create-a-new-repository-on-the-command-line/
    echo "# yatabashi.github.io" >> README.md
        README書き込み
    git init
        git開始
    git add README.md
        ステージング
    git commit -m "initial commit"
        ローカルリポジトリに追加
    git branch -M main
        現在の（ローカル？）リポジトリ内のブランチに名前を設定
        https://qiita.com/obonno3/items/f44bb730facc29a3b7d5
    git remote add origin https://github.com/yatabashi/yatabashi.github.io.git
        対応するリモートリポジトリを設定
    git push -u origin main
        リモートリポジトリにpushしつつ、現在のローカルのブランチに対応する、リモート内のupstreamブランチを設定する？
* 過去のコミットを参照する
    * https://qiita.com/yagaodekawasu/items/18a2c395722a4f012338
    * https://prograshi.com/general/git/meaning-of-head-and-at-mark/
* checkout, switch; reset, restore
    * https://www.sejuku.net/blog/71457
    * https://kakakakakku.hatenablog.com/entry/2020/04/08/151627
    * https://ebc-2in2crc.hatenablog.jp/entry/2020/11/22/130521
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
git switchによってコミットがどこからも参照されなくなることがあるという話

git addのオプション
    git add -u
    ```
    `-u`オプションを用いると、已にGitで管理されている全てのファイルに生じた変更が登録される。
    ```
    git add -A
    ```
    `-A`オプションを用いると、`-u`オプションでステージされるものに加えて、まだGitに管理されていないファイルにおける変更（すなわちGit管理下へのそのファイルの追加）もステージされる。

概念の導入
    HEADはコミットも指せる
    ブランチでないコミットにもいられる（detached HEAD）、そうしたコミットに関わる操作もいろいろできる、という話
        遡ってブランチを作成する
        detached HEAD
            HEADは、通常ブランチを指定し、コミットを指定している状態は「detached HEAD」と呼ばれる。この状態でコミットを行っても、そのコミットを参照できるブランチがないことに注意せよ。
    最初のコミットがあるまではブランチもHEADも存在しない
    リモート追跡ブランチ

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

### リモートリポジトリの状態をローカルにコピーする
すでにリモートリポジトリに存在するプロジェクトをローカルにダウンロードしたい場合、クローンを行えばよい。次のコマンドは、URLのリモートリポジトリにあるファイル群を含む新たなディレクトリを、現在の位置に作成する。
```
git clone https://github.com/xxx/yyy.git
```