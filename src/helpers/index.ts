import { Review } from "../types";
import { Column } from "react-table";

export function getLeftSideItems(num: number = 100) {
  return createArray(num).map((i) => `Item ${i}`);
}

export const reviewColumns: Column<Review>[] = [
  { accessor: "id", Header: "Id" },
  { accessor: "name", Header: "Name" },
  { accessor: "planogramStatus", Header: "Planogram Status" },
  { accessor: "locations", Header: "Locations" },
  { accessor: "products", Header: "Products" },
];
export function getReviews(): Review[] {
  return createArray(100).map((i) => ({
    id: i,
    name: `Review ${i}`,
    planogramStatus: "Copied",
    locations: Math.random(),
    products: Math.random(),
  }));
}

function createArray(num: number): number[] {
  return Array.from(new Array(num).keys());
}
