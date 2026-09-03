const STORAGE_KEY = "shaberu-kaki-v1";

const profiles = [
  {
    id: "hinata",
    name: "ひなたちゃん",
    label: "おひさまムードメーカー",
    description: "好奇心いっぱいで、うれしいことはすぐ分け合う元気な柿。あなたの一歩を、明るく応援してくれます。",
    message: "きょうも一緒に、おもしろいこと見つけっぺ！",
    crop: 0,
    color: "#f27822",
  },
  {
    id: "minori",
    name: "みのりちゃん",
    label: "世話好きな聞き上手",
    description: "小さな変化によく気づく、やさしく面倒見のよい柿。がんばるあなたを、そっと見守ります。",
    message: "無理してねえか？ ひと休みも、だいじだよ。",
    crop: 1,
    color: "#df7923",
  },
  {
    id: "nonbiri",
    name: "のんびりちゃん",
    label: "おだやかな知恵もの",
    description: "おおらかで優しい、みんな愛される柿。急がず、あなたらしく進む時間を大切にします。",
    message: "いい天気だな〜。きょうもゆっくりいくべ。",
    crop: 2,
    color: "#c96824",
  },
];

const questions = [
  {
    text: "休日はどんな風に過ごすのが好き？",
    options: [
      ["外で体を動かす", [3, 0, 0]],
      ["家でのんびりする", [0, 0, 3]],
      ["気になることを試してみる", [1, 2, 0]],
    ],
  },
  {
    text: "友だちが落ち込んでいたら？",
    options: [
      ["楽しい場所へ連れ出す", [3, 0, 0]],
      ["じっくり話を聞く", [0, 3, 0]],
      ["そっと隣にいる", [0, 1, 3]],
    ],
  },
  {
    text: "新しいことを始めるときは？",
    options: [
      ["まず動いてみる", [3, 0, 0]],
      ["準備をしっかり整える", [0, 3, 1]],
      ["自分のペースで考える", [0, 0, 3]],
    ],
  },
  {
    text: "言われて一番うれしい言葉は？",
    options: [
      ["一緒にいると元気になる", [3, 0, 0]],
      ["頼りになるね", [0, 3, 0]],
      ["一緒にいると落ち着く", [0, 0, 3]],
    ],
  },
  {
    text: "旅先で大事にしたいのは？",
    options: [
      ["初めての体験", [3, 0, 1]],
      ["一緒に行く人の笑顔", [0, 3, 0]],
      ["景色をゆっくり味わう", [0, 0, 3]],
    ],
  },
  {
    text: "グループではどんな役になる？",
    options: [
      ["みんなを盛り上げる", [3, 0, 0]],
      ["困っている人を助ける", [0, 3, 0]],
      ["全体を見てまとめる", [0, 1, 3]],
    ],
  },
  {
    text: "疲れた日の回復方法は？",
    options: [
      ["好きなことで気分転換", [3, 0, 0]],
      ["おいしいものを作る", [0, 3, 0]],
      ["早めに寝て整える", [0, 0, 3]],
    ],
  },
  {
    text: "柿の木と過ごすなら何をしたい？",
    options: [
      ["たくさん話して笑う", [3, 0, 0]],
      ["毎日こまめにお世話する", [0, 3, 0]],
      ["木陰で静かに季節を感じる", [0, 0, 3]],
    ],
  },
];

const kakiQuizQuestions = [
  {
    question: "会津身不知柿が古くから育てられてきた地域は？",
    options: ["福島県の会津地方", "青森県の津軽地方", "山梨県の甲府盆地"],
    answer: 0,
    explanation: "会津身不知柿は、会津若松市や会津美里町、会津坂下町などで育てられる会津の特産品です。",
  },
  {
    question: "収穫したばかりの会津身不知柿は、どんな柿？",
    options: ["そのまま甘い甘柿", "渋抜きが必要な渋柿", "酸味の強い柿"],
    answer: 1,
    explanation: "収穫時は渋柿です。出荷前に脱渋（渋抜き）することで、上品な甘さを楽しめます。",
  },
  {
    question: "会津身不知柿の渋抜きに使われるものは？",
    options: ["塩水だけ", "焼酎やガス", "会津の雪だけ"],
    answer: 1,
    explanation: "一般的には、収穫後に焼酎などのアルコールやガスを使って渋抜きをします。",
  },
  {
    question: "会津身不知柿の収穫時期として近いのは？",
    options: ["4月〜5月", "7月〜8月", "10月中旬〜11月下旬"],
    answer: 2,
    explanation: "収穫はおおむね10月中旬〜11月下旬。晩秋の会津を代表する果物です。",
  },
  {
    question: "会津身不知柿の特徴に一番近いものは？",
    options: ["大粒で果汁が多い", "小粒でとても酸っぱい", "皮が青いまま熟す"],
    answer: 0,
    explanation: "大粒で、たっぷりの果汁、なめらかな舌触り、とろりとした食感が魅力です。",
  },
  {
    question: "柿の箱に書かれた『開封日』は何の目安？",
    options: ["種をまく日", "渋抜きが進み食べられる日", "冷凍する日"],
    answer: 1,
    explanation: "渋抜き中の柿は、箱の開封日まで待つのがポイント。開ける頃に渋が抜け、おいしく食べられます。",
  },
  {
    question: "会津身不知柿にある別名は？",
    options: ["御山柿", "磐梯桃", "鶴ヶ城梨"],
    answer: 0,
    explanation: "産地の一つである会津若松市門田町御山にちなみ、『御山柿』とも呼ばれます。",
  },
  {
    question: "会津身不知柿は、毎年どこへ献上されることで知られる？",
    options: ["皇室", "宇宙ステーション", "海外の動物園"],
    answer: 0,
    explanation: "会津身不知柿は、毎年皇室に献上される伝統の柿としても知られています。",
  },
  {
    question: "渋抜き直後から時間がたつと、食感はどう変わる？",
    options: ["徐々にやわらかくなる", "石のように硬くなる", "中が空洞になる"],
    answer: 0,
    explanation: "渋抜き直後は比較的硬め。時間とともにやわらかく、とろりとした食感へ変化します。",
  },
  {
    question: "『みしらず』という名前の由来について正しいのは？",
    options: ["一つだけに決まっている", "おいしさや実の多さにまつわる諸説がある", "外国語をそのまま使った"],
    answer: 1,
    explanation: "『身の程を知らず実をつける』『我が身も考えず食べすぎる』など複数の説が伝わっています。",
  },
];

const badgeCatalog = [
  { id: "wakaba", name: "若葉の見守り人", points: 0, icon: "🌱", description: "推し柿との出会いを記念した最初のピン。" },
  { id: "bucket", name: "バケツスター", points: 50, icon: "💧", description: "50pt達成。木へ気持ちを届け始めた証。" },
  { id: "scholar", name: "柿ものしり", points: 150, icon: "柿", description: "150pt達成。見知不柿を語れる見守り人。" },
  { id: "guardian", name: "みまもり名人", points: 300, icon: "🍃", description: "300pt達成。日々の変化に気づける名人。" },
  { id: "aizu", name: "会津アンバサダー", points: 500, icon: "鶴", description: "500pt達成。会津の魅力を広げる特別ピン。" },
  { id: "legend", name: "伝説の散水士", points: 1000, icon: "🏆", description: "1,000pt達成。木と仲間に愛された最高位。" },
];

const weatherCatalog = {
  sunny: { label: "晴れ", icon: "☀", background: "assets/weather-sunny.png" },
  cloudy: { label: "くもり・風", icon: "≋", background: "assets/weather-cloudy.png" },
  rain: { label: "雨", icon: "☂", background: "assets/weather-rain.png" },
  snow: { label: "雪", icon: "❄", background: "assets/weather-snow.png" },
  night: { label: "夜", icon: "☾", background: "assets/weather-night.png" },
};

const treeStateCatalog = [
  { id: "healthy", label: "元気", sprite: 0, weather: "sunny", status: "元気いっぱい", detail: "ごきげん", message: "今日もいい天気だね〜。会いに来てくれてうれしいな！" },
  { id: "thirsty", label: "乾燥", sprite: 1, weather: "sunny", status: "お水がほしいな", detail: "のどが渇いている", message: "喉がカラカラだ〜！みんなのバケツをつないで、お水を運んでくんちぇ！" },
  { id: "hot", label: "暑い", sprite: 2, weather: "sunny", status: "ちょっと暑そう", detail: "木陰でひと休み", message: "今日はあっついな〜。涼しい風が来るまで、ゆっくり見守ってね。" },
  { id: "cold", label: "寒い", sprite: 3, weather: "snow", status: "冬じたく中", detail: "寒さに耐えている", message: "雪のお布団で冬ごもり中。春までのんびり力をためるよ。" },
  { id: "rainy", label: "雨の日", sprite: 4, weather: "rain", status: "雨を満喫中", detail: "しっとりうるおう", message: "雨つぶが葉っぱをくすぐってるよ。今日は自然のお水でひと安心！" },
  { id: "windy", label: "強風", sprite: 5, weather: "cloudy", status: "風が強いよ", detail: "枝を踏ん張っている", message: "びゅうびゅう風が吹いてるぞ〜。飛ばされないように応援してね！" },
  { id: "sleepy", label: "おやすみ", sprite: 6, weather: "night", status: "おやすみ中", detail: "静かに休んでいる", message: "夜の畑はしーんとしてるよ。今日も見守ってくれて、ありがとう。" },
  { id: "watered", label: "水やり成功", sprite: 7, weather: "sunny", status: "うるおい満タン", detail: "水やりに大喜び", message: "お水が届いたよ！みんなのバケツ、しっかり受け取ったぞ〜！" },
  { id: "harvest", label: "収穫の季節", sprite: 8, weather: "sunny", status: "実りの季節", detail: "柿がたくさん", message: "今年もおいしそうな実ができたよ。みんなで実りをお祝いしよう！" },
];

const defaultState = () => ({
  loggedIn: false,
  nickname: "見守り人さん",
  profileId: null,
  answers: [],
  quizIndex: 0,
  points: 0,
  messages: [],
  wateringTaps: [],
  waterings: [],
  contacts: [],
  conversationDate: "",
  conversationCount: 0,
  soilMoisture: 21,
  irrigationPaused: false,
  bucketCarry: 0,
  mission: null,
  observations: [],
  loginBonusDates: [],
  tomorrowBonus: null,
  journal: [],
  notificationsEnabled: false,
  kakiQuiz: null,
  quizAwardDates: [],
  quizBestScore: 0,
  quizAttempts: [],
  sceneOverride: null,
});

let state = loadState();
let route = location.hash.replace("#", "") || "top";
let thinking = false;
let clockTimer = null;
let quizTransitioning = false;

function loadState() {
  try {
    return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date())
    .replaceAll("/", "-");
}

function tomorrowKey() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" })
    .format(tomorrow)
    .replaceAll("/", "-");
}

function todayWateringCount() {
  return state.waterings.filter((watering) => watering.date === todayKey() && (watering.treeId || profile().id) === profile().id).length;
}

function todayAllWateringCount() {
  return state.waterings.filter((watering) => watering.date === todayKey()).length;
}

function dailyCapReached() {
  return todayWateringCount() >= 3 || todayAllWateringCount() >= 9;
}

function countdownLabel(endsAt) {
  const remaining = Math.max(0, endsAt - Date.now());
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function syncMission() {
  const date = todayKey();
  if (state.mission?.date !== date && state.soilMoisture < 30 && !dailyCapReached()) {
    const carry = Number(state.bucketCarry || 0);
    state.mission = {
      id: `mission-${date}-${profile().id}`,
      date,
      treeId: profile().id,
      status: "active",
      startedAt: Date.now(),
      endsAt: Date.now() + 20 * 60 * 1000,
      tapCount: 49,
      goalTaps: 50,
      stretchTaps: 80,
      liters: Math.min(7, 5.4 + carry),
      participantCount: 49,
      joined: false,
      contribution: 0,
      basePoints: 0,
      teamPoints: 0,
      winnerPoints: 0,
      winner: null,
      stretchReached: false,
    };
    saveState();
  }
  if (state.mission?.status === "active" && Date.now() >= state.mission.endsAt) {
    state.mission.status = "expired";
    state.bucketCarry = state.mission.liters;
    state.journal.unshift({ date, type: "expired", title: "あと少しの水を次回へ持ち越し", detail: `${state.mission.tapCount}タップ・${state.mission.liters.toFixed(1)}L分が集まりました` });
    saveState();
  }
  return state.mission;
}

function formatTime(date = new Date()) {
  return new Intl.DateTimeFormat("ja-JP", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function profile() {
  return profiles.find((item) => item.id === state.profileId) || profiles[2];
}

function unlockedBadges() {
  return badgeCatalog.filter((badge) => state.points >= badge.points);
}

function nextBadge() {
  return badgeCatalog.find((badge) => state.points < badge.points) || null;
}

function leaderboard() {
  const demoMembers = [
    ["あかべこさん", 1280], ["さくらさん", 940], ["会津っ子さん", 720],
    ["こづゆさん", 510], ["ばんだいさん", 390], ["みのりさん", 280],
    ["はるかさん", 190], ["つるがさん", 120], ["ゆきんこさん", 70],
  ].map(([name, points]) => ({ name, points, self: false }));
  return [...demoMembers, { name: state.nickname, points: state.points, self: true }]
    .sort((a, b) => b.points - a.points)
    .map((member, index) => ({ ...member, rank: index + 1 }));
}

function mascotMarkup(item = profile(), size = "large") {
  return `<div class="mascot-crop mascot-${size}" aria-label="${item.name}"><img src="assets/kaki-friends.png" alt="" style="--crop:${item.crop}" /></div>`;
}

function topBar(title, back = "top", light = false) {
  return `<header class="top-bar ${light ? "top-bar-light" : ""}">
    ${back ? `<button class="icon-button" data-nav="${back}" aria-label="戻る">‹</button>` : `<span class="brand-fruit">柿</span>`}
    <strong>${title}</strong>
    <button class="icon-button" data-nav="about" aria-label="プロジェクトについて">?</button>
  </header>`;
}

function bottomNav(active) {
  if (!state.loggedIn) return "";
  const items = [
    ["home", "⌂", "ホーム"],
    ["chat", "●", "おはなし"],
    ["fun", "✦", "あそぶ"],
    ["mypage", "♙", "マイページ"],
  ];
  return `<nav class="bottom-nav" aria-label="メインメニュー">${items
    .map(([id, icon, label]) => `<button data-nav="${id}" class="${active === id ? "active" : ""}"><span>${icon}</span>${label}</button>`)
    .join("")}</nav>`;
}

function go(next) {
  if (["home", "chat", "fun", "ranking", "badges", "kaki-quiz", "quiz-result", "mypage", "mission", "watering"].includes(next) && !state.loggedIn) next = "login";
  route = next;
  history.pushState(null, "", `#${next}`);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toast(message) {
  const node = document.querySelector("#toast");
  node.textContent = message;
  node.classList.add("show");
  setTimeout(() => node.classList.remove("show"), 2400);
}

function renderTop() {
  return `<section class="screen top-screen">
    <div class="hero">
      <div class="hero-shade"></div>
      <div class="hero-title">
        <span class="eyebrow">会津の木と、つながる。</span>
        <h1>しゃべる<br /><em>柿</em>の木</h1>
        <p>会津の見知不柿を、<br />あなたと一緒に育てます。</p>
      </div>
      <span class="season-tag">実りの季節まで<br /><b>あと 58日</b></span>
    </div>
    <div class="top-actions paper-panel">
      <p class="intro-copy">8つの質問に答えて、<br />あなたにぴったりの「推し柿」を見つけよう。</p>
      <button class="primary-button sparkle" data-start-quiz>はじめる <small>（入口の質問へ）</small></button>
      ${state.profileId ? `<button class="secondary-button" data-nav="${state.loggedIn ? "home" : "result"}">前回の推し柿に会う</button>` : ""}
      <button class="text-button" data-nav="about">プロジェクトについて <span>›</span></button>
      <button class="text-button" data-nav="contact">お問い合わせ <span>›</span></button>
      <button class="text-button" data-faq>よくある質問 <span>⌄</span></button>
      <div id="top-faq" class="inline-faq hidden"><b>会話機能はどこまで実装済み？</b><p>このプロトタイプでは柿の木らしい定型応答と履歴保存を確認できます。本番実装ではセンサー値と会話AIを連携する想定です。</p></div>
    </div>
    <footer class="social-row"><span>𝕏</span><span>LINE</span><span>◎ Instagram</span></footer>
  </section>`;
}

function renderQuiz() {
  const index = Math.min(state.quizIndex, questions.length - 1);
  const question = questions[index];
  const selected = state.answers[index];
  return `<section class="screen quiz-screen">
    ${topBar("柿診断", index === 0 ? "top" : "quiz-back")}
    <div class="progress-meta"><span>推し柿を探しています</span><b>${index + 1} / ${questions.length}</b></div>
    <div class="progress-track"><i style="width:${((index + 1) / questions.length) * 100}%"></i></div>
    <div class="quiz-card">
      <span class="question-no">Q${index + 1}.</span>
      <h2>${question.text}</h2>
      <div class="answer-list">${question.options
        .map(([label], optionIndex) => `<button class="answer-button ${selected === optionIndex ? "selected" : ""}" data-answer="${optionIndex}" ${quizTransitioning ? "disabled" : ""}><span>${String.fromCharCode(65 + optionIndex)}.</span>${label}<i></i></button>`)
        .join("")}</div>
      ${index > 0 ? `<button class="quiz-back-button" data-nav="quiz-back" ${quizTransitioning ? "disabled" : ""}>‹　1つ前の質問に戻る</button>` : ""}
    </div>
  </section>`;
}

function selectDiagnosisAnswer(answerIndex) {
  if (quizTransitioning) return;
  const answeredIndex = state.quizIndex;
  state.answers[answeredIndex] = answerIndex;
  quizTransitioning = true;
  saveState();
  render();

  setTimeout(() => {
    if (route !== "quiz" || state.quizIndex !== answeredIndex) {
      quizTransitioning = false;
      return;
    }
    if (answeredIndex < questions.length - 1) {
      state.quizIndex += 1;
      quizTransitioning = false;
      saveState();
      render();
      return;
    }
    calculateResult();
    quizTransitioning = false;
    go("result");
  }, 220);
}

function calculateResult() {
  const scores = [0, 0, 0];
  state.answers.forEach((answer, index) => {
    const values = questions[index]?.options[answer]?.[1] || [0, 0, 0];
    values.forEach((value, scoreIndex) => (scores[scoreIndex] += value));
  });
  const highest = Math.max(...scores);
  const winner = scores.indexOf(highest);
  state.profileId = profiles[winner].id;
  saveState();
}

function renderResult() {
  const item = profile();
  return `<section class="screen result-screen">
    ${topBar("診断結果", "top")}
    <div class="confetti">✦　•　✧　•　✦</div>
    <p class="result-kicker">あなたの推し柿は…</p>
    <h1>${item.name}！</h1>
    ${mascotMarkup(item, "result")}
    <div class="personality-card">
      <span>${item.label}</span>
      <p>${item.description}</p>
      <blockquote>「${item.message}」</blockquote>
    </div>
    <button class="primary-button" data-nav="login">この木と話す <small>（ログインへ）</small></button>
    <p class="login-reason">${item.name}は、あなたのことを覚えていたいそうです。</p>
    <button class="secondary-button" data-share>結果をシェアする</button>
    <div class="share-buttons">
      <button data-share-x aria-label="Xでシェア">𝕏</button>
      <button data-share-line aria-label="LINEでシェア">LINE</button>
      <button data-save-card aria-label="結果画像を保存">◎</button>
    </div>
  </section>`;
}

function renderLogin() {
  const item = profile();
  return `<section class="screen login-screen">
    ${topBar("ログイン", "result")}
    <div class="login-cloud"></div>
    <p class="result-kicker">推し柿と、これからも。</p>
    <h1>ログインして<br />この木とつながろう</h1>
    ${mascotMarkup(item, "login")}
    <p class="login-lead">${item.name}が、あなたのことを<br />覚えていたいそうです。</p>
    <label class="nickname-field"><span>呼んでほしい名前</span><input id="nickname" maxlength="12" value="${escapeHtml(state.nickname === "見守り人さん" ? "" : state.nickname)}" placeholder="例：あき" /></label>
    <button class="google-button" data-login><span class="google-g">G</span> Googleでログイン</button>
    <p class="demo-note">開発確認用：Google認証は未接続です。<br />入力値はブラウザのlocalStorageだけに保存されます。</p>
    <div class="login-benefits"><b>ログインするとできること</b><span>会話の続きが残る</span><span>水やりでポイントが貯まる</span></div>
  </section>`;
}

function currentSensor() {
  const hour = new Date().getHours();
  const temperature = Math.round(20 + Math.sin((hour - 8) / 24 * Math.PI * 2) * 7);
  return { temperature, moisture: state.soilMoisture };
}

function currentPresentation() {
  if (state.sceneOverride) {
    const overridden = treeStateCatalog.find((item) => item.id === state.sceneOverride);
    if (overridden) return { state: overridden, weather: weatherCatalog[overridden.weather], automatic: false };
  }

  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1;
  const sensor = currentSensor();
  const mission = state.mission?.date === todayKey() && state.mission.status === "active";
  const recentWatering = state.waterings.some((item) => item.success && Date.now() - item.timestamp < 3 * 60 * 60 * 1000);
  const weatherId = hour < 6 || hour >= 19
    ? "night"
    : [12, 1, 2].includes(month)
      ? "snow"
      : (now.getFullYear() + month + now.getDate()) % 4 === 0
        ? "rain"
        : (now.getFullYear() + month + now.getDate()) % 4 === 1
          ? "cloudy"
          : "sunny";

  let stateId = "healthy";
  if (mission || sensor.moisture < 25) stateId = "thirsty";
  else if (recentWatering) stateId = "watered";
  else if (weatherId === "night") stateId = "sleepy";
  else if (weatherId === "snow" || sensor.temperature <= 8) stateId = "cold";
  else if (weatherId === "rain") stateId = "rainy";
  else if (weatherId === "cloudy") stateId = "windy";
  else if (sensor.temperature >= 27) stateId = "hot";
  else if ([9, 10, 11].includes(month)) stateId = "harvest";

  const treeState = treeStateCatalog.find((item) => item.id === stateId);
  return { state: treeState, weather: weatherCatalog[weatherId], automatic: true };
}

function treeStateMarkup(item) {
  const column = item.sprite % 3;
  const row = Math.floor(item.sprite / 3);
  return `<div class="tree-state-character" role="img" aria-label="柿キャラクター：${item.label}" style="--sprite-column:${column};--sprite-row:${row}"></div>`;
}

function cycleTreeState() {
  const currentIndex = treeStateCatalog.findIndex((item) => item.id === state.sceneOverride);
  state.sceneOverride = currentIndex < 0 ? treeStateCatalog[0].id : currentIndex === treeStateCatalog.length - 1 ? null : treeStateCatalog[currentIndex + 1].id;
  saveState();
  render();
}

function renderHome() {
  const item = profile();
  const sensor = currentSensor();
  const mission = syncMission();
  const capped = dailyCapReached();
  const active = mission?.date === todayKey() && mission.status === "active";
  const completed = mission?.date === todayKey() && ["success", "blocked"].includes(mission.status);
  const expired = mission?.date === todayKey() && mission.status === "expired";
  const presentation = currentPresentation();
  const treeState = presentation.state;
  const weather = presentation.weather;
  const greeting = treeState.message;
  const waterAction = active
    ? `<button class="water-button mission-button" data-nav="mission"><span>♧</span>${mission.joined ? "ミッション状況" : "水やりに参加"}</button>`
    : completed
      ? `<button class="water-button mission-done-button" data-nav="watering"><span>✓</span>今日の活動を見る</button>`
      : expired
        ? `<button class="water-button observe-button" data-nav="mission"><span>◌</span>みんなの活動ログ</button>`
        : `<button class="water-button observe-button" data-observe><span>❧</span>${capped ? "葉っぱをなでる" : "木を観察する"} +2pt</button>`;
  return `<section class="screen home-screen">
    ${topBar(item.name, "top", true)}
    <div class="home-hero scene-${treeState.id}" style="background-image:url('${weather.background}')">
      <div class="weather-chip"><span>${weather.icon}</span><b>${weather.label}</b><small>${presentation.automatic ? "自動表示" : "確認表示"}</small></div>
      <div class="speech-bubble">${greeting}</div>
      ${treeStateMarkup(treeState)}
      <div class="home-status"><span>${treeState.status}</span><b>${treeState.detail}</b></div>
    </div>
    <div class="sensor-row">
      <div><span class="mini-icon hot">☀</span><p>気温 <b>${sensor.temperature}℃</b></p></div>
      <div><span class="mini-icon wet">◉</span><p>土壌水分 <b>${sensor.moisture}%</b></p></div>
    </div>
    <div class="home-content">
      <div class="state-preview"><div><span>状態イラスト確認</span><b>${treeState.label}${presentation.automatic ? "（自動）" : ""}</b></div><button data-cycle-tree-state>${state.sceneOverride ? "次の状態" : "全9種を見る"} <i>›</i></button></div>
      ${active ? `<button class="mission-alert" data-nav="mission"><span class="live-dot"></span><div><b>緊急ミッション発生中</b><small>${item.name}へ、みんなで水を運ぼう</small></div><time data-countdown="${mission.endsAt}">あと ${countdownLabel(mission.endsAt)}</time></button>` : ""}
      <div class="action-grid">
        ${waterAction}
        <button class="chat-button" data-nav="chat"><span>•••</span>話しかける</button>
      </div>
      <button class="secondary-button mypage-link" data-nav="mypage">♙ マイページ <span>›</span></button>
      <div class="points-card"><span>あなたのポイント</span><b>${state.points.toLocaleString()} <small>pt</small></b></div>
      <button class="quiz-teaser" data-start-kaki-quiz><span>今日のサイドクエスト</span><div><b>見知不柿クイズ</b><small>全10問・最大150pt</small></div><i>挑戦する ›</i></button>
      <div class="today-note"><span>今日のひとこと</span><p>「${item.message}」</p></div>
    </div>
    ${bottomNav("home")}
  </section>`;
}

function renderMission() {
  const mission = syncMission();
  if (!mission) {
    return `<section class="screen mission-screen">${topBar("水やりタイム", "home")}<div class="mission-empty"><span>☘</span><h1>いまは元気いっぱい</h1><p>土が乾いたとき、ここで緊急ミッションが始まります。</p><button class="primary-button" data-nav="home">ホームへ戻る</button></div></section>`;
  }
  const progress = Math.min(100, Math.max((mission.tapCount / mission.goalTaps) * 100, (mission.liters / 8) * 100));
  const active = mission.status === "active";
  const expired = mission.status === "expired";
  return `<section class="screen mission-screen">
    ${topBar("水やりバケツリレー", "home")}
    <div class="mission-header ${active ? "is-live" : "is-over"}">
      <div class="mission-live"><span class="live-dot"></span>${active ? "MISSION NOW" : "MISSION REPORT"}</div>
      <h1>${active ? `${profile().name}が<br />喉を渇かせています！` : "今回集まった気持ち"}</h1>
      <p>${active ? "時間内に、みんなでバケツを満水にしよう。" : "届いた水は、次のミッションへつながります。"}</p>
      ${active ? `<div class="big-countdown"><span>のこり時間</span><b data-countdown="${mission.endsAt}">${countdownLabel(mission.endsAt)}</b></div>` : ""}
    </div>
    <div class="bucket-stage">
      <div class="bucket" aria-label="バケツ ${Math.round(progress)}パーセント">
        <div class="bucket-water" style="height:${progress}%"><i></i><i></i></div>
        <div class="bucket-shine"></div>
        <strong>${mission.liters.toFixed(1)}<small> / 8L</small></strong>
      </div>
      <div class="bucket-copy"><span>みんなのバケツ</span><b>${mission.tapCount} / ${mission.goalTaps} タップ</b><small>${mission.participantCount}人が参加中</small></div>
    </div>
    <div class="mission-milestones">
      <div class="milestone ${mission.tapCount >= 50 ? "reached" : ""}"><i>50</i><p><b>満水ライン</b><span>全員 +30pt</span></p></div>
      <div class="milestone ${mission.tapCount >= 80 ? "reached stretch" : ""}"><i>80</i><p><b>大喜びライン</b><span>明日のログイン 1.5倍</span></p></div>
    </div>
    ${active ? `<div class="mission-cta"><p>1回で <b>1〜3L分</b> を運びます。<br />参加した時点で10ptと抽選枠を獲得！</p><button class="primary-button pour-button" data-join-mission ${mission.joined ? "disabled" : ""}><span>♧</span>${mission.joined ? "参加済みです" : "バケツに水を注ぐ　+10pt"}</button><small>参加は1日1回。誰が押してもハズレなし。</small></div>` : `<div class="mission-expired"><b>${expired ? "時間切れでも、気持ちは無駄になりません" : "木へ連絡できませんでした"}</b><p>${mission.liters.toFixed(1)}L分を次回のバケツへ持ち越しました。</p><button class="secondary-button" data-observe>葉っぱを観察する　+2pt</button></div>`}
    <div class="activity-strip"><span>いま届いた水</span><p>あかべこさん +2L　・　さくらさん +1L　・　会津っ子さん +3L</p></div>
    ${bottomNav("")}
  </section>`;
}

function seedMessages() {
  if (state.messages.length) return;
  state.messages = [
    { from: "tree", text: `やっほ〜！ ${state.nickname}。きょうはどんな日だった？`, time: formatTime() },
  ];
  saveState();
}

function renderChat() {
  seedMessages();
  const item = profile();
  const used = state.conversationDate === todayKey() ? state.conversationCount : 0;
  return `<section class="screen chat-screen">
    ${topBar(item.name, "home", true)}
    <div class="chat-presence"><span class="tiny-kaki">柿</span><div><b>木陰でのんびり中</b><small>気温 ${currentSensor().temperature}℃ ・ 土壌水分 ${state.soilMoisture}%</small></div></div>
    <div id="messages" class="messages">${state.messages
      .map((message) => `<div class="message ${message.from}">${message.from === "tree" ? `<span class="message-avatar">柿</span>` : ""}<div><p>${escapeHtml(message.text)}</p><time>${message.time}</time></div></div>`)
      .join("")}${thinking ? `<div class="message tree"><span class="message-avatar">柿</span><div><p class="typing"><i></i><i></i><i></i></p><time>考え中…</time></div></div>` : ""}</div>
    <form id="chat-form" class="chat-compose"><button type="button" class="report-button" data-report title="通報">!</button><input id="chat-input" maxlength="120" placeholder="メッセージを入力" autocomplete="off" ${used >= 10 || thinking ? "disabled" : ""} /><button aria-label="送信" ${used >= 10 || thinking ? "disabled" : ""}>➤</button></form>
    <div class="chat-count">今日の残り会話回数：<b>${Math.max(0, 10 - used)} / 10</b></div>
    ${bottomNav("chat")}
  </section>`;
}

function replyFor(input) {
  const text = input.toLowerCase();
  if (/死|殺|ばか|アホ|政治|宗教/.test(text)) return "その話はちょっと難しいなあ。きょう見つけた、小さないいことを教えてくんちぇ。";
  if (/疲|つか|しんど|大変/.test(text)) return "そっかぁ、よくがんばったな。木陰で少し休んでいきな。焦らなくていいべ。";
  if (/水|のど|渇/.test(text)) return state.soilMoisture < 25 ? "ちょうど喉が渇いてたんだ。水やりボタンを見てみてくんちぇ！" : "いまの土はしっとりしてるよ。気にかけてくれてありがとな〜。";
  if (/柿|みしらず|見知不/.test(text)) return "見知不柿は、会津で大切に育てられてきた甘い柿なんだ。渋抜きをすると、とろりと上品な甘さになるんだよ。";
  if (/天気|暑|寒/.test(text)) return `こっちは今 ${currentSensor().temperature}℃ くらい。葉っぱを揺らす風が気持ちいいよ。`;
  if (/ありがとう|好き|うれし/.test(text)) return "えへへ、なんだか実がもっと甘くなりそう。こちらこそ、会いに来てくれてありがとう！";
  const replies = [
    "うんうん、ちゃんと聞いてるよ。もう少し教えてくんちぇ。",
    "そうなんだな〜。きょうのこと、覚えておくよ。",
    "それはおもしろそうだ！ 木の上からも見てみたいなあ。",
    "ゆっくりでも大丈夫。実が熟すのにも時間がかかるからな〜。",
  ];
  return replies[(state.messages.length + input.length) % replies.length];
}

function renderWatering() {
  const mission = state.mission;
  if (!mission) return `<section class="screen watering-screen">${topBar("水やり結果", "home")}<div class="mission-empty"><h1>まだ記録がありません</h1><button class="primary-button" data-nav="home">ホームへ戻る</button></div></section>`;
  const successful = mission.status === "success";
  const totalAward = mission.basePoints + mission.teamPoints + mission.winnerPoints;
  return `<section class="screen watering-screen">
    ${topBar("今日のみんなの活動", "home")}
    <div class="celebration-rays"></div>
    <div class="water-drops">💧　💧　💧</div>
    <p class="result-kicker">${successful ? "MISSION COMPLETE" : "THANK YOU"}</p>
    <h1>${successful ? "みんなで満水！" : "気持ちが届いたよ"}</h1>
    ${mascotMarkup(profile(), "watering")}
    <p class="water-message">${successful ? "50タップを達成して、8Lのお水が木へ届きました！" : "水は次回へ持ち越し。参加ポイントを受け取りました。"}</p>
    <div class="reward-stack">
      <div><span>参加ありがとう</span><b>+${mission.basePoints} pt</b></div>
      ${successful ? `<div class="team-reward"><span>共同達成ボーナス</span><b>+${mission.teamPoints} pt</b></div>` : ""}
      ${mission.winnerPoints ? `<div class="winner-reward"><span>一番水やり当番</span><b>+${mission.winnerPoints} pt</b></div>` : ""}
    </div>
    <div class="point-award success"><small>合計</small> +${totalAward} <small>pt</small></div>
    ${mission.stretchReached ? `<div class="stretch-banner"><span>80タップ突破！</span><b>柿の木が大喜び！</b><p>明日のログインボーナスが <strong>1.5倍</strong></p></div>` : ""}
    ${successful ? `<div class="best-wagerer"><span>🏅 本日の一番水やり当番</span><b>${escapeHtml(mission.winner || "抽選中")}</b><p>${mission.winner === state.nickname ? "おめでとう！あなたが完全ランダム抽選で選ばれました。" : "参加者の中から公平な抽選で選ばれました。"}</p></div>` : `<div class="best-wagerer"><span>次のミッションへ</span><b>${mission.liters.toFixed(1)}L分を持ち越し</b><p>参加とポイントは記録済みです。気遣いは無駄になりません。</p></div>`}
    <div class="water-summary"><div><span>参加人数</span><b>${mission.participantCount}人</b></div><div><span>みんなのタップ</span><b>${mission.tapCount}回</b></div><div><span>この木の給水</span><b>${todayWateringCount()} / 3回</b></div><div><span>全体の給水</span><b>${todayAllWateringCount()} / 9回</b></div></div>
    <button class="primary-button" data-nav="home">ホームに戻る</button>
    ${bottomNav("")}
  </section>`;
}

function renderFun() {
  const members = leaderboard();
  const me = members.find((member) => member.self);
  const unlocked = unlockedBadges();
  const quizDone = state.quizAwardDates.includes(todayKey());
  return `<section class="screen fun-screen">
    ${topBar("あそぶ・学ぶ", "home")}
    <div class="fun-hero"><span>柿のこと、もっと知ろう</span><h1>見守り人の<br />おたのしみ広場</h1><p>遊んで学んで、推し柿との思い出を増やそう。</p></div>
    <div class="fun-content">
      <button class="fun-quiz-card" data-start-kaki-quiz>
        <span class="side-quest-label">SIDE QUEST</span><i>?</i><div><h2>見知不柿クイズ</h2><p>ちょうどよい難易度の全10問</p><b>${quizDone ? "今日は復習モード" : "最大 150pt GET"}</b></div><em>›</em>
      </button>
      <div class="fun-grid">
        <button class="fun-stat-card ranking-card" data-nav="ranking"><span>今週の順位</span><b>${me.rank}<small>位</small></b><p>ランキングを見る ›</p></button>
        <button class="fun-stat-card badge-card" data-nav="badges"><span>ピンバッジ</span><div class="mini-pins">${unlocked.slice(-3).map((badge) => `<i>${badge.icon}</i>`).join("")}</div><b>${unlocked.length}<small> / ${badgeCatalog.length}</small></b><p>コレクションを見る ›</p></button>
      </div>
      <div class="fun-tip"><span>柿</span><p>クイズは1日1回ポイントがもらえるよ。間違えても、解説を読めば次はきっと正解！</p></div>
    </div>
    ${bottomNav("fun")}
  </section>`;
}

function renderRanking() {
  const members = leaderboard();
  const me = members.find((member) => member.self);
  const top = members.slice(0, 3);
  return `<section class="screen ranking-screen">
    ${topBar("見守りランキング", "fun")}
    <div class="ranking-head"><span>WEEKLY RANKING</span><h1>今週の見守り人</h1><p>水やり・観察・クイズで集めたポイント</p></div>
    <div class="podium">${[top[1], top[0], top[2]].map((member, index) => member ? `<div class="podium-person place-${member.rank}"><span>${member.rank === 1 ? "👑" : ""}</span><i>${member.self ? "柿" : member.name.slice(0, 1)}</i><b>${escapeHtml(member.name)}</b><small>${member.points.toLocaleString()} pt</small><em>${member.rank}</em></div>` : "").join("")}</div>
    <div class="my-rank-card"><span>あなたの現在地</span><b>${me.rank}<small>位</small></b><p>${state.points.toLocaleString()} pt</p></div>
    <div class="ranking-list">${members.slice(3).map((member) => `<div class="rank-row ${member.self ? "is-self" : ""}"><b>${member.rank}</b><i>${member.self ? "柿" : member.name.slice(0, 1)}</i><span>${escapeHtml(member.name)}${member.self ? "（あなた）" : ""}</span><strong>${member.points.toLocaleString()} pt</strong></div>`).join("")}</div>
    <p class="ranking-note">開発確認用のため、他の見守り人と順位はサンプルデータです。</p>
    ${bottomNav("fun")}
  </section>`;
}

function renderBadges() {
  const unlocked = unlockedBadges();
  const upcoming = nextBadge();
  const previous = [...badgeCatalog].reverse().find((badge) => state.points >= badge.points) || badgeCatalog[0];
  const progress = upcoming ? Math.min(100, ((state.points - previous.points) / (upcoming.points - previous.points)) * 100) : 100;
  return `<section class="screen badges-screen">
    ${topBar("ピンバッジ", "fun")}
    <div class="badge-head"><span>COLLECTION</span><h1>見守りピンバッジ</h1><p>ポイントを集めて、特別なピンを解放しよう。</p><b>${unlocked.length} / ${badgeCatalog.length}</b></div>
    ${upcoming ? `<div class="next-badge-progress"><div><span>次は「${upcoming.name}」</span><b>あと ${(upcoming.points - state.points).toLocaleString()}pt</b></div><i><em style="width:${progress}%"></em></i></div>` : `<div class="next-badge-progress complete"><b>すべてのバッジを集めました！</b></div>`}
    <div class="badge-collection">${badgeCatalog.map((badge) => {
      const isUnlocked = state.points >= badge.points;
      return `<article class="pin-card ${isUnlocked ? "unlocked" : "locked"}"><div class="pin"><span>${isUnlocked ? badge.icon : "?"}</span><i></i></div><div><span>${badge.points.toLocaleString()}pt</span><h2>${badge.name}</h2><p>${badge.description}</p></div>${isUnlocked ? `<b class="owned-label">GET</b>` : `<b class="locked-label">🔒</b>`}</article>`;
    }).join("")}</div>
    ${bottomNav("fun")}
  </section>`;
}

function renderKakiQuiz() {
  const session = state.kakiQuiz;
  if (!session || session.completed) return renderQuizResult();
  const item = kakiQuizQuestions[session.index];
  const selected = session.answers[session.index];
  return `<section class="screen kaki-quiz-screen">
    ${topBar("見知不柿クイズ", "fun")}
    <div class="kaki-quiz-progress"><div><span>QUESTION</span><b>${session.index + 1} / ${kakiQuizQuestions.length}</b></div><i><em style="width:${((session.index + 1) / kakiQuizQuestions.length) * 100}%"></em></i><p>いまの正解 <b>${session.score}</b>問</p></div>
    <div class="kaki-question-card">
      <div class="quiz-fruit">柿</div>
      <span class="question-no">Q${session.index + 1}.</span><h1>${item.question}</h1>
      <div class="kaki-options">${item.options.map((option, index) => {
        const answered = session.answered;
        const css = answered ? index === item.answer ? "correct" : index === selected ? "wrong" : "muted" : "";
        return `<button data-kaki-answer="${index}" class="${css}" ${answered ? "disabled" : ""}><i>${String.fromCharCode(65 + index)}</i><span>${option}</span><b>${answered && index === item.answer ? "✓" : answered && index === selected ? "×" : ""}</b></button>`;
      }).join("")}</div>
      ${session.answered ? `<div class="quiz-explanation ${selected === item.answer ? "is-correct" : "is-wrong"}"><b>${selected === item.answer ? "正解！ +10pt" : `おしい！ 正解は「${item.options[item.answer]}」`}</b><p>${item.explanation}</p></div>` : ""}
    </div>
    <div class="kaki-quiz-footer"><button class="primary-button" data-kaki-next ${session.answered ? "" : "disabled"}>${session.index === kakiQuizQuestions.length - 1 ? "結果を見る" : "次の問題へ"}</button><small>${session.review ? "復習モード：ポイントは加算されません" : "正解1問につき10pt"}</small></div>
  </section>`;
}

function renderQuizResult() {
  const session = state.kakiQuiz || { score: state.quizBestScore, awarded: 0, review: true };
  const perfect = session.score === kakiQuizQuestions.length;
  const unlocked = unlockedBadges();
  return `<section class="screen kaki-result-screen">
    ${topBar("クイズ結果", "fun")}
    <div class="kaki-result-hero"><span>${perfect ? "🏆" : session.score >= 7 ? "👏" : "🌱"}</span><p>KAKI QUIZ RESULT</p><h1>${session.score}<small> / 10問 正解</small></h1><b>${perfect ? "見知不柿マスター！" : session.score >= 7 ? "かなりの柿ものしり！" : "ここから柿ものしり！"}</b></div>
    <div class="quiz-point-result"><span>${session.review ? "復習モード" : "今回獲得したポイント"}</span><b>${session.review ? "加算なし" : `+${session.awarded} pt`}</b>${perfect && !session.review ? `<p>全問正解ボーナス +50ptを含みます</p>` : ""}</div>
    <div class="result-badge-preview"><span>現在のコレクション</span><div>${unlocked.slice(-3).map((badge) => `<i title="${badge.name}">${badge.icon}</i>`).join("")}</div><b>${unlocked.length} / ${badgeCatalog.length} GET</b><button data-nav="badges">バッジを見る ›</button></div>
    <div class="quiz-result-actions"><button class="primary-button" data-nav="fun">おたのしみ広場へ</button><button class="secondary-button" data-start-kaki-quiz>10問を復習する</button></div>
    <p class="quiz-sources">クイズの内容は福島県・会津若松市の公開情報をもとに構成しています。</p>
    ${bottomNav("fun")}
  </section>`;
}

function renderMyPage() {
  const item = profile();
  return `<section class="screen mypage-screen">
    ${topBar("マイページ", "home")}
    <div class="profile-card">${mascotMarkup(item, "small")}<div><span>${item.name}の見守り人</span><h2>${escapeHtml(state.nickname)}</h2><p>${item.label}</p></div></div>
    <div class="mypage-points"><span>所持ポイント</span><b>${state.points.toLocaleString()} <small>pt</small></b></div>
    <div class="mypage-feature-grid"><button data-nav="ranking"><span>♛</span><b>ランキング</b><small>今週の順位を見る</small></button><button data-nav="badges"><span>✦</span><b>ピンバッジ</b><small>${unlockedBadges().length} / ${badgeCatalog.length} GET</small></button></div>
    <div class="history-block">
      <h3>最近の水やり</h3>
      ${state.wateringTaps.length ? state.wateringTaps.slice(0, 5).map((tap) => `<div class="history-row"><span>${tap.date}</span><p>${tap.result === "M" || tap.result === "A" ? "リレー達成" : "見守り"}</p><b>+${tap.points} pt</b></div>`).join("") : `<p class="empty-state">まだ水やりの記録がありません。</p>`}
    </div>
    <div class="history-block diary-block">
      <h3>木の観察日誌</h3>
      ${state.journal.length ? state.journal.slice(0, 5).map((entry) => `<article class="diary-entry"><time>${entry.date}</time><div><b>${escapeHtml(entry.title)}</b><p>${escapeHtml(entry.detail)}</p></div></article>`).join("") : `<p class="empty-state">参加すると、みんなの記録がここに残ります。</p>`}
    </div>
    <div class="history-block">
      <h3>会話のきろく</h3>
      <div class="history-row"><span>これまで</span><p>${Math.floor(state.messages.length / 2)}回のおはなし</p><b>›</b></div>
    </div>
    <div class="settings-list">
      <button data-notice>♧　ミッション通知 ${state.notificationsEnabled ? "ON" : "OFF"}<span>›</span></button>
      <button data-nav="about">◎　プロジェクトについて <span>›</span></button>
      <button data-logout>↻　ログアウト <span>›</span></button>
    </div>
    ${bottomNav("mypage")}
  </section>`;
}

function renderAbout() {
  return `<section class="screen about-screen">
    ${topBar("プロジェクトについて", route === "about" ? "top" : "top")}
    <div class="about-hero"><span>会津の宝物を、未来へ。</span><h1>見知不柿とは？</h1><p>会津盆地で大切に育てられてきた、上品な甘さとやわらかな果肉が魅力の柿です。</p></div>
    <div class="about-content">
      <section><span class="section-kicker">OUR STORY</span><h2>木に人格があったなら。</h2><p>若い世代にも見知不柿を知ってほしい。その思いから、柿の木の今をイラストや会話で感じられる体験をつくりました。</p></section>
      <section><span class="section-kicker">HOW IT WORKS</span><h2>みんなのバケツが届くまで</h2><div class="flow-row"><div><i>1</i><b>乾燥をお知らせ</b></div><span>→</span><div><i>2</i><b>みんなで注ぐ</b></div><span>→</span><div><i>3</i><b>8Lを給水</b></div></div><p class="caption">本番では現地センサー・共有DB・給水機器を連携する想定です。このプロトタイプでは、20分の突発ミッションと共同達成の体験を端末内で再現しています。</p></section>
      <section><span class="section-kicker">FAQ</span><h2>よくある質問</h2>
        <details><summary>見知不柿は渋柿なの？</summary><p>収穫時は渋柿ですが、ていねいに渋抜きをすることで、とろりと上品な甘さになります。</p></details>
        <details><summary>水やりは何度でもできる？</summary><p>緊急ミッションへの参加は1日1回です。50タップまたは満水で8Lを給水し、1本3回・全体9回の上限で木を守ります。</p></details>
        <details><summary>ポイントは何に使える？</summary><p>現在は見守りの記録として貯まります。将来の使い道はプロジェクトの進行に合わせてお知らせします。</p></details>
      </section>
      <button class="primary-button" data-nav="top">トップへ戻る</button>
    </div>
  </section>`;
}

function renderContact() {
  return `<section class="screen contact-screen">
    ${topBar("お問い合わせ", "top")}
    <div class="contact-head"><span>✉</span><h1>お問い合わせ</h1><p>ご意見・ご質問など<br />お気軽にご連絡ください。</p></div>
    <form id="contact-form" class="contact-form">
      <label>お名前 <small>任意</small><input name="name" maxlength="30" placeholder="柿 みのり" /></label>
      <label>メールアドレス <small>任意</small><input name="email" type="email" placeholder="kaki@example.com" /></label>
      <label>件名<input name="subject" required maxlength="50" placeholder="お問い合わせの件名" /></label>
      <label>お問い合わせ内容<textarea name="message" required maxlength="500" rows="7" placeholder="お問い合わせ内容をご入力ください"></textarea></label>
      <button class="primary-button" type="submit">送信する</button>
      <p class="demo-note">送信UI確認用です。入力内容は外部送信せず、localStorageに保存します。</p>
    </form>
  </section>`;
}

function renderAdmin() {
  const sensor = currentSensor();
  const mission = syncMission();
  const recentMessages = state.messages.slice(-6).reverse();
  return `<section class="screen admin-screen">
    ${topBar("管理画面", "top")}
    <div class="admin-heading"><span>開発メンバー確認用・管理画面プロトタイプ</span><h1>給水制御</h1><p>柿の木 01 ／ ${profile().name}</p></div>
    <div class="admin-actions ${state.irrigationPaused ? "paused" : "running"}">
      <div><span>現在の給水</span><b>${state.irrigationPaused ? "全停止中" : "稼働中"}</b></div>
      <button data-admin-toggle>${state.irrigationPaused ? "給水を再開" : "給水を全停止"}</button>
    </div>
    <section class="admin-card"><h2>共同バケツミッション <small>${mission?.status || "待機中"}</small></h2><div class="admin-mission"><div><span>タップ</span><b>${mission?.tapCount || 0} / 50</b></div><div><span>参加者</span><b>${mission?.participantCount || 0}人</b></div><div><span>水量</span><b>${mission?.liters?.toFixed(1) || "0.0"}L</b></div></div></section>
    <section class="admin-card"><h2>センサー状況 <small>現在</small></h2><div class="admin-metrics"><div><span>気温</span><b>${sensor.temperature} ℃</b></div><div><span>土壌水分</span><b>${sensor.moisture} %</b></div><div><span>通信</span><b class="online">正常</b></div></div></section>
    <section class="admin-card"><h2>水やり履歴 <small>最新5件</small></h2>${state.wateringTaps.length ? state.wateringTaps.slice(0, 5).map((tap) => `<div class="admin-log"><time>${tap.date} ${new Date(tap.timestamp).toLocaleTimeString("ja-JP", {hour:"2-digit",minute:"2-digit"})}</time><span>結果 ${tap.result}</span><b>+${tap.points} pt</b></div>`).join("") : `<p class="empty-state">記録はありません。</p>`}</section>
    <section class="admin-card"><h2>会話ログ <small>直近</small></h2>${recentMessages.length ? recentMessages.map((message) => `<div class="admin-chat"><span>${message.from === "tree" ? "木" : "人"}</span><p>${escapeHtml(message.text)}</p></div>`).join("") : `<p class="empty-state">記録はありません。</p>`}</section>
    <div class="admin-users"><span>見守り人数（サンプル値）</span><b>368人</b></div>
  </section>`;
}

function escapeHtml(value = "") {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function render() {
  clearInterval(clockTimer);
  if (route === "quiz-back") {
    state.quizIndex = Math.max(0, state.quizIndex - 1);
    saveState();
    route = "quiz";
    history.replaceState(null, "", "#quiz");
  }
  const views = {
    top: renderTop,
    quiz: renderQuiz,
    result: renderResult,
    login: renderLogin,
    home: renderHome,
    chat: renderChat,
    fun: renderFun,
    ranking: renderRanking,
    badges: renderBadges,
    "kaki-quiz": renderKakiQuiz,
    "quiz-result": renderQuizResult,
    mission: renderMission,
    watering: renderWatering,
    mypage: renderMyPage,
    about: renderAbout,
    contact: renderContact,
    admin: renderAdmin,
  };
  document.querySelector("#app").innerHTML = `<aside class="prototype-ribbon"><b>開発メンバー確認用プロトタイプ</b><span>外部連携未接続・端末内シミュレーション</span></aside>${(views[route] || renderTop)()}`;
  document.body.dataset.route = route;
  if (route === "chat") requestAnimationFrame(() => document.querySelector("#messages")?.scrollTo(0, 99999));
  if (document.querySelector("[data-countdown]")) {
    clockTimer = setInterval(() => {
      document.querySelectorAll("[data-countdown]").forEach((node) => {
        const label = countdownLabel(Number(node.dataset.countdown));
        node.textContent = node.closest(".mission-alert") ? `あと ${label}` : label;
      });
      if (state.mission?.status === "active" && Date.now() >= state.mission.endsAt) render();
    }, 1000);
  }
}

function secureRandom(max) {
  if (globalThis.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    crypto.getRandomValues(value);
    return value[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function startKakiQuiz() {
  const review = state.quizAwardDates.includes(todayKey());
  state.kakiQuiz = { date: todayKey(), index: 0, answers: [], score: 0, answered: false, completed: false, review, awarded: 0 };
  saveState();
  go("kaki-quiz");
}

function answerKakiQuiz(answerIndex) {
  const session = state.kakiQuiz;
  if (!session || session.answered) return;
  const item = kakiQuizQuestions[session.index];
  session.answers[session.index] = answerIndex;
  session.answered = true;
  if (answerIndex === item.answer) session.score += 1;
  saveState();
  render();
}

function advanceKakiQuiz() {
  const session = state.kakiQuiz;
  if (!session?.answered) return;
  if (session.index < kakiQuizQuestions.length - 1) {
    session.index += 1;
    session.answered = false;
    saveState();
    return render();
  }

  session.completed = true;
  if (!session.review) {
    const correctPoints = session.score * 10;
    const perfectBonus = session.score === kakiQuizQuestions.length ? 50 : 0;
    session.awarded = correctPoints + perfectBonus;
    state.points += session.awarded;
    state.quizAwardDates.push(todayKey());
    state.journal.unshift({ date: todayKey(), type: "quiz", title: `見知不柿クイズ ${session.score}/10問`, detail: `+${session.awarded}pt${perfectBonus ? "・全問正解ボーナス獲得" : ""}` });
  }
  state.quizBestScore = Math.max(state.quizBestScore, session.score);
  state.quizAttempts.unshift({ date: todayKey(), score: session.score, awarded: session.awarded, review: session.review });
  saveState();
  go("quiz-result");
}

function claimLoginBonus() {
  const date = todayKey();
  if (state.loginBonusDates.includes(date)) return 0;
  const boosted = state.tomorrowBonus?.date === date && !state.tomorrowBonus.claimed;
  const points = boosted ? 15 : 10;
  state.loginBonusDates.push(date);
  state.points += points;
  if (boosted) state.tomorrowBonus.claimed = true;
  state.journal.unshift({ date, type: "login", title: boosted ? "大喜びログインボーナス" : "ログインボーナス", detail: `+${points}pt` });
  return points;
}

function joinMission() {
  const date = todayKey();
  const mission = syncMission();
  if (!mission || mission.status !== "active") return toast("このミッションは終了しています");
  if (mission.joined || state.wateringTaps.some((tap) => tap.date === date)) return toast("参加は1日1回です。また明日ね！");

  const contribution = 1 + secureRandom(3);
  mission.joined = true;
  mission.contribution = contribution;
  mission.tapCount += 1;
  mission.participantCount += 1;
  mission.liters = Math.min(8, mission.liters + contribution);
  mission.basePoints = 10;
  state.points += 10;

  if (mission.tapCount >= mission.goalTaps || mission.liters >= 8) {
    if (state.irrigationPaused) {
      mission.status = "blocked";
      state.bucketCarry = mission.liters;
      state.journal.unshift({ date, type: "blocked", title: "給水停止中も見守り達成", detail: `${mission.participantCount}人が参加・水は次回へ持ち越し` });
    } else {
      mission.status = "success";
      mission.completedAt = Date.now();
      mission.liters = 8;
      mission.teamPoints = 30;
      state.points += 30;
      state.waterings.unshift({ date, timestamp: Date.now(), liters: 8, success: true, missionId: mission.id, treeId: profile().id });
      state.soilMoisture = Math.min(52, state.soilMoisture + 23);
      state.bucketCarry = 0;

      const names = ["あかべこさん", "さくらさん", "会津っ子さん", "こづゆさん", "みのりさん", "磐梯さん", "はるかさん"];
      const winnerIndex = secureRandom(mission.participantCount);
      mission.winner = winnerIndex === 0 ? state.nickname : names[(winnerIndex - 1) % names.length];
      if (winnerIndex === 0) {
        mission.winnerPoints = 100;
        state.points += 100;
      }

      // デモでは達成後の応援タップも再現し、ストレッチゴールまで見せる。
      mission.tapCount = Math.max(mission.tapCount, 82);
      mission.participantCount = Math.max(mission.participantCount, 64);
      mission.stretchReached = true;
      state.tomorrowBonus = { date: tomorrowKey(), multiplier: 1.5, claimed: false };
      state.journal.unshift({ date, type: "success", title: "水やりバケツリレー達成", detail: `8L給水・${mission.tapCount}タップ・当番 ${mission.winner}` });
    }
  }
  const totalPoints = mission.basePoints + mission.teamPoints + mission.winnerPoints;
  const tap = { date, timestamp: Date.now(), result: mission.status === "success" ? "M" : "E", points: totalPoints, contribution, missionId: mission.id };
  state.wateringTaps.unshift(tap);
  saveState();
  go("watering");
}

function observeTree() {
  const date = todayKey();
  if (state.observations.some((entry) => entry.date === date)) return toast("今日の観察ポイントは受け取り済みです");
  state.observations.unshift({ date, timestamp: Date.now(), points: 2 });
  state.points += 2;
  state.journal.unshift({ date, type: "observe", title: "葉っぱを観察", detail: "+2pt・今日も元気を確認" });
  saveState();
  toast("葉っぱを観察しました　+2pt");
  render();
}

async function enableNotifications() {
  if (!("Notification" in window)) return toast("このブラウザは通知に対応していません");
  const permission = await Notification.requestPermission();
  state.notificationsEnabled = permission === "granted";
  saveState();
  if (permission !== "granted") return toast("通知は許可されませんでした");
  const mission = syncMission();
  if (mission?.status === "active") {
    new Notification(`${profile().name}がピンチ！`, { body: `あと${countdownLabel(mission.endsAt)}。みんなで水を運ぼう！`, icon: "assets/favicon.svg" });
  }
  toast("緊急ミッション通知をONにしました");
  render();
}

async function submitChat(form) {
  if (thinking) return;
  const input = form.querySelector("#chat-input");
  const value = input.value.trim();
  if (!value) return;
  const date = todayKey();
  if (state.conversationDate !== date) {
    state.conversationDate = date;
    state.conversationCount = 0;
  }
  if (state.conversationCount >= 10) return toast("今日のおはなしは10回までです。また明日ね！");
  state.messages.push({ from: "human", text: value, time: formatTime() });
  state.conversationCount += 1;
  thinking = true;
  saveState();
  render();
  await new Promise((resolve) => setTimeout(resolve, 850));
  state.messages.push({ from: "tree", text: replyFor(value), time: formatTime() });
  thinking = false;
  saveState();
  render();
}

function shareText() {
  return `私の推し柿は「${profile().name}」でした！ 会津の見知不柿を一緒に育てよう。 #しゃべる柿の木`;
}

async function shareResult() {
  if (navigator.share) {
    try { await navigator.share({ title: "しゃべる柿の木｜柿診断", text: shareText(), url: location.href.split("#")[0] }); return; } catch {}
  }
  await navigator.clipboard?.writeText(`${shareText()} ${location.href.split("#")[0]}`);
  toast("シェア文をコピーしました");
}

function downloadShareCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080; canvas.height = 1080;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, 1080);
  gradient.addColorStop(0, "#e9f8f8"); gradient.addColorStop(1, "#fff2cd");
  context.fillStyle = gradient; context.fillRect(0, 0, 1080, 1080);
  context.fillStyle = "#1f5639"; context.textAlign = "center"; context.font = "700 42px sans-serif";
  context.fillText("しゃべる柿の木｜柿診断", 540, 110);
  context.fillStyle = "#432d20"; context.font = "600 50px sans-serif"; context.fillText("私の推し柿は…", 540, 250);
  context.fillStyle = profile().color; context.font = "800 86px sans-serif"; context.fillText(`${profile().name}！`, 540, 370);
  context.font = "210px sans-serif"; context.fillText("🍊", 540, 650);
  context.fillStyle = "#432d20"; context.font = "500 35px sans-serif"; context.fillText(profile().label, 540, 825);
  context.font = "500 30px sans-serif"; context.fillText("会津の見知不柿を一緒に育てよう", 540, 920);
  context.fillStyle = "#2b8052"; context.font = "700 28px sans-serif"; context.fillText("#しゃべる柿の木", 540, 985);
  const link = document.createElement("a");
  link.download = `推し柿-${profile().name}.png`; link.href = canvas.toDataURL("image/png"); link.click();
  toast("結果画像を保存しました");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) return go(nav.dataset.nav);
  if (event.target.closest("[data-start-quiz]")) {
    state.answers = []; state.quizIndex = 0; quizTransitioning = false; saveState(); return go("quiz");
  }
  if (event.target.closest("[data-start-kaki-quiz]")) return startKakiQuiz();
  const kakiAnswer = event.target.closest("[data-kaki-answer]");
  if (kakiAnswer) return answerKakiQuiz(Number(kakiAnswer.dataset.kakiAnswer));
  if (event.target.closest("[data-kaki-next]")) return advanceKakiQuiz();
  const answer = event.target.closest("[data-answer]");
  if (answer) return selectDiagnosisAnswer(Number(answer.dataset.answer));
  if (event.target.closest("[data-login]")) {
    const nickname = document.querySelector("#nickname")?.value.trim();
    state.nickname = nickname || "見守り人さん"; state.loggedIn = true; const bonus = claimLoginBonus(); saveState(); toast(`ログインしました　+${bonus}pt`); return go("home");
  }
  if (event.target.closest("[data-join-mission]")) return joinMission();
  if (event.target.closest("[data-observe]")) return observeTree();
  if (event.target.closest("[data-cycle-tree-state]")) return cycleTreeState();
  if (event.target.closest("[data-share]")) return shareResult();
  if (event.target.closest("[data-share-x]")) return window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(location.href.split("#")[0])}`, "_blank", "noopener,noreferrer");
  if (event.target.closest("[data-share-line]")) return window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(location.href.split("#")[0])}&text=${encodeURIComponent(shareText())}`, "_blank", "noopener,noreferrer");
  if (event.target.closest("[data-save-card]")) return downloadShareCard();
  if (event.target.closest("[data-faq]")) return document.querySelector("#top-faq")?.classList.toggle("hidden");
  if (event.target.closest("[data-report]")) return toast("通報を受け付けました");
  if (event.target.closest("[data-notice]")) return enableNotifications();
  if (event.target.closest("[data-admin-toggle]")) { state.irrigationPaused = !state.irrigationPaused; saveState(); toast(state.irrigationPaused ? "給水を全停止しました" : "給水を再開しました"); return render(); }
  if (event.target.closest("[data-logout]")) { state.loggedIn = false; saveState(); toast("ログアウトしました"); return go("top"); }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#chat-form")) { event.preventDefault(); submitChat(event.target); }
  if (event.target.matches("#contact-form")) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    state.contacts.unshift({ ...data, date: new Date().toISOString() }); saveState(); event.target.reset(); toast("お問い合わせを受け付けました");
  }
});

window.addEventListener("popstate", () => { route = location.hash.replace("#", "") || "top"; render(); });
render();
