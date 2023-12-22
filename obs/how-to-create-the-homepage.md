# GitHub Pages でホームページを作る

[ホームページ](https://yatabashi.github.io)を作成した手順について記述する。なお、実際に実行したものから順序を整理しているほか、不要であった手続きの掲載を省略している。  

## 1. Gmailアドレスを取得
もともと持っていたGitHubのアカウントは本名と結び付いていたので、新しく作成することにした。GitHub登録用のメールアドレスとしてGmailを利用するために、Googleアカウントを「[Google アカウントの作成](https://accounts.google.com/SignUp)」から作成し、Gmailアドレスを取得した。  
なお、Googleアカウントの名前を名のみにしようとしたものの、登録時に姓の欄を空けておくことはできなかったため、一度姓に空でない文字列を設定しアカウントを作成したのち、「[個人情報](https://myaccount.google.com/personal-info)」から姓を空に変更することで目的を達した。

## 2. GitHubアカウントを作成する
「[Join GitHub · GitHub](https://github.com/join)」からGitHubアカウントを作成した。Email address欄には 1. で取得したメールアドレスを入力した。

## 3. リポジトリを作成する
「\<user\>.github.io」という名前のリポジトリを作成することで、リポジトリ内のファイルをそのドメイン下で公開できる。  
アカウントを作成したのち、「[Create a New Repository](https://github.com/new)」でのリポジトリの作成に移った。Repository name欄には`yatabashi.github.io`と入力し、公開範囲はPublicに設定して、リポジトリを作成した。

## 4. gitを設定する
リポジトリが作成されると、gitを設定するためのいくつかの方法が表示された。今回は2番目の「...or create a new repository on the command line」を使用した。この欄には、コマンドラインから（gitを設定したいディレクトリで）実行する以下のコマンドが表示されている。
```
echo "# yatabashi.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yatabashi/yatabashi.github.io.git
git push -u origin main
```
これらのコマンドによってgitが設定され、README.mdが追加された状態でリモートリポジトリがローカルリポジトリに同期する（ディレクトリが空だった場合）。なお、コマンドの働きの詳細については、[UNIXコマンド集](./unix-commands.html)及び[Git基礎](./git-basic.html)を参照せよ。

**以下はgit一般の設定であって、ホームページ作成に直接関わるものではない。**  
gitの設定が記載されている.gitconfigを確認したところ、現ユーザーがgitを利用する際に使われるユーザー名とメールアドレスが本名に結びついたもののままであったため、修正した。.gitconfigは以下のコマンドで確認した。  
```
cat ~/.gitconfig
```
設定は以下のコマンドで行った（設定値は伏せた）。
```
git config --global user.name 'xxx'
git config --global user.email 'yyy'
```

また、.DS_Storeが追跡対象となることを（あらゆるプロジェクトで）避けるため、gitが.DS_Storeを常に無視するように`~/.config/git/ignore`に設定した。このファイルに書き込まれたファイルは、すべてのプロジェクトで無視される。
```
mkdir ~/.config/git
echo '.DS_Store' >> ~/.config/git/ignore
```

**以上**

## 5. README.mdを記述する
ソースコードにある通りに記述した。

## 6. 変更と反映
README.mdを編集したのち、ワークツリーの状態をリモートリポジトリに反映させるために、以下のコマンドを実行した。
```
git add README.md
git commit -m "added links"
git push origin master
```
上に同じく、詳細については、[UNIXコマンド集](./unix-commands.html)及び[Git基礎](./git-basic.html)を参照せよ。これ以降もワークツリーでの変更を保存したいときは、addするファイルとコミットメッセージを必要に応じて変更しつつこのコマンドを実行していった。  
ところで、実際の最初の数度の手続きにおいてはcommitとpushの間に以下のコマンドを挟んで毎回実行してしまっており、毎度fatalではないエラーを吐いていた。
```
git remote add origin https://github.com/yatabashi/yatabashi.github.io.git
```
これは参考にした記事にこれを含めた4行のコマンドが掲載されていたためだが、このコマンドはローカルリポジトリに対応するリモートリポジトリを登録するためのものなので、 4. でこれを既に実行していたこのプロジェクト内では再度実行する必要はなかった。

## 成果
ホームページを手に入れた。また、gitの仕組みをいくらか理解することができた。

## 参考文献
* [Google アカウントで名前だけ登録する方法｜G Tips](https://g-tips.jp/google-account/account-only-name/)
* [github.ioを使ってMySiteを作ろう - Qiita](https://qiita.com/MokeeeMokeee/items/4b33691b829aaf119bbf)
* [自分で作ったWebページをインターネット上に公開しよう！ \| プログラミングの入門なら基礎から学べるProgate[プロゲート]](https://prog-8.com/docs/github-pages)
* [githubで本名が暴露してしまった件 - Qiita](https://qiita.com/428desmo/items/307e33ceff168966fa50)
* [すべてのリポジトリで .DS_Store を gitignore する方法](https://zenn.dev/phi/articles/gitignore-global-ds-store)
* [【 git remote 】コマンド（基礎編）――リモートリポジトリを追加、削除する：Linux基本コマンドTips（395） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2005/08/news017.html)

2022年10月  
MacOS Monterey 12.5