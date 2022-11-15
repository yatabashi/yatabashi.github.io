<!-- TODO:
* コメントアウトした事項への対処
 -->

# Gitコマンド逆引き
Gitで実現したい事項から、それを実現するためのコマンドを説明する形で記録するページである。  
最終更新：2022年11月15日、MacOS Monterey 12.5

## 複数のファイルを一度にステージする
一度に複数のファイル（の変更）をステージすることもできる。
```
git add [file1] [file2]
```
このコマンドは`README.md`と`LICENSE.md`の二つのファイルについて同時にステージングを行う。三つ以上の場合も同様に並べていけば良い。  
また、ステージの対象に`.`を指定する次のコマンドは、カレントディレクトリ内の（そのファイルがGit管理下にあるかどうかに関わらず）全ての差分をステージする。
```
git add .
```

参考：
* [【 git add 】コマンド――変更内容をインデックスに追加してコミット対象にする：Linux基本コマンドTips（384） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2003/13/news031.html)
* [git add -u と git add -A と git add . の違い \| note.nkmk.me](https://note.nkmk.me/git-add-u-a-period/)


## 一ファイル内の変更を分割してステージする
`git add -p`を使うことで、ファイルに生じている差分の一部のみをステージすることができる。
```
git add -p [file]
```
実行すると、差分の部分部分について、ステージするかどうかを尋ねられるので、一つずつ処理していく。yで採用、nで不採用、sで採用・不採用を判断する範囲の細分、eでsでは対応できない細かな取捨選択のための修正ができる。eを選択した場合、編集のためのテキストエディタが開く。また、qでステージングを中断できるが、それまでに採用した差分はステージされている。

参考：
* [【 git add 】コマンド――変更内容をインデックスに追加してコミット対象にする：Linux基本コマンドTips（384） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2003/13/news031.html#sample4)  
* [Gitで部分的にコミットする方法 - Qiita](https://qiita.com/miyohide/items/79ab0ff3b3852289a6be)

## コミットメッセージをコマンドラインで設定する
コミットには次のコマンドを用いる。
```
git commit
```
これを実行した際、コミットメッセージを設定するためにテキストエディタが開かれる。テキストエディタを開かずに、メッセージを直接コマンドラインに入力するためには、`-m`オプションを用いる。
```
git commit -m "commit message"
```

## ユーザ名とメールアドレスを変更する
コミットには、コミットを行ったユーザの名前やメールアドレスの情報も付属する。この際、原則としてすべてのプロジェクトは、`~/.gitconfig`に`user.name`および`user.email`として保存されたデータを参照する。`git config`コマンドは、こうした設定を行うためのコマンドである。
```
git config --global user.name "username"
git config --global user.email "email-address"
```
`--global`オプションは、その設定をそのユーザのすべてのプロジェクトで利用することを指定し、この条件で行われた設定が`~/.gitconfig`に保存される。

## テキストエディタを変更する
コミットメッセージの入力時などに開くテキストエディタは、デフォルトではvi/vimであるようだが、これらは一般的な多くのエディタとは操作方向は大きく異なるので、不慣れな場合は注意されたい。また、開かれるエディタは変更可能である。テキストエディタの設定は、ユーザー名などの設定と同様`~/.gitconfig`に、`core.editor`として保存される。ここでは、例としてVSCodeへの変更を行っている。
```
git config --global core.editor 'code --wait'
```
なお、実際にVSCodeを利用する場合には、VSCode側での設定も必要である（→参考）。

参考：
* [vim コマンド集 - Qiita](https://qiita.com/ktoyod/items/0a8491cdb6c0191ab0cc)  
* [GitのエディターをVScodeに設定する方法(Macユーザー向け) - Qiita](https://qiita.com/kzk_engineer/items/6b6d10397557ecb553df)

## ステージング状況を確認する
あるプロジェクトにおいて、Gitがどのファイルの変更を捕捉しているか、またどの変更がステージされているかを確認するコマンドとして次がある。
```
git status
```
実行すると、Gitの捕捉している情報が
* Changes to be committed
* Changes not staged for commit
* Untracked files

に分類して表示される。

また、マージを行いコンフリクトがあった場合、直後に`git status`を実行すると、コンフリクトが発生したファイルを一覧することができる。

## コミット履歴を確認する
現在のブランチから見えるコミットを一覧する。
```
git log
```
<!-- ブランチでないコミットからでも見られるよ -->
<!-- ブランチの情報もあるよ -->

参考：
* [git-log – Git コマンドリファレンス（日本語版）](https://tracpath.com/docs/git-log/)

## ステージングを取り消す
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

## リモートリポジトリを対応させる
プッシュの度にリモートリポジトリをURLで指定することもできるが、事前に名前を付けて、対応するリモートリポジトリとして設定に追加しておくこともできる。たとえば、GitHubのあるリポジトリをリモートリポジトリとして追加したい場合は、次のようになる。
```
git remote add origin https://github.com/xxx/yyy.git
```
設定は`.git/config`に保存されている。

参考：
* [【Git&GitHub】GitHubにプッシュ（git pushコマンド） - 未来エンジニア養成所Blog](https://phoeducation.work/entry/20210810/1628549880)

## 上流ブランチを設定する
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

## Gitの監視対象から特定のファイルを除外する
Gitは原則としてそのワークツリー内の全てのファイルの変更を監視するが、ユーザーがファイルを指定し、監視対象から除外することもできる。除外したいファイルがまだ監視されていない場合と、すでに監視下に入ってしまっている場合で手続きが異なる。
まだ監視されていない場合、そのユーザーの全てのプロジェクトに関わる除外設定は`~/.config/git/ignore`に、特定のプロジェクトにのみ関わる除外設定はそのディレクトリ直下の`.gitignore`に保存すればよい。例えば、次のコマンドはあらゆるプロジェクトで`filename`というファイルを無視させるために、`~/.config/git/ignore`に追記している。
```
echo 'filename' >> ~/.config/git/ignore
```
すでに監視されている場合、監視を外す作業が必要である。
```
git rm --cached [file]
```
`--cached`オプションなしで実行した場合、ワークツリーから当該ファイルが削除されるので注意せよ。

## Gitに監視されているファイルの名前を変更する
Gitを介さずにファイル名（ディレクトリ名）の変更を行った場合、元の名前のファイルは削除された扱いになり、新しい名前の「別の」ファイルは監視されていない状態になる。監視対象に戻すためには別途ステージすればよいが、この作業をまとめて行うのが`git mv`である。
```
git mv [oldname] [newname]
```
`git mv`は、`mv`, `git add`, `git rm`の組み合わせである。よって、詳細は[UNIXコマンド集](./unix-commands.html)の`mv`の項目も参照せよ。

## GitHubでアクセストークンによる認証を行う
GitではなくGitHubに関する話題だが、ここに併載する。  
GitHubはGit操作におけるパスワード認証を廃止しており、HTTP接続状態では`git push`時にパスワード入力を求められるにも関わらず、github.comでログインに用いるパスワードを入力しても認証に失敗し、personal access tokenを利用せよと案内される。よって、アクセストークンを取得する必要がある。アクセストークンの取得は、github.comにアクセスし、Settings内のDeveloper Settingsから行うことができる（→参考）。

参考：
* [GitHubのAccess token認証方法とは？Password認証の廃止 \| ポテパンスタイル](https://style.potepan.com/articles/34189.html)

## コミットをやり直す
コミットを行った直後で、そのコミットをまだプッシュしていない場合、`git commit --amend`を利用してコミットをやり直すことができる。具体的には、コミットするファイルを追加したり、コミットメッセージを変更したりすることができる。前者のためには追加したいファイルをステージした上でコマンドを実行すればよく、後者のためにはオプションとして`-m "commit message"`を指定してコマンドを実行すればよい。コミットメッセージを変更したくない場合は、`--no-edit`を指定すればよい。

参考：[コミットの修正には git commit --amend が便利 - RAKUS Developers Blog \| ラクス エンジニアブログ](https://tech-blog.rakus.co.jp/entry/20191113/git)