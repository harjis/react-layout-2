type Props = {
  items: string[];
};
export const List = (props: Props) => {
  return (
    <ul>
      {props.items.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};
