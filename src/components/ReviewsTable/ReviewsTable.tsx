import s from "./ReviewsTable.module.css";

import { getReviews, reviewColumns } from "../../helpers";
import { Table } from "../Table/Table";

export const ReviewsTable = () => {
  return (
    <div className={s.container}>
      <Table columns={reviewColumns} data={getReviews()} />
    </div>
  );
};
