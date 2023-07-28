type DeckOrderProps = {
  number: number;
  min_num: number;
  max_num: number;
};
const deckOrder = (props: DeckOrderProps) => {
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
    if (order.includes(num)) {
      continue;
    }
    order.push(num);
    deckIndex++;
  }
  return order;
};

export default deckOrder;
