const TarotInfomationData = {
  card: [
    "夢想・愚行・極端・熱狂",
    "意志・手腕・外交",
    "秘密・神秘・英知",
    "実り・行動・月日の長さ・未知なるもの",
    "統治・堅固さ・防御・同盟",
    "信条・社会性・恵みと有徳",
    "魅力・愛・美",
    "援軍・摂理・勝利・復讐",
    "力・勇気・寛大・名誉",
    "深慮・忠告を受ける・崩壊",
    "幸運・転機・向上",
    "平等・正しさ・行政・正当な判決",
    "英知・慎重・試練・直観",
    "停止・損失・死と再生",
    "調整・中庸・倹約・管理",
    "暴力・激烈・前もって定められ動かせぬもの・黒魔術",
    "悲嘆・災難・不名誉・転落",
    "希望と明るい見通し・瞑想・霊感・放棄",
    "隠れた敵・幻想・欺瞞・失敗",
    "物質的な幸福・幸運な結婚・満足",
    "復活・位置の変化・更新・結果",
    "完成・約束された成功・旅",
  ],
  tarot: [
    "タロットとは遊戯や占いなどに使用されるカードのこと。",
    "日本においては大アルカナに分けられる22枚の認知度が高く、22枚のみを指す場合が多い。",
    "カードそれぞれに意味があり、絵柄が正しく見える場合(正位置)と逆さに見える場合(逆位置)によっても意味を持つとされている。",
    "正位置は基本的にポジティブな意味、逆位置は正位置の意味を反転した意味になる。そのためネガティブな意味となっている。",
  ],
};

type TarotInfomationProps = {
  infoType: string;
  cardNumber?: number;
};
const tarotInfomation = (props: TarotInfomationProps) => {
  if (props.infoType === "card") {
    if (props.cardNumber === undefined) return;
    const infomationText = TarotInfomationData.card[props.cardNumber];
    return infomationText;
  }
  if (props.infoType === "tarot") {
    const infomationText = TarotInfomationData.tarot;
    return infomationText;
  }
};

export default tarotInfomation;
