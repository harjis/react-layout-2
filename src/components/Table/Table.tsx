import React from "react";
import cn from "classnames";
import { Column, useBlockLayout, useTable } from "react-table";

import s from "./Table.module.css";

type Props<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};
export const Table = <Data extends Record<string, unknown>>(
  props: Props<Data>
): JSX.Element => {
  const defaultColumn = React.useMemo(
    () => ({
      width: 200,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: props.columns,
        data: props.data,
        defaultColumn,
      },
      useBlockLayout
    );

  return (
    <div {...getTableProps()} className={s.container}>
      <div className={s.stickyColumnHeader}>
        {headerGroups.map((headerGroup) => (
          <div
            {...headerGroup.getHeaderGroupProps()}
            className={s.columnHeader}
          >
            {headerGroup.headers.map((column, index) => (
              <div
                {...column.getHeaderProps()}
                className={cn(s.cell, { [s.stickyRowHeader]: index === 0 })}
              >
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map((cell, index) => {
                return (
                  <div
                    {...cell.getCellProps()}
                    className={cn(s.cell, { [s.stickyRowHeader]: index === 0 })}
                  >
                    {cell.render("Cell")}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
