# UNIXコマンド集
Macではターミナルで利用できるUNIXコマンドについて、記録しておく価値の高いと思われるものを記録するページである。  
<!-- [よく使うLinuxコマンド - Qiita](https://qiita.com/arene-calix/items/41d8d4ba572f1d652727) -->
<!-- [Bashショートカットキー - Qiita](https://qiita.com/takayu90/items/011a674b0a903572a50c) -->

## コマンドでないもの
はじめに、UNIXコマンドと併用するが、コマンドそのものではないものをここに記載する。

### tab補完
コマンドの入力中にtabキーを入力することで、入力を補完することができる。後に続く入力として可能なものが一つしかない場合には、それを補完する。可能な続きが複数ある場合には、二度目のtabキーの入力でそれらを表示する。この場合、そのまま続きを入力することが可能である。

### Bashショートカット
コマンド入力中・実行中の操作のためのショートカットである。
* `^C`  
実行中のコマンドを中止する。

* `↑`, `↓`  
過去に実行したコマンドを参照する。`↑`で一つ古い、`↓`で一つ新しいコマンドに移る。

### ディレクトリ・ファイルの指定
* 絶対的なもの
    * `/`  
    ルートディレクトリを指定する。

    * `~`  
    ホームディレクトリを指定する。
* 相対的なもの
    * `.`  
    カレントディレクトリを指定する。

    * `..`  
    カレントディレクトリの親ディレクトリを指定する。

    これらはそれぞれのディレクトリの子ディレクトリとして実際に存在する（`ls -a`で確認できる）。

一般のファイルのパスを記述するには、これらで始点を指定し、そこから上下に辿るように指定していけばよい。ルートディレクトリ直下を除いて、階層は`/`で区切られる。
なお、macOSにてファイル名に含まれる（ようにFinderからは見える）`/`は、シェルでは`:`として扱う。

#### 絶対パスと相対パス
一例として、このページを記述するファイルの筆者のローカル環境におけるパスは、例えば次のように表される。
```
/Users/[accountname]/Documents/works/github.io/unix-commands.md
```
このように、ルートディレクトリを起点に記述されたパスを、絶対パスと呼ぶ。なお、ホームディレクトリを起点として次のように記述することもできる。
```
~/Documents/works/github.io/unix-commands.md
```

一方で、カレントディレクトリのパスに依存する記述は、相対パスと呼ばれる。上の例で言えば、カレントディレクトリが`~/Documents/works`であるとき、同ファイルは
```
./github.io/unix-commands.md
```
として参照することもできる。  
また、`/`、`~`、`.`から始まらないパスは、カレントディレクトリを起点とするものとして解釈されるので、次のように記述することもできる。
```
github.io/unix-commands.md
```

### 実行結果をファイルに出力する
デフォルトでコマンドラインに結果が出力されるコマンドを実行する場合、末尾に`>`や`>>`を用いてファイルを指定することで、出力を特定のファイルにリダイレクトすることができる。
```
echo 'Hello, world!' > output.txt
```
このコマンドは、`output.txt`に「Hello, world!」と書き込む。  
`>`と`>>`は、指定されたファイルが空でない場合に異なる挙動をする。`>`は実行結果でファイルを上書きし、`>>`は実行結果をファイルの末尾に追加する。  
また、いずれも、指定されたファイルが存在しない場合にはそのファイルを作成する。


## 現在地の確認と移動
* `pwd`  
現在地のパスを出力する。

* `ls`  
現在のディレクトリ直下のファイル（含ディレクトリ）の一覧を出力する。  
隠しファイルを含めた全てのファイルを表示するには、`-a`オプションを指定する。

* `cd [directory]`  
指定したディレクトリに移動する。

## ファイル操作
* `mkdir [name]`  
特に指定がない場合はカレントディレクトリに、指定した名前の空のディレクトリを作成する。深い位置にディレクトリを作成する場合、通常は親ディレクトリとなるものが既に存在していなければならない。`-p`オプションを用いると、親ディレクトリが存在しない場合にはそれも作成する。
```
mkdir -p ../newdir/newsubdir
```

* `touch [name]`  
特に指定がない場合はカレントディレクトリに、指定した名前の空のファイルを作成する。

* `rmdir [directory]`  
指定したディレクトリを削除する。

* `rm [file]`  
指定したファイルを削除する。ディレクトリの削除も可能。

* `mv [arg1] [arg2]`  
大雑把に言って、`[arg1]`のデータを`[arg2]`の位置に移す働きをする。  
`[arg2]`がディレクトリとして存在する場合には移動、さもなければリネームとして扱われる。
    * `mv [file] [destination]`  
    指定したファイル（ディレクトリも可）を指定したディレクトリに移動する。  
    事前に`[destination]`ディレクトリを作成するのを忘れていた場合は、リネームとして処理されてしまう。`[destination]`の末尾に`/`を付しておくことで、それがディレクトリであることを明示し、作成し忘れた場合にもファイルのリネームと解釈できない（そう解釈するとエラーが出る）ようにすることができる。ただしこの場合も、ディレクトリの移動を試みていた場合にはリネームとして処理されてしまうことには注意せよ。  
    移動先のディレクトリに同名のファイルが存在した場合は、上書きする。上書きしてよいか確認したい場合は`-i`オプションを指定する。

    * `mv [file] [newname]`  
    指定したファイル（ディレクトリも可）の名前を、指定した名前に変更する。  
    `[newname]`にも階層表現を含めることができ、これによってファイルを移動しつつリネームすることもできる。

    参考：[コマンド:mv: UNIX/Linuxの部屋](http://x68000.q-e-d.net/~68user/unix/pickup?mv)

## ファイルへのアクセス
* `cat [file]`  
指定したファイルの内容を出力する。

* `od [file]`  
指定したバイナリファイルの内容を出力する。デフォルトでは8進数で表示される。

* `open [file]`  
指定したファイルを開く。ディレクトリを指定した場合はFinderで開かれる。`-a`オプションにより、ファイルを開くのに用いるアプリケーションを指定することができる。
```
open -a CotEditor unix-commands.md
```

## テキスト処理
* `grep [文字列] [file]`  
指定したテキストファイルの各行のうち、指定した文字列を含む行を出力する。`-v`オプションを指定すると、指定した文字列を**含まない**行を出力する。

## その他
* `echo [str]`  
指定した文字列を出力する。出力先をリダイレクトすることで、ファイルへの書き込みができる。

* `history`  
直近のコマンド履歴を出力する。`-[件数]`としてオプションを付けることで、遡る件数を指定することができる。