# SATySFiを導入した
レポート作成のためにSATySFiの環境構築をしようとしたら（無知と不慣れのせいで）数時間かかって少し苦労したので、行動記録をつけておきます。

## 何をしたかったか
SATySFiを、Easytableを導入して使おうとしていました。

## 失敗
まず [SATySFi Documents](https://puripuri2100.github.io/learn-satysfi/chapter3/chapter_3.html) を参照しました。satyrographosをインストールしたのち、それを使ってSATySFiを導入しようとしたところまで覚えています。が、その後のどこかの段階で失敗しました（記憶がない）。不確かですが、SATySFiのインストールには成功し、「Hello SATySFi!」にも成功したものの、Easytableの導入に失敗したような気がします。この時点では殆ど闇雲に試行していたので、続行を諦め、他の文書を当たりました。

次に、 [本家のREADME](https://github.com/gfngfn/SATySFi/blob/master/README-ja.md) に従って導入を試みました。この文書では二つのインストール方法が示されています。しかし私はそれに気が付かず、それら二つを続けて実行することが求められているものと捉えてしまったため、すでに「Satyrographos を使ったインストール方法」に当たる操作を済ませていたにも関わらず、「OPAM を使ったインストール方法」を重ねて実行しました。当然コンフリクトを起こし（「セットアップ」節の `./install-libs.sh` の段階だったかな）、これも放棄することにしました。

また、ブラウザでSATySFiをコンパイルする方法を探し、例えば [SATYSFI Playground](www.satysfi-playground.tech) を試すなどしましたが、Easytableを呼ぶことに失敗したため、やはり諦めることになりました。なお、高校生の頃にOverleafをSATySFiをブラウザから編集する環境として推奨されたことがあり、それをまず試そうと思ったものの名前を思い出せなかったために他をあたるなどしていました（記事を書いているうちに思い出しました）。

ところで、ここまでの段階で一度も最初からやり直すと言うことをしていないのは、その発想がなかったのに加え、実行してきたコマンドが具体的に何をどこに生成しているのかを理解していなかったためです。しかし、手当たり次第に調べるうちに[あるページ](https://www.fos.kuis.kyoto-u.ac.jp/~igarashi/class/pl/setup.html)に到達し、次の記述を見つけました：  
> それでもだめなら、opamを再インストールしてみましょう。 ~/.opam を削除した上でこのページの手順を最初からやり直してみてください。

ここでやっと「やり直し」という概念を手に入れた私は、 `~/.opam` を削除し、 `brew uninstall opam` を実行しました。

## 成功
まず、次のページを必要に応じて参照していたことを附記しておきます：[SATySFi インストール手引き 2021年5月版](https://qiita.com/na4zagin3/items/a6e025c17ef991a4c923)

再び [本家のREADME](https://github.com/gfngfn/SATySFi/blob/master/README-ja.md) を参照したところ、「Satyrographos を使ったインストール方法」のみを実行すればいいことに気がついたため、己の注意力を心配しつつ、再び導入を始めました。
```
brew update
brew install opam

# 共通 OPAM の設定
opam init
eval $(opam env)
opam repository add satysfi-external https://github.com/gfngfn/satysfi-external-repo.git
opam repository add satyrographos https://github.com/na4zagin3/satyrographos-repo.git
opam update

# 共通 SATySFi のインストール
opam depext satysfi satysfi-dist satyrographos
opam install satysfi satysfi-dist satyrographos
```
（[gfngfn/SATySFi/README-ja.md](https://github.com/gfngfn/SATySFi/blob/master/README-ja.md) より引用）

すると `satyrographos install` の段階で `command not found: satyrographos` とエラーを吐かれましたが、「[Satyrographos でパッケージの簡単インストール](https://qiita.com/na4zagin3/items/14fe2647b663eeac6ac2#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95)」によれば `eval $(opam env)` の実行が必要とのことだったので従い、再び実行して事無きを得ました。  
```
eval $(opam env)
```

これでインストールが完了したので、デモファイルを実行しました。
```
git clone https://github.com/gfngfn/SATySFi.git
cd SATySFi/demo
make
```

ところで、Easytableは外部ライブラリです。よって何らかの方法で導入する必要があり、その方法については再び「[Satyrographos でパッケージの簡単インストール](https://qiita.com/na4zagin3/items/14fe2647b663eeac6ac2#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95)」に記載がありました。Easytableは `satyrographos-repo` に含まれていたため、次を実行するだけで済みました。
```
opam install satysfi-easytable
satyrographos install
eval $(opam env)
```

なお、 `satyrographos install` により、目的のライブラリは次の場所にコピーされます： `~/.satysfi/dist/packages/easytable/easytable.satyh` 。よって、[Easytableのドキュメント](https://github.com/monaqa/satysfi-easytable/blob/master/doc/easytable.pdf)には `@require: easytable` とありますが、これは `@require: easytable/easytable` の誤りであるようです（[@yatabashiと@puripuri2100の会話](https://twitter.com/puripuri2100/status/1681282119245664257)を参照）。  
また、 `open EasyTableAlias` の後には `in` が必要です。[コマンド定義の最後に必要という記事](https://zenn.dev/monaqa/articles/2020-12-17-satysfi-for-beginner-command-definition)を見つけたためそれに倣いましたが、一般にdocument宣言の前で操作を行う場合には末尾に必要になるようです（[@puripuri2100の解説](https://twitter.com/puripuri2100/status/1681282678413479936)）。

## 延長戦
ここまでで当初の意図は達されましたが、キリル文字を表示しようと思ったら詰まったので、それにも言及しておきます。  
[軽く調べた](https://github.com/gfngfn/SATySFi/wiki/%E7%9B%AE%E7%9A%84%E5%88%A5%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E4%B8%80%E8%A6%A7)ところ、[Fonts-Theano](https://github.com/na4zagin3/SATySFi-fonts-theano)というパッケージが見つかりました。これも `satyrographos-repo` 内にあるので
```
opam install satysfi-fonts-theano
satyrographos install
```
によりインストールし、用例（[参照1](https://qiita.com/na4zagin3/items/627599ca746756e93bc1)、[参照2](https://github.com/na4zagin3/SATySFi-fonts-theano/blob/master/doc-fonts-theano-ja.saty)）を参考に（あまり理解しないまま）次を追記し、
```
let-inline ctx \cyrillic it = 
  let ctx =
    ctx |> set-font OtherScript (`fonts-theano:TheanoOldStyle`, 1., 0.)
  in
  read-inline ctx it
```
本文中のキリル文字部分を`\cyrillic{}`で囲うことで目的を達成しました。  

## 完成品
![numerals](./res/numerals.png)

## 後日談（2023年8月20日追記）
stdja で採用される欧字フォント（ Junicode ）に、 Theano がどうもそぐわなかったので、自前で EBGaramond を入れることにしました。ライブラリ化はせず（一つには面倒に感じ、もう一つにはやり方を知りません）、ただ該当フォントファイルを `~/.satysfi/dist/fonts` に手動で投げ込んだだけなので、フォントの入ったディレクトリ、他のライブラリに関する操作を加えた際にはその都度入れ直す必要があります（`satyrographos install` によって削除されます）。また、アラビア文字も表示できるようにと同様の処置をしました（フォントは Amiri ）が、SATySFiは今のところ（バージョン0.0.8）RTLに対応していないようです。

また、フッターに表示されるページ数を無駄に大きな値にしたかったのでそのやり方を考えて[唸っていた](https://twitter.com/yatabashi/status/1682696187495981057)ところ SATySFi 作者本人から直接救いの手が差し伸べられたので、指示に従って[クラスファイル stdja.satyh の388行目](https://github.com/gfngfn/SATySFi/blob/211ac10bbb13f68f604af60ab18b11cd3f409395/lib-satysfi/dist/packages/stdja.satyh#L388)の
```
let it-pageno = embed-string (arabic pbinfo#page-number) in
```
を以下のように変更したファイルを mystdja.satyh とし、 `~/.satysfi/dist/packages` に置いて読ませることにしました。
```
let it-pageno = embed-string (arabic (pbinfo#page-number + 64)) in
```
