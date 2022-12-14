-- dialogのdefault answerを定義
set def to ""

-- 開くURLを確定させるまでrepeat
repeat
	-- URLを入力
	display dialog "Tu veux aller où (dans docs.google.com) ?" default answer def with icon note
	--> result = {button returned:"OK", text returned:"docs.google.com"}
	
	set input to text returned of result
	
	-- 末尾の改行文字を削除
	if characters -2 thru -1 of input is "\r\n" then
		set input to characters 1 thru -3 of input as text
	else if last character of input is "\n" or last character of input is "\r" then
		set input to characters 1 thru -2 of input as text
	end if
	
	-- スキームを含まなければhttps://を前置
	if "://" is not in input then
		set link to "https://" & input
	else
		set link to input
	end if
	
	-- 既にクエリがあれば削除
	if "?" is in link then
		set lastIndex to (offset of "?" in link) - 1
		set link to characters 1 thru lastIndex of link as text
	end if
	
	-- クエリを付与
	set linkWithQuery to link & "?authuser=2"
	
	-- docs.google.comでない場合の註記を生成
	if "docs.google.com" is not in linkWithQuery then
		set annotation to "* This is not a URL of docs.google.com ."
	else
		set annotation to ""
	end if
	
	-- 開くURLを提示
	display dialog linkWithQuery & "\n\n" & annotation buttons {"キャンセル", "修正", "OK"} default button 3 with icon note
	
	-- 「OK」ならrepeat終了、「修正」なら入力を保存してrepeat、「キャンセル」は自動で終了
	if button returned of result is "OK" then
		exit repeat
	else if button returned of result is "修正" then
		set def to input
	end if
end repeat

-- URLを開く
open location linkWithQuery
