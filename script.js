const quizData = {
  apex: {
    name: "APEX LEGENDS",
    title: "APEXプレイスタイル診断",
    types: {
      strategist: { title:"戦況を読むストラテジスト", subtitle:"勝ち筋を見つけてチームを導く、冷静な判断派。", emblem:"⌖", description:"目の前の戦闘だけでなく、安置や周囲の部隊、次に起きることまで考えるタイプ。無理な戦闘を避けて、有利な状況を作るのが得意です。", tips:"戦闘を始める前に、退路と次の移動先を決めてみよう。ダメージを出すことだけでなく、味方が動きやすい位置を取る意識も強みに変わります。"},
      fragger: { title:"チャンスを掴むアタッカー", subtitle:"勝負どころで前に出る、攻めのエースタイプ。", emblem:"✦", description:"敵の隙を見つけたら積極的に仕掛けるタイプ。プレッシャーをかけたり、ダウンを取って人数有利を作ったりする場面で力を発揮します。", tips:"攻める前に味方との距離とカバーの有無を確認しよう。ダウンを取った後に一度立て直す習慣をつけると、勢いを勝利につなげやすくなります。"},
      support: { title:"味方を支えるチームアンカー", subtitle:"チームの安定感を高める、頼れるサポート役。", emblem:"◇", description:"味方の位置や体力、戦況を気にかけて動けるタイプ。カバーや蘇生、必要な情報共有でチームの崩れを防ぐのが得意です。", tips:"味方を助けるときも自分が安全かを確認しよう。敵の位置や移動先を短く伝えるなど、具体的な情報共有を意識するとさらに頼れる存在に。"},
      scout: { title:"機動力を活かすスカーミッシャー", subtitle:"状況に合わせて動き、チャンスを広げる柔軟派。", emblem:"➤", description:"ポジションを変えたり、別角度から戦況を見たりするのが好きなタイプ。状況に合わせて攻守を切り替え、チームの選択肢を増やせます。", tips:"移動スキルを使う前に、着地先と合流ルートを考えてみよう。先行しすぎず、味方が追いつける距離を保つと機動力をより活かせます。"}
    },
    questions: [
      {q:"リングが遠い。周囲に敵もいそうなとき、どうする？",a:[["まず安全な移動ルートを探す","strategist"],["敵がいたら先に仕掛ける","fragger"],["味方と相談してまとまって移動する","support"],["高所や別ルートから様子を見る","scout"]]},
      {q:"味方が敵を見つけた！最初に考えるのは？",a:[["戦う価値と漁夫のリスク","strategist"],["ダメージを与えられるチャンス","fragger"],["味方がカバーできる位置か","support"],["別角度を取れるルート","scout"]]},
      {q:"自分の得意な場面に近いのは？",a:[["終盤の位置取りと判断","strategist"],["近距離の撃ち合い","fragger"],["味方のカバーや立て直し","support"],["移動して有利な角度を取る","scout"]]},
      {q:"味方が先にダメージを受けたら？",a:[["敵の位置と人数を確認する","strategist"],["敵が詰めてきたら迎え撃つ","fragger"],["カバーして安全な回復時間を作る","support"],["横や別角度から圧をかける","scout"]]},
      {q:"物資を集め終えたら何を意識する？",a:[["次の安置と移動タイミング","strategist"],["戦闘できそうな敵部隊","fragger"],["味方の装備や必要物資","support"],["移動手段とポジション候補","scout"]]},
      {q:"不利な戦闘になったときは？",a:[["撤退条件を判断して引く","strategist"],["一人でも削れそうなら勝負する","fragger"],["味方が離れないようにまとめる","support"],["遮蔽物や移動スキルで位置を変える","scout"]]},
      {q:"チームで褒められるとうれしいのは？",a:[["判断がよかった","strategist"],["撃ち合いが強かった","fragger"],["助かった、カバーありがとう","support"],["動きがうまい、視点がいい","scout"]]},
      {q:"終盤に残り部隊が多い。どう動く？",a:[["戦闘を避けて有利な場所を取る","strategist"],["弱った部隊を見つけて仕掛ける","fragger"],["味方と固まり、守りやすくする","support"],["安全な移動ルートを確保する","scout"]]},
      {q:"味方と意見が分かれたら？",a:[["状況とリスクを整理して提案","strategist"],["自分の案で勝負する理由を伝える","fragger"],["全員が動ける案を探す","support"],["別案や迂回ルートを提案する","scout"]]},
      {q:"一番伸ばしたい能力は？",a:[["マクロ判断と安置読み","strategist"],["エイムと対面力","fragger"],["連携とカバーの精度","support"],["移動とポジション取り","scout"]]}
    ]
  },
  fortnite: {
    name: "FORTNITE",
    title: "Fortniteプレイスタイル診断",
    types: {
      builder: { title:"建築・編集テクニシャン", subtitle:"建築と編集で戦いを組み立てる技巧派。", emblem:"▧", description:"建築や編集を使って戦闘を有利に進めることに魅力を感じるタイプ。状況に応じて遮蔽物を作り、相手の動きを制限するのが強みです。", tips:"速さだけでなく、建築素材の残量や周囲の安全も確認しよう。編集後に狙いを定める時間を作ると、技術を安定した結果につなげやすくなります。"},
      aim: { title:"エイムで勝負するファイター", subtitle:"狙いを定めてチャンスをものにする精密派。", emblem:"⊙", description:"相手を見つけたときの照準やダメージ交換を重視するタイプ。シンプルな動きで相手の隙を突き、戦闘を決める場面で力を発揮します。", tips:"撃つ前に遮蔽物と次の位置を確認しよう。命中率だけでなく、撃った後に安全な場所へ戻る動きも練習すると安定感が増します。"},
      survivor: { title:"状況判断のサバイバー", subtitle:"無理をせず、最後まで残る勝ち筋を探す戦略派。", emblem:"⌂", description:"安全なルートや回復、物資の管理を大切にするタイプ。必要のない戦闘を避けながら、終盤で勝負できる状態を整えるのが得意です。", tips:"安全な移動先を早めに考えつつ、敵に有利な場所を譲りすぎないようにしよう。終盤を想定したポジション選びを意識してみてください。"},
      aggressor: { title:"攻めを楽しむアグレッサー", subtitle:"テンポよく仕掛けて主導権を握る攻撃派。", emblem:"⚡", description:"自分から戦闘を始め、相手に考える時間を与えないスタイルが好きなタイプ。思い切りのよさと積極性が魅力です。", tips:"攻める前に回復、弾薬、退路を確認しよう。相手が強い位置にいるときはいったん引く判断も、攻めを続けるための大切な技術です。"}
    },
    questions: [
      {q:"マッチ開始直後、どんな場所に降りたい？",a:[["建築素材を集めやすく動きやすい場所","builder"],["敵と戦えてエイムを試せる場所","aim"],["物資を安全に集められる場所","survivor"],["敵が多くてすぐ戦える場所","aggressor"]]},
      {q:"敵に見つかったとき、まず何をする？",a:[["建築で遮蔽物を作り、編集で反撃","builder"],["狙いを合わせてダメージを取る","aim"],["安全な位置へ移動して態勢を整える","survivor"],["距離を詰めて主導権を取る","aggressor"]]},
      {q:"一番練習してみたいのは？",a:[["建築と編集のコンボ","builder"],["エイムと追いエイム","aim"],["安置読みと物資管理","survivor"],["攻めるタイミングと対面","aggressor"]]},
      {q:"相手が建築で守り始めたら？",a:[["編集や建築で有利な形を作る","builder"],["隙が見えた瞬間に狙う","aim"],["無理せず別ルートを考える","survivor"],["プレッシャーをかけ続ける","aggressor"]]},
      {q:"終盤で大事にしたいのは？",a:[["建築を使った安全な移動","builder"],["相手を正確に狙える位置","aim"],["安全地帯と回復の管理","survivor"],["弱った敵を見逃さないこと","aggressor"]]},
      {q:"物資が少ない状態で敵と遭遇したら？",a:[["建築で守りながら状況を作る","builder"],["有利な距離から狙いを定める","aim"],["戦闘を避けて物資を探す","survivor"],["短時間で勝負を決めにいく","aggressor"]]},
      {q:"勝ったとき、特にうれしいのは？",a:[["きれいな建築・編集が決まった","builder"],["狙ったショットが当たった","aim"],["良い判断で最後まで残れた","survivor"],["積極的な連戦を勝ち抜けた","aggressor"]]},
      {q:"安全地帯が遠いとわかったら？",a:[["建築を活かしてルートを作る","builder"],["移動中に狙いやすい敵を警戒","aim"],["早めに移動計画を立てる","survivor"],["移動しながら戦える相手を探す","aggressor"]]},
      {q:"自分のプレイを振り返るとき、気になるのは？",a:[["建築や編集のミス","builder"],["撃ち合いで外した場面","aim"],["移動や回復の判断","survivor"],["攻める・引くタイミング","aggressor"]]},
      {q:"理想の勝ち方に一番近いのは？",a:[["技術を活かしてきれいに勝つ","builder"],["正確なショットで勝ち切る","aim"],["落ち着いて終盤を制する","survivor"],["積極的に仕掛けてビクロイ","aggressor"]]}
    ]
  }

  ,
  brawl: {
    name: "BRAWL STARS",
    title: "ブロスタ プレイスタイル診断",
    types: {
      carry: {title:"勝負を決めるキャリー役",subtitle:"チャンスを見逃さず、勝ち筋を作る攻撃派。",emblem:"✦",description:"敵のスキや勝負どころを見つけると積極的に動くタイプ。相手を倒して人数有利を作ったり、ゴール直前のチャンスを押し込んだりするのが好きです。",tips:"攻める前に弾数、体力、味方の位置をチェック。倒し切れないときに一度下がる判断を身につけると、攻撃の強さが安定します。"},
      control: {title:"マップを支配するコントローラー",subtitle:"エリアやオブジェクトを意識する戦略派。",emblem:"⌖",description:"敵を倒すことだけでなく、エリアを維持したり相手の進路を制限したりするのが得意なタイプ。マップとモードの目的を意識して動きます。",tips:"敵を追いかけすぎず、モードの勝利条件を優先しよう。遮蔽物やブッシュ、射程を使って相手が動きにくい場所を作るのがおすすめ。"},
      support: {title:"チームを支えるサポーター",subtitle:"味方の動きを見てチーム全体を強くする協力派。",emblem:"◇",description:"味方の体力や位置、必要な援護を意識するタイプ。味方が攻めやすいように支援したり、ピンチの仲間を助けたりすることにやりがいを感じます。",tips:"味方と同じ相手を狙う意識を持とう。全員が別々に戦うより、人数有利を作る連携を意識すると勝利に近づきます。"},
      flexible: {title:"状況対応のオールラウンダー",subtitle:"モードや相手に合わせて戦い方を変える柔軟派。",emblem:"↗",description:"一つの動きにこだわらず、マップや相手の編成に合わせて行動を変えられるタイプ。攻める・守る・援護するを状況に応じて切り替えます。",tips:"負けた場面を振り返って、キャラ選択やルートを変えられないか考えよう。得意キャラを持ちつつ、別の役割も練習すると対応力が伸びます。"}
    },
    questions: [
      {q:"試合が始まったら、まず何を意識する？",a:[["相手を倒して有利を作る","carry"],["重要なエリアや目標を押さえる","control"],["味方と足並みをそろえる","support"],["相手とマップを見て動きを決める","flexible"]]},
      {q:"味方がピンチのときは？",a:[["敵を倒して助けるチャンスを狙う","carry"],["敵が進めない位置を取る","control"],["味方の援護に向かう","support"],["状況を見て助けるか目標を守るか判断","flexible"]]},
      {q:"好きな勝ち方は？",a:[["連続で敵を倒して押し切る","carry"],["目標を守り切って勝つ","control"],["チームの連携で勝つ","support"],["相手に合わせて作戦を変えて勝つ","flexible"]]},
      {q:"敵が強い場所を守っている。どうする？",a:[["隙を見つけて突破する","carry"],["別の場所を押さえて圧をかける","control"],["味方とタイミングを合わせる","support"],["相手のキャラを見てルートを変える","flexible"]]},
      {q:"キャラを選ぶとき、何を重視する？",a:[["ダメージやキル性能","carry"],["射程やエリア制圧力","control"],["回復や味方への援護","support"],["マップや味方との相性","flexible"]]},
      {q:"残り時間が少ないときは？",a:[["逆転できるキルを狙う","carry"],["目標を守る位置を優先する","control"],["味方が動けるように支える","support"],["点差と状況から最善手を選ぶ","flexible"]]},
      {q:"自分が一番得意だと思うのは？",a:[["撃ち合いで勝つこと","carry"],["相手の進路を読むこと","control"],["味方を助けること","support"],["場面ごとに動きを変えること","flexible"]]},
      {q:"味方がバラバラに動いていたら？",a:[["勝てそうな相手を攻める","carry"],["目標周辺に相手を近づけない","control"],["味方の近くで連携を作る","support"],["人数や位置を見て動き方を選ぶ","flexible"]]},
      {q:"負けた試合で振り返りたいのは？",a:[["撃ち合いの勝ち負け","carry"],["目標を取るタイミング","control"],["味方との連携","support"],["キャラ選択と立ち回り全体","flexible"]]},
      {q:"理想のプレイヤー像は？",a:[["試合を決めるエース","carry"],["相手の動きを封じる戦略家","control"],["チームに欠かせない支援役","support"],["どんな状況でも対応できる万能型","flexible"]]}
    ]
  },
  overwatch: {
    name: "OVERWATCH 2",
    title: "Overwatch 2 プレイスタイル診断",
    types: {
      tank: {title:"前線を切り開くタンク",subtitle:"味方が動けるスペースを作る前線リーダー。",emblem:"▣",description:"前に出るだけでなく、味方が攻撃しやすい場所や安全な退路を作ることを重視するタイプ。敵の注意を引きつけ、チームが動くきっかけを作ります。",tips:"クールダウンや体力を管理し、味方がついて来られるタイミングで前進しよう。退く判断も前線を保つ大事な仕事です。"},
      damage: {title:"敵を仕留めるダメージ役",subtitle:"狙いとタイミングで戦況を動かすアタッカー。",emblem:"⊙",description:"敵の弱点を見つけ、キルやプレッシャーで戦況を変えることが好きなタイプ。相手の後衛や重要なスキルに注目し、攻撃の機会を探します。",tips:"味方のタンクが作ったスペースを活用しよう。単独で深追いせず、遮蔽物を使って生き残りながらダメージを出す意識が大切です。"},
      support: {title:"戦線を保つサポート",subtitle:"回復だけでなく、味方の勝負を支える司令塔。",emblem:"＋",description:"味方の状態や敵の脅威を見ながら、回復・支援・妨害を使い分けるタイプ。戦況全体を観察し、チームが戦い続けられる状態を作ります。",tips:"味方全員を常に助けようとせず、危険度と距離を見て優先順位を決めよう。自分の生存位置を守ることもチームへの貢献です。"},
      flex: {title:"戦況を変えるフレックス",subtitle:"味方と敵の構成を見て役割を調整する適応派。",emblem:"↗",description:"状況に応じてヒーローや立ち回りを変え、チームに足りない要素を補うタイプ。相手の脅威やマップに合わせて柔軟に対応します。",tips:"何でも使おうとするより、得意なヒーローを数体決めておこう。負けている原因を一つ見つけ、それを補える選択を考えると判断が磨かれます。"}
    },
    questions: [
      {q:"チームファイトで最も意識することは？",a:[["味方が戦いやすい前線を作る","tank"],["敵の重要な相手を倒す","damage"],["味方を生存させ、支援する","support"],["味方と敵の構成に合わせて動く","flex"]]},
      {q:"味方が前進したらどうする？",a:[["先頭でスペースを広げる","tank"],["有利な角度から攻撃する","damage"],["味方の体力と位置を見て支援","support"],["チームに足りない役割を補う","flex"]]},
      {q:"得意になりたいプレイは？",a:[["前線管理と防御スキル","tank"],["エイムと敵の撃破","damage"],["回復・支援の判断","support"],["カウンターピックと状況判断","flex"]]},
      {q:"敵のアルティメットが来そうなときは？",a:[["味方を守れる位置を取る","tank"],["相手のキープレイヤーを狙う","damage"],["味方の危険を見てスキルを温存","support"],["相手の構成を見て対応策を考える","flex"]]},
      {q:"チームが押し込まれているときは？",a:[["前線を立て直す","tank"],["敵の隙を突いて人数有利を作る","damage"],["味方を回復し、立て直しを支える","support"],["ヒーローやルートの変更を検討","flex"]]},
      {q:"マップで重視することは？",a:[["前線を作れる場所と遮蔽物","tank"],["敵を狙いやすい角度","damage"],["味方を支援できる安全な位置","support"],["チーム構成に合うルート","flex"]]},
      {q:"味方が倒されたら？",a:[["無理に進まず、前線を整える","tank"],["孤立した敵を狙えるか見る","damage"],["残った味方を守り、立て直す","support"],["人数差を見て攻守を切り替える","flex"]]},
      {q:"自分の強みとしてうれしいのは？",a:[["味方が安心して前進できる","tank"],["大事な敵を倒せる","damage"],["味方のピンチを救える","support"],["状況に合わせて試合を変えられる","flex"]]},
      {q:"負けた試合で最初に見直すのは？",a:[["前に出るタイミング","tank"],["狙いとポジション","damage"],["支援の優先順位と生存","support"],["ヒーロー選択とチーム構成","flex"]]},
      {q:"理想の勝利に近いのは？",a:[["チームを前進させて押し切る","tank"],["連携して敵を次々倒す","damage"],["全員が生き残って目標を取る","support"],["相手に合わせて戦略を変えて勝つ","flex"]]}
    ]
  }

};

// おすすめは診断タイプごとの固定データ。メタやアップデートで変わる場合があります。
const recommendationData = {
  apex: {
    strategist: [
      {name:"バンガロール",gear:"R-301 / ピースキーパー",reason:"スモークと機動力で安全な移動や立て直しを作りやすい。扱いやすい武器構成で状況判断を活かせる。"},
      {name:"コントロール系の立ち回り",gear:"ネメシス / マスティフ",reason:"中距離から圧をかけ、無理に詰めず有利な位置を保つスタイルに合う。"},
      {name:"ヴァルキリー",gear:"フラットライン / ショットガン",reason:"移動先の選択肢を増やし、次のポジションを意識するプレイに向いている。"}
    ],
    fragger: [
      {name:"レヴナント",gear:"R-99 / ピースキーパー",reason:"攻めるタイミングを作りやすく、近距離で一気に勝負したい人向け。"},
      {name:"マッドマギー",gear:"CAR / ピースキーパー",reason:"ショットガンを絡めた前進や、遮蔽物越しの圧力を活かしやすい。"},
      {name:"アッシュ",gear:"フラットライン / EVA-8",reason:"敵を捕まえるスキルと移動手段で、攻めのきっかけを作れる。"}
    ],
    support: [
      {name:"ニューキャッスル",gear:"フラットライン / ピースキーパー",reason:"味方を守りながら戦線を立て直す役割と相性がいい。"},
      {name:"コンジット",gear:"R-301 / ショットガン",reason:"味方の戦闘継続を支えつつ、自分も撃ち合いに参加しやすい。"},
      {name:"ライフライン",gear:"ネメシス / ピースキーパー",reason:"味方の復帰や物資面を支え、チームの安定感を高められる。"}
    ],
    scout: [
      {name:"アッシュ",gear:"R-99 / G7スカウト",reason:"別角度への移動や、チャンスを見て仕掛ける動きに向いている。"},
      {name:"ヴァルキリー",gear:"フラットライン / 30-30リピーター",reason:"高低差や移動ルートを使い、ポジションを変えながら戦える。"},
      {name:"ホライゾン",gear:"R-99 / ネメシス",reason:"高低差を作って射線を変え、戦況に応じて攻守を切り替えやすい。"}
    ]
  },
  fortnite: {
    builder: [
      {name:"建築・編集を活かす構成",gear:"ショットガン + SMG",reason:"編集で作った短いチャンスを近距離火力につなげやすい。"},
      {name:"安定した中距離構成",gear:"アサルトライフル + ショットガン",reason:"建築で距離を調整しながら、中距離と近距離の両方に対応できる。"},
      {name:"練習向け構成",gear:"ショットガン + AR + 回復",reason:"建築・編集だけでなく、撃ち合い後の立て直しまで練習できる。"}
    ],
    aim: [
      {name:"精密射撃構成",gear:"アサルトライフル + ショットガン",reason:"中距離でダメージを取り、詰められたら近距離武器に切り替えられる。"},
      {name:"中距離重視構成",gear:"AR系 + 遠距離武器",reason:"射線と遮蔽物を意識し、狙いやすい距離から戦いたい人向け。"},
      {name:"対面練習構成",gear:"ショットガン + SMG + 回復",reason:"近距離の照準合わせと、戦闘後の回復判断を練習しやすい。"}
    ],
    survivor: [
      {name:"安定重視構成",gear:"AR + ショットガン + 回復",reason:"遠近どちらにも対応しやすく、戦闘を選びながら進められる。"},
      {name:"移動重視構成",gear:"AR + ショットガン + 移動アイテム",reason:"安全地帯への移動や、不利な戦闘からの離脱を優先できる。"},
      {name:"終盤向け構成",gear:"AR + ショットガン + 回復アイテム",reason:"弾薬と回復を管理し、終盤まで戦える状態を保ちやすい。"}
    ],
    aggressor: [
      {name:"近距離ラッシュ構成",gear:"ショットガン + SMG",reason:"一気に距離を詰めたあとのダメージ交換に向いている。"},
      {name:"攻守バランス構成",gear:"ショットガン + AR",reason:"近距離だけでなく、詰める前の中距離戦にも対応しやすい。"},
      {name:"連戦を意識した構成",gear:"ショットガン + SMG + 回復",reason:"戦闘後に素早く立て直し、次の相手に備える練習ができる。"}
    ]
  },
  brawl: {
    carry: [
      {name:"コルト",gear:"高火力・射線管理",reason:"弾を当て続ける力を伸ばしたい攻撃派におすすめ。"},
      {name:"シェリー",gear:"近距離の勝負",reason:"距離を詰めるタイミングを学びやすく、近距離で力を発揮する。"},
      {name:"ストゥー",gear:"機動力・連続攻撃",reason:"攻撃と移動をつなげて、チャンスを広げるプレイに向いている。"}
    ],
    control: [
      {name:"ジェシー",gear:"エリア制圧",reason:"タレットを活かして、目標周辺や通路を守る動きに合う。"},
      {name:"エムズ",gear:"範囲攻撃・進路封鎖",reason:"敵が近づきにくい場所を作り、エリアを維持したい人向け。"},
      {name:"バーリー",gear:"投擲・ゾーンコントロール",reason:"障害物越しに圧をかけ、相手の進路を制限しやすい。"}
    ],
    support: [
      {name:"ポコ",gear:"範囲回復・チーム支援",reason:"味方とまとまって戦い、チーム全体を支えるスタイルに合う。"},
      {name:"ガス",gear:"シールド・サポート",reason:"味方の生存を助けつつ、自分も前線に参加できる。"},
      {name:"バイロン",gear:"攻撃と回復の使い分け",reason:"味方と敵の状況を見て、回復と攻撃を切り替える練習に向いている。"}
    ],
    flexible: [
      {name:"スパイク",gear:"広範囲への圧力",reason:"ダメージとエリア制圧を両立しやすく、さまざまな状況で使いやすい。"},
      {name:"サンディ",gear:"範囲支援・奇襲",reason:"チームの動きに合わせて、攻めるタイミングを作れる。"},
      {name:"ジーン",gear:"射程・敵の引き寄せ",reason:"相手の位置を崩し、味方と連携するきっかけを作りやすい。"}
    ]
  },
  overwatch: {
    tank: [
      {name:"D.Va",gear:"フュージョン・キャノン / ディフェンス・マトリックス",reason:"味方への攻撃を防ぎながら、機動力で前線を支えられる。"},
      {name:"ラインハルト",gear:"ロケット・ハンマー / バリア・フィールド",reason:"味方が進めるスペースを作る、わかりやすい前線役。"},
      {name:"オリーサ",gear:"フュージョン・ドライバー / 防御スキル",reason:"前線を維持しながら、敵の進行を抑えたい人に向いている。"}
    ],
    damage: [
      {name:"ソルジャー76",gear:"ヘビー・パルス・ライフル",reason:"標準的な射撃と自己回復で、基本的なエイムや位置取りを練習しやすい。"},
      {name:"キャスディ",gear:"ピースキーパー",reason:"照準と遮蔽物の使い方を磨き、重要な敵を狙うスタイルに合う。"},
      {name:"トレーサー",gear:"パルス・ピストル / ブリンク",reason:"機動力で相手の注意を引き、隙を見つけて攻めるプレイ向け。"}
    ],
    support: [
      {name:"ルシオ",gear:"ソニック・アンプリファイア / スピード支援",reason:"味方の移動を助け、チーム全体の攻守のテンポを作れる。"},
      {name:"キリコ",gear:"クナイ / 回復の御札",reason:"味方の支援と攻撃を切り替えながら、危険な場面に対応できる。"},
      {name:"バティスト",gear:"バイオティック・ランチャー",reason:"攻撃と回復の両方に関わり、戦況を見ながら支援したい人向け。"}
    ],
    flex: [
      {name:"ソルジャー76",gear:"射撃・自己回復",reason:"基本を押さえやすく、ダメージ役の立ち回りを試すのにおすすめ。"},
      {name:"D.Va",gear:"機動力・味方カバー",reason:"敵の脅威に合わせて守る相手を変えやすい。"},
      {name:"キリコ",gear:"回復・攻撃・機動力",reason:"支援を軸にしつつ、状況に応じて攻撃にも参加できる。"}
    ]
  }
};

const homeView = document.getElementById("homeView");
const quizView = document.getElementById("quizView");
const resultView = document.getElementById("resultView");
const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressFill = document.getElementById("progressFill");
const toast = document.getElementById("toast");
let currentGame = null, currentIndex = 0, selections = [], currentResult = null, toastTimer;

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"),2400);
}
function showView(view){
  [homeView,quizView,resultView].forEach(v=>v.classList.add("hidden"));
  view.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function startQuiz(game){
  if(!quizData[game]) return;
  currentGame=game;currentIndex=0;selections=Array(quizData[game].questions.length).fill(null);currentResult=null;
  document.getElementById("quizEyebrow").textContent=quizData[game].name;
  document.getElementById("quizTitle").textContent=quizData[game].title;
  renderQuestion();showView(quizView);
}
function renderQuestion(){
  const data=quizData[currentGame], item=data.questions[currentIndex], n=currentIndex+1;
  document.getElementById("questionNumber").textContent=String(n).padStart(2,"0");
  document.getElementById("questionTotal").textContent="/ "+data.questions.length;
  document.getElementById("questionLabel").textContent=String(n).padStart(2,"0");
  progressFill.style.width=(n/data.questions.length*100)+"%";
  questionText.textContent=item.q;answersEl.innerHTML="";
  item.a.forEach((answer,i)=>{
    const button=document.createElement("button");
    button.type="button";button.className="answer-btn"+(selections[currentIndex]===i?" selected":"");
    button.innerHTML=`<span class="answer-letter">${String.fromCharCode(65+i)}</span><span></span>`;
    button.querySelector("span:last-child").textContent=answer[0];
    button.setAttribute("aria-pressed",selections[currentIndex]===i?"true":"false");
    button.addEventListener("click",()=>{
      selections[currentIndex]=i;
      [...answersEl.children].forEach((b,j)=>{b.classList.toggle("selected",j===i);b.setAttribute("aria-pressed",j===i?"true":"false");});
      nextBtn.disabled=false;
      nextBtn.textContent=currentIndex===data.questions.length-1?"結果を見る →":"次へ進む →";
    });
    answersEl.appendChild(button);
  });
  prevBtn.disabled=currentIndex===0;
  nextBtn.disabled=selections[currentIndex]===null;
  nextBtn.textContent=currentIndex===data.questions.length-1?"結果を見る →":"次へ進む →";
}
function calculateResult(){
  const data=quizData[currentGame], scores={};
  Object.keys(data.types).forEach(k=>scores[k]=0);
  selections.forEach((choice,i)=>{if(choice!==null){const key=data.questions[i].a[choice][1];scores[key]=(scores[key]||0)+1;}});
  const max=Math.max(...Object.values(scores));
  const winners=Object.keys(scores).filter(k=>scores[k]===max);
  // Stable tie-breaker: use the tied type selected most recently.
  let winner=winners[0];
  for(let i=selections.length-1;i>=0;i--){
    const key=data.questions[i].a[selections[i]][1];
    if(winners.includes(key)){winner=key;break;}
  }
  return {game:currentGame,key:winner,type:data.types[winner],scores};
}
function renderRecommendations(game,key){
  const grid=document.getElementById("recommendGrid");
  grid.innerHTML="";
  const picks=recommendationData[game]?.[key]||[];
  document.getElementById("recommendTitle").textContent = game==="fortnite" ? "キミにおすすめの武器構成" : game==="brawl" ? "キミにおすすめのブロウラー" : "キミにおすすめのキャラ・武器";
  picks.forEach((pick,i)=>{
    const card=document.createElement("article");
    card.className="recommend-card";
    const rank=document.createElement("div");rank.className="recommend-rank";rank.textContent=`PICK 0${i+1}`;
    const name=document.createElement("h4");name.textContent=pick.name;
    const gear=document.createElement("div");gear.className="recommend-gear";gear.textContent=pick.gear;
    const reason=document.createElement("p");reason.textContent=pick.reason;
    card.append(rank,name,gear,reason);grid.appendChild(card);
  });
  document.getElementById("recommendSection").classList.toggle("hidden",picks.length===0);
}
function showResult(){
  currentResult=calculateResult();
  const r=currentResult.type;
  document.getElementById("resultGame").textContent=quizData[currentGame].name+" · PLAYSTYLE";
  document.getElementById("resultEmblem").textContent=r.emblem;
  document.getElementById("resultTitle").textContent=r.title;
  document.getElementById("resultSubtitle").textContent=r.subtitle;
  document.getElementById("resultDescription").textContent=r.description;
  document.getElementById("resultTips").textContent=r.tips;
  renderRecommendations(currentGame,currentResult.key);
  showView(resultView);
}
function resultText(){
  if(!currentResult)return "";
  const picks=recommendationData[currentResult.game]?.[currentResult.key]||[];
  const picksText=picks.map((p,i)=>`${i+1}. ${p.name} — ${p.gear}：${p.reason}`).join("\n");
  return `【GAME TYPE LAB】${quizData[currentResult.game].name}診断結果\n${currentResult.type.title}\n${currentResult.type.subtitle}\n\nキミの特徴：${currentResult.type.description}\n伸ばし方：${currentResult.type.tips}\n\nおすすめ3選\n${picksText}\n\n無料ゲーム診断サイト GAME TYPE LAB`;
}
function makeShareUrl(){
  const url=new URL(window.location.href);
  url.hash=`result=${encodeURIComponent(currentResult.game)}:${encodeURIComponent(currentResult.key)}`;
  return url.toString();
}
function showSharedResult(){
  const raw=decodeURIComponent(window.location.hash.slice(1));
  if(!raw.startsWith("result="))return false;
  const value=raw.slice(7), parts=value.split(":");
  if(parts.length!==2)return false;
  const game=parts[0], key=parts[1];
  if(!quizData[game]||!quizData[game].types[key])return false;
  currentGame=game;currentResult={game,key,type:quizData[game].types[key],scores:{}};
  const r=currentResult.type;
  document.getElementById("resultGame").textContent=quizData[game].name+" · SHARED RESULT";
  document.getElementById("resultEmblem").textContent=r.emblem;
  document.getElementById("resultTitle").textContent=r.title;
  document.getElementById("resultSubtitle").textContent=r.subtitle;
  document.getElementById("resultDescription").textContent=r.description;
  document.getElementById("resultTips").textContent=r.tips;
  renderRecommendations(game,key);
  showView(resultView);return true;
}
document.querySelectorAll("[data-game]").forEach(btn=>btn.addEventListener("click",()=>startQuiz(btn.dataset.game)));
document.getElementById("homeBrand").addEventListener("click",e=>{e.preventDefault();currentResult=null;history.replaceState(null,"",window.location.pathname+window.location.search);showView(homeView);});
document.getElementById("quitQuiz").addEventListener("click",()=>showView(homeView));
document.getElementById("resultHome").addEventListener("click",()=>{history.replaceState(null,"",window.location.pathname+window.location.search);currentResult=null;showView(homeView);});
prevBtn.addEventListener("click",()=>{if(currentIndex>0){currentIndex--;renderQuestion();}});
nextBtn.addEventListener("click",()=>{if(selections[currentIndex]===null)return;if(currentIndex<quizData[currentGame].questions.length-1){currentIndex++;renderQuestion();}else showResult();});
document.getElementById("copyBtn").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(resultText());showToast("診断結果をコピーしたよ！");}
  catch(e){const area=document.createElement("textarea");area.value=resultText();area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();const ok=document.execCommand("copy");area.remove();showToast(ok?"診断結果をコピーしたよ！":"コピーできなかったので、共有ボタンを試してね");}
});
document.getElementById("shareBtn").addEventListener("click",async()=>{
  const url=makeShareUrl();
  if(navigator.share){try{await navigator.share({title:"GAME TYPE LAB 診断結果",text:resultText(),url});return;}catch(e){if(e.name==="AbortError")return;}}
  try{await navigator.clipboard.writeText(url);showToast("結果ページのリンクをコピーしたよ！");}
  catch(e){showToast("このページのURLをコピーして共有してね");}
});
document.getElementById("retryBtn").addEventListener("click",()=>startQuiz(currentGame));
window.addEventListener("hashchange",()=>{if(!showSharedResult()&&window.location.hash==="")showView(homeView);});
if(!showSharedResult())showView(homeView);
