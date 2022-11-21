# はじめてのAppleScript
名前は聞いたことがあったというくらいのAppleScriptをなぜか書くことになった（AppleScript 2.8、スクリプトエディタ 2.11）。

## 経緯
最近Googleアカウントをリアル用とバーチャル用に分けたので、そのついでにTwitterから繋がった人人から共有されるGoogleドキュメントのリンクを後者のアカウントで開きたいという欲求が生えた。  
Firefoxのアドオンを作るという当初の計画は「よくわからない」ということで潰えた。次にAutomatorでワークフローを作ることにしたら、どうやら途中でスクリプトを書く必要がありそうだったので、いっそ全部スクリプトで書いてしまえということになり、

## 出来上がったもの
が[こちら](https://github.com/yatabashi/yatabashi.github.io/blob/main/res/openGoogleLinkAsUser2.applescript)になります。

## 実装の流れ
URLの入力を受け取り、それがGoogleのページのものであれば、デフォルトでないアカウントでアクセスするためのクエリを付与してアクセスする。

1. URLを入力
1. google.com下にあるか判定
1. URLの調整
1. クエリの付与
1. アクセス

なお、AppleScriptの能力による制約があるほか、個人用のスクリプトであるために目視を併用すればいいということで、あまり精密に実装していない。

## 解説
AppleScriptはそのまま比較的自然な英語として解釈できるように作られている（例：無意味語として`the`を挿入できる）。  

```
-- dialogのdefault answerを定義
set def to ""
```
すぐ次に出てくるダイアログのプレースホルダーを定義している。ここでは空。
* `--`から始まる行はコメントとして無視される。
* `set A to B`は、`B`を代入する形で、変数`A`を定義する（なんと**代入に等号を使わない**）。

```
repeat
```
後述。
* ループは`repeat`で始まり`end repeat`で終わる。

```
-- URLを入力
display dialog "Tu veux aller où (dans docs.google.com) ?" default answer def with icon note
--> result = {button returned:"OK", text returned:"docs.google.com"}

set input to text returned of result
```
入力欄付きのダイアログを表示し、入力を変数`input`に代入する。
* `display dialog`は、デフォルトで「OK」「キャンセル」のボタンを表示する。ここではオプションとして`default answer`と`with icon`を指定していて、前者は指定した文字列をデフォルト値とする入力欄を設け、後者はアイコンを表示する。ここで入力された値と押されたボタンの情報は、デフォルトでRecord型（辞書型に相当）の変数`result`に格納される。
* Record型の変数からの取り出しには`of`を用いる。

```
-- 末尾の改行文字を削除
if characters -2 thru -1 of input is "\r\n" then
	set input to characters 1 thru -3 of input as text
else if last character of input is "\n" or last character of input is "\r" then
	set input to characters 1 thru -2 of input as text
end if
```
入力の末尾が改行文字（「\r\n」「\n」「\r」のいずれか）である場合は、それを削除する。コピーの仕方によってはそうなっていることが時時あるので、雑に扱えるようにするために挿入している。
* if文は、`if [条件式] then`で始まり`end if`で閉じられる（BASICみたい）。`else if`で二つ以上の分岐を並べることができる。
* 文字列の切り出しは、`characters [開始] thru [終了] of [元文字列] as text`で書ける。`as text`がないと、元文字列がListと見做されてしまうようで上手くいかない。開始と終了のインデックスは1から始まる（末尾からの指定は-1から始まる）。
* 値の同等比較は、ここでは`is`で行っているが、`=`や`is equal to`でも可能。
* 条件式は`and`や`or`で並べることができる。

```
-- スキームを含まなければhttps://を前置
if "://" is not in input then
	set link to "https://" & input
else
	set link to input
end if
```
AppleScriptからURLにアクセスするにはスキームが必須なようなので、必要に応じて付与する。
* 値が等しくないことは`is not`演算子で比較できる。`≠`や`is not equal to`でも可能。
* 文字列の連結には`&`を用いる。
* if文で条件式が偽であった場合の処理は、`else`で書けばよい。

```
-- 既にクエリがあれば削除
if "?" is in link then
	set lastIndex to (offset of "?" in link) - 1
	set link to characters 1 thru lastIndex of link as text
end if
```
Googleドキュメントのページでクエリを複数指定する方法がわからないことと、クエリが重要であることはない気がする（スプレッドシートでシートを指定するために使われることはあるが）ので、すでにある場合は全て削除する。
* `is in`で、右辺に左辺が含まれるかどうかを確かめることができる。
* `offset of [文字列A] in [文字列B]`によって、Bの中でA（の先頭の文字）のある位置を求めることができる。AがBに含まれていなければ0が返される。

```
-- クエリを付与
set linkWithQuery to link & "?authuser=2"
```
正規化されたURLにクエリを付与する。  
google.com内ではログインした順にアカウントに0以上の整数が割り当てられており、クエリとして「authuser」でその値を指定してやることで、特定のアカウントにログインした状態でアクセスすることができる。

```
-- docs.google.comでない場合の註記を生成
if "docs.google.com" is not in linkWithQuery then
	set annotation to "* This is not a URL of docs.google.com ."
else
	set annotation to ""
end if
```
開くURLに「docs.google.com」が含まれていない場合に表示する警告を生成する。

```
-- 開くURLを提示
display dialog linkWithQuery & "\n\n" & annotation buttons {"キャンセル", "修正", "OK"} default button 3 with icon note

-- 「OK」ならrepeat終了、「修正」なら入力を保存してrepeat、「キャンセル」は自動で終了
if button returned of result is "OK" then
	exit repeat
else if button returned of result is "修正" then
	set def to input
end if
```
```
end repeat
```
生成されたURLを提示し、それを開くか、修正するか（、キャンセルするか）を選択させる。開く場合はループを抜けさせ、修正する場合は`input`を表示させるために保存し、ループの末尾に到達させる（→ループの先頭に戻す）。
* 「キャンセル」と名付けられたボタンは、クリック時にエラー-128を吐いて終了する（デフォルトのキャンセルボタンと同じ）ように自動的に設定される。
* ループは`exit repeat`で抜けられる。

```
-- URLを開く
open location linkWithQuery
```
クエリ付きで生成されたURLを開く。
* `open location [URL]`で、デフォルトに設定されたブラウザでURLを開くことができる。

## 参考にした文献
* [AppleScript 最速基本文法マスター-life log](https://mc909j.blogspot.com/p/document.html)
* [AppleScript の基本文法 \| DevelopersIO](https://dev.classmethod.jp/articles/applescript-basic-grammar/)
* [鳶嶋工房 / AppleScript / Dictionary / Basic(索引)](http://tonbi.jp/AppleScript/Dictionary/Basic/)
* [鳶嶋工房 / AppleScript / Dictionary / OSAX(索引)](http://tonbi.jp/AppleScript/Dictionary/OSAX/)
* [テキスト入力を促す - mytrans マニュアル等の個人的な翻訳](https://sites.google.com/site/zzaatrans/home/macautomationscriptingguide/promptfortext-html)
* [display dialogとdisplay alertの違い - ザリガニが見ていた...。](https://zariganitosh.hatenablog.jp/entry/20110622/display_dialog_vs_alert)
* [AppleScript : display dialog の表示と返り値 - GameSprit](https://sdesignlabo.com/web/favicon/)
* [AppleScriptで文字列を処理する](https://www.12kai.com/scr/proptext.html) (1)
* [AppleScriptで文字列を処理する](https://www.12kai.com/scr/proptext2.html) (2)
* [AppleScriptで文字列を処理する](https://www.12kai.com/scr/proptext3.html) (3)

## 参考になりそうな文献
* [For Beginners – AppleScriptの穴](http://piyocast.com/as/master)