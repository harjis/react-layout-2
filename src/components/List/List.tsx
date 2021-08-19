import s from "./List.module.css";

type Props = {
  items: string[];
};
export const List = (props: Props) => {
  return (
    <div className={s.container}>
      {props.items.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
    </div>
  );
};
