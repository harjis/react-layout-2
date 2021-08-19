import s from "./Review.module.css";

import { Split } from "../Split/Split";
import { List } from "../List/List";
import { ReviewHeader } from "../ReviewHeader/ReviewHeader";
import { getLeftSideItems } from "../../helpers";
import { ReviewsTable } from "../ReviewsTable/ReviewsTable";

export const Review = () => {
  const left = <List items={getLeftSideItems()} />;
  const right = <ReviewsTable />;
  return (
    <div className={s.container}>
      <ReviewHeader />
      <Split left={left} right={right} />
    </div>
  );
};
