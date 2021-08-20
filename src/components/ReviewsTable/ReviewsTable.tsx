import s from "./ReviewsTable.module.css";

import { getReviews, reviewColumns } from "../../helpers";
import { Table } from "../Table/Table";

export const ReviewsTable = () => {
  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <button>Add button</button>
        <button>Remove button</button>
      </div>

      <Table columns={reviewColumns} data={getReviews()} />
    </div>
  );
};
