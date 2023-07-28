type DeckOrderProps = {
  number: number;
  min_num: number;
  max_num: number;
};
const deckPosition = (props: DeckOrderProps) => {
  const order = [];
  order.push(
    Math.floor(Math.random() * (props.max_num - props.min_num + 1)) +
      props.min_num
  );
  let deckIndex = 1;
  while (deckIndex < props.number) {
    const num =
      Math.floor(Math.random() * (props.max_num - props.min_num + 1)) +
      props.min_num;
    order.push(num);
    deckIndex++;
  }
  return order;
};

export default deckPosition;
