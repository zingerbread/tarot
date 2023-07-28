const tarotCard = {
  romanNumber: [
    " ",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
  ],
  majorArcana: [
    "愚者",
    "魔術師",
    "女教皇",
    "女帝",
    "皇帝",
    "教皇",
    "恋人",
    "戦車",
    "力",
    "隠者",
    "運命の輪",
    "正義",
    "吊るされた男",
    "死神",
    "節制",
    "悪魔",
    "塔",
    "星",
    "月",
    "太陽",
    "審判",
    "世界",
  ],
  position: ["正位置", "逆位置"],
};

type CardNumberChangerProps = {
  number: number;
  position?: number;
};
const cardNumberChanger = (props: CardNumberChangerProps) => {
  const tarotCardNumber = tarotCard.romanNumber[props.number];
  const tarotCardName = tarotCard.majorArcana[props.number];
  const tarotCardPosition = tarotCard.position[props.position || 0];
  const tarotCardData = {
    number: tarotCardNumber,
    name: tarotCardName,
    position: tarotCardPosition,
  };
  return tarotCardData;
};

export default cardNumberChanger;
