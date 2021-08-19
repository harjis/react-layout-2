import s from "./Review.module.css";

import { Split } from "../Split/Split";
import { List } from "../List/List";
import { ReviewHeader } from "../ReviewHeader/ReviewHeader";

export const Review = () => {
  const left = <List items={getLeftSideItems(3)} />;
  return (
    <div className={s.container}>
      <ReviewHeader />
      <Split left={left} right={<div>righ</div>} />
    </div>
  );
};

function getLeftSideItems(num: number = 100) {
  return Array.from(new Array(num).keys()).map((i) => `Item ${i}`);
}
