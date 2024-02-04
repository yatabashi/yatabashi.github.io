/*
行を単独で占める記号:
    EOF : データの末尾
    ε : 半丁の区切り
    flex : 上下区切りの上部の開始
    flex:annot : 上下区切りの上部（首書）の開始
    / : 上下区切りの下部の開始
    /flex : 上下区切りの終了
行の末尾に附属する記号:
    ： : 常に改行しない
    ； : 常に改行する
行中に附属する記号：
    ｜*（*） : 複数文字に対するルビ
    *（*） : 一文字に対するルビ
    ＾* : 上付き文字
    ＿* : 下付き文字
    *［*］ : 異体字の構成を記述する
    ＜*・*・...・*＞ : 行中の横並び
    「*・*・*・*・*」 : 行中の方形の並び（先頭から順に上、右、下、左、中央を記述する）
*/

const TEXT = `新板塵郊記

【空白】

新板塵郊記

廾四番

｜新板（しんはん）｜塵刧記（ぢんかうき）　｜本書序（ほんしよのぢよ）　｜吉田光由（よしたみつよし）編（へんす）；
それ算（さん）は、｜伏羲（ふつき）｜隷首（れいしゆ）に令じてより、｜周官（しうくわん）に｜保氏（ほし）
を置（をき）、是（これ）より｜以来（このかた）｜算數（さんすう）世（よ）にをこなはれて、｜國家（こくか）の
｜重器（てうき）たり誠（まこと）に故（ゆへ）有（ある）かな。算（さん）の要（よう）たる事、國（こく）
家（か）を治（をさ）め、｜百姓（はくせい）をみちびくに及（をよん）で、｜方田不足（ほうでんふそく）、勾（かう）
｜股圓長（かうゑんちやう）あり。其（その）｜狹廣（けうくわう）をはかりて、其（その）耕（かう）をおさむる
に、｜井田（せいでん）の法（ほう）有十一の法有。もし其法をみだる
时（とき）は｜百姓（はくせい）おだやかならず、又（また）軍（ぐん）をなし、賦（ふ）をなす
に、士（し）をひき、｜歩卒（ほそつ）をまじふるに、｜算數（さんすう）をもつて
よくみちびきおさむる也。妙（めう）なるかな、｜遠山（ゑんざん）の高（たか）さ

いたらずして爰（こゝ）にしり、｜海渕（かいゑん）のふかさ、いらずして
底（そこ）をしる。いはんや｜天理（てんり）をや日月の｜行道（きやうだう）、｜春秋（しゆんしう）の
｜運氣（うんき）、其（その）外（ほか）｜巫醫（ぶい）｜百工（はくかう）のたぐひ、皆（みな）｜算數（さんすう）によつて
｜吉凶（きつけう）をもとめ、｜血気（けつき）の｜順逆（じゆんぎやく）をしる。此（この）道（みち）によらず
して、妙（めう）をしり理（り）をさとす事はなんぞや。然（しかれ）ども
其（その）ふかきをしり、委（くわしき）をさとす事は、いたらざれば
得（え）がたし。故（かるがゆへ）に其（その）｜綱領（こうりやう）をしるして、｜聖門（せいもん）に入
ひとつの便（たより）とせんとおもへど、｜下愚（かぐ）のまめならざれ
ば、あるひは｜不足（ふそく）、或（あるひ）は重（しげく）てなん有なん。よく明（あきらか）ならん
人、｜違闕（ゐけつ）をたゞさは、まことたすけとやならん

同増補［衤→礻］頭書序；
此｜塵刧記（ぢんかうき）は、｜山城国（やましろのくに）｜嵯峨（さが）の｜住人（ぢうにん）｜吉田氏（よしたうぢ）｜光由（みつよし）とやらんの｜作書（さくしよ）と也。され、は彼（かの）｜光由（みつよし）は
｜算藝（さんげい）｜暦道（れきだう）に｜不限（かぎらす）、｜書讀（しよどく）にも｜發明（はつめい）なりけるとなん、実（げに）も｜作意（さくい）こまかに
して、よく｜初心（しよしん）をみちびきて、遠（とを）きに行（ゆき）高（たか）きにのぼる便（たより）となせり
然（しかる）故（ゆへ）にや｜近代算術（きんたいさんじゆつ）の｜發明（はつめい）と、世（よ）に誉（ほまれ）を得（う）る｜方〻（かた〱）も、おほくは是より
もとづき侍る人のみと也。さあるをもつて思へは、｜光由（みつよし）は｜倭朝（わてう）｜中興（ちうかう）｜算術（さんじゆつ）
の｜元祖（ぐわんそ）とも云つべし。｜初学（しよがく）｜厚勘（こうかん）ともに、取（とり）すつる事なかれ。爰（こゝ）に
｜若年（ぢやくねん）より、此（この）道（みち）に心（こゝろ）がけ、｜老年（らうねん）に至（いた）る迄、露（つゆ）すつる事なく、｜發明（はつめい）して
妙（めう）を得（ゑ）らるゝ程（ほと）の人侍りしが、盛（さかん）なりし比（ころ）は、ぢんかうきの趣（をもむき）あさはか
にて何（なに）之（の）役（やく）にかたらんとあざむきて、｜一向（いつかう）｜算木（さんぎ）の取（とり）あつかひ、｜天元飜法（てんけんほんほう）
｜等之妙術（とうのめうじゆつ）、或（あるひ）は｜方圓（ほうゑん）の｜圖説（づせつ）なとになづみて、｜他事（たじ）をわすられけるは｜段〻（だん〱）
いたりぬれば今（いま）は｜慢心（まんしん）もうせけるにや、｜？？（かゑつて）｜塵刧記（ぢんかうき）の｜作意（さくい）｜殊勝（しゆせう）也（なり）と
かんじ、迚（とても）の事（こと）に彼（かれ）に｜増補（ぞうほ）｜首書（かしらかき）を立、猶（なを）｜初心（しよしん）の助（たすけ）にもと思（おも）ひよりて
｜書集（かきあつめ）をかれけるを、久（ひさ）しき友（とも）とて予（よ）に見せられける故（ゆへ）に、予（よ）もまた
其（その）心（こゝろ）ざしの、わたくしなく｜愚成（おろかなる）をみちびかんとの｜真実（しんじつ）をかんじ、｜端書（はしかき）を加（くわへ）侍也。

｜増補（そうほ）［衤→礻］｜新編（しんへん）｜塵刧記（ぢんかうき）一目録：
flex
第一　｜大数（たいすう）の名（な）の事；
第二　｜小数（せうすう）の名（な）の事；
第三　粮（かて）の数（かす）の名（な）之事；
第四　田（た）の数（かす）の名（な）之事；
第五　｜諸物（しよぶつ）｜軽重（きやうぢう）之事；
第六　九〻の数（かす）之事；
第七　八算（さん）の割（わり）の声（こへ）＾付圖（づ）懸（かけ）ざんの事；
第八　見一の割（わり）の声（こへ）＾付圖（づ）懸（かけ）ざんの事；
第九　かけてわれる算（さん）の事：
/
第十　米（こめ）うりかひの事；
第十一　たわらまはしの事；
第十二　たはらすぎざんの事；
第十三　蔵（くら）に俵（たはら）入つもりの事；
第十四　銭（ぜに）うりかひの事；
第十五　銀（ぎん）両（りやう）かへの事；
第十六　金（きん）両（りやう）かへの事；
第十七　｜小判（こばん）両（りやう）かへの事；
第十八　萬利足之事；
第十九　絹（きぬ）｜木綿（もめん）｜賣買（うりかい）之㕝：
/flex

flex:annot
▲大数之事；
三重韻秭［⿰禾市］文字之
注＾ニ千億也とあり
今小乗にて是を
考るに万億之位＾ニ
當＾ル也；
又風俗通＾ニ云＾ク
千生＿㆑万々生＿㆑億々
生＿㆑京々生＿㆑秭［⿰禾市］々生
垓々生＿㆑壌［六→亠］々生＿㆑澗
々生＿㆑正々生＿㆑載々ハ
地モ所＿㆑不＿㆑能＿㆑載也
＾ト云〻此説ヨリ見
れは秭［⿰禾市］と垓と前
後せり其上溝と
いふ数欠て壌［六→亠］ヨリ
澗へ飛越たり？ん；
▲小数之事；
両は四匁之位文は銭
数也其外は一より
下のわかちなり
次㐧に考下？？知也；
▲粮の数之事；
/
第一　大数之名の事；
一　十　百　千　万　億（おく）　＜十億・百億・千億＞　兆（てう）　＜十兆・百兆・千兆＞　京（けい）　＜十京・百京・千京＞　
垓（がい）　＜十垓・百垓・千垓＞　｜𥝱（ちよ）　＜十𥝱・百𥝱・千𥝱＞　穰（じやう）［吅→厸］　＜十穰［吅→厸］・百穰［吅→厸］・千穰［吅→厸］＞　溝（かう）　＜十溝・百溝・千溝＞　澗（かん）　＜十澗・百澗・千澗＞　
正（せい）　＜十正・百正・千正＞　載（さい）　＜十載・百載・千載＞　極（ごく）　＜十極・百極・千極＞　｜恒河沙（がうがしや）　＜十恒河沙・百恒河沙・千恒河沙＞
｜阿僧祇（あそうぎ）［示→礻］　＜十阿僧祇［示→礻］・百阿僧祇［示→礻］・千阿僧祇［示→礻］＞　｜那由他（なゆた）　＜十那由他・百那由他・千那由他＞　
｜不可思議（ふかしき）　＜十不可思議・百不可思議・千不可思議＞　｜無量（むりやう）　＜十無量・百無量・千無量＞　｜大數（たいすう）　＜十大数・百大数・千大数＞；
第二　小数之名の事；
兩（りやう）［⿻帀从］　文（もん）　分（ふん）　厘（り）　毫（もう）　絲（し）　忽（こつ）　㣲（ひ）　纎（せん）　沙（しや）　塵（ぢん）　埃（あい）［矢→⿻𠂉人］；
第三　粮（かて）の数（かす）の名之事：
/flex

flex:annot
○斛の一字を古は
壹石なりといふ
今は五斗或は貮
斗五升と云説も
有也；
○釜を六斗四升と
云二釜半を斞［臾→㬰］と
いふ也○庾［臾→㬰］を一石
六斗○東を十六斛と注せり；
▲田数之事；
異國に八方五尺を
一歩として横一間
直二百四十間を一
畝［⿱亠⿰田人］と云？？丈
長六十丈に當＾ル也
○六十歩を一角と
云一畝［⿱亠⿰田人］は四角＾ニ當也
○百畝［⿱亠⿰田人］を一頃と云也
又方六尺を為＿㆑歩
説も有也但日本之
壹町は古は六十間四
方今は六十間＾ニ五十間也：
/
斛（こく）＿石　斗（とう）　升（せう）　合（がう）　勺（しやく）　抄（さい）　撮（さつ）　圭（けい）　粟（ぞく）；
第四　｜田数（たかす）之名の事；
一町（てう）　＜但六拾間四方也・一間と云は六尺五寸＞　一反（たん）　＜むかしは三百六十坪・今は三百坪を云也＞　
一畝（せ）［⿱亠⿰田人］　＜三十歩をいふ也・卅歩とは三十坪也＞　一歩（ぶ）　＜一坪をいふ也・六尺五寸四方也＞　
一分（ふん）　＜長さ六尺五寸・廣さ六寸五分＞　一厘（り）　＜長さ六寸五分・廣さ六寸五分＞　
一毫（もう）　＜長さ六寸五分・廣さ六分五り＞　一絲（じ）　＜長さ六分五り・廣さ六分五り＞　
一忽（こつ）　＜長さ六分五り・廣さ六り五毛＞　一微（び）［山→⿴囗丨］　＜長さ六り五毛・廣さ六り五毛＞：
/flex

flex:annot
▲基数之事；
一より十まてを基
数とも原数共云也
○一は北方水陽数也
○二は南方火陰数也
○三は東方木陽竒也
○四は西方金陰偶数也
○五は中央土陽竒也
○六は水一＾ニ土五を加＾ル也
○七は火二＾ニ土五を加＾ル也
○八は木三＾ニ土五を加＾ル也
○九は金四＾ニ土五を加＾ル也
○十は土五之信数也；
△文字之分ケハ；
丁の下を除て一也故＾ニ
不勾と記＾ス　示＾ノ下
を除て二也故＾ニ不小
と記＾ス　王の立点を
除て三也故＾ニ不直＾ト
記＾ス　罪の下を除て
四也故＾ニ不非と記＾ス　
吾の下を除て五也
故＾ニ不口と記＾ス
/
「・一・丁・不勾・壹」　「・二・示（じ）・不小・貮」　「・三・王・不直・参［彡→⿳丿人］」　「・四・罪（ざい）・不非・肆」　「・五・吾（ご）・不口・伍」　
「・六・交（けう）・不乂・陸」　「・七・皂（さう）・不白・柒［⿰氵⿱土木］」　「・八・分・不刀・捌」　「・九・丸（ぐはん）［丶は⺄に掛る］・不点・玖［久→夂］」　「・十・針（しん）・不金・拾」；
一仃（きん）　＜二百五十目・百六十目＞　一丈（じやう）　＜尺十・をいふ＞　一尺（しやく）　＜一寸・十を・いふ＞　一本（ほん）　＜木・一・丁＞　一束（そく）　＜一把・＞　
一疋（ひき）　＜絹［口→厶］・二・端也＞　一粒（りう）　一盃（はい）　一駄（だ）　＜馬・＞　一艘［⿻臼丨→⿰丨由］　＜舟・＞；
第五　諸物軽重の事；
金（きん）　＜一寸四方・高＾サ同前＞　＜おもさ・百七拾五匁＞　銀（ぎん）　同　＜おもさ・百四拾目＞：
/flex
EOF`
