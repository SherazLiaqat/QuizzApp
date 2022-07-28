import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from "react-table";
function Table({
  pageSize,
  pageNum,
  totalCount,
  filter,
  headers,
  gridData,
  increment,
  decrement,
}) {
  var totalPages = totalCount > 1 ? Math.ceil(totalCount / pageSize) : 1;
  const data = useMemo(() => gridData, [gridData]);
  const columns = React.useMemo(() => headers, [headers]);
  let pageIn = useRef();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    canNextPage,
    nextPage,
    previousPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: pageSize },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );
  pageIn.current = pageIndex;

  return (
    <>
    <div className="table-responsive">
      <table className="table table-spacer mb-0" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th key={`column_${idx}_header`} {...column.getHeaderProps()}>
                  {column.render("Header")}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <nav className="pagination-wrapper">
        <ul className="pagination align-items-center">
        <li className="page-item">
            <p>
              Page
              {pageNum} of {totalPages}
            </p>
          </li>

          <li className={`page-item`}>
            <button
              onClick={() => decrement()}
              disabled={pageNum === 1}
              tabIndex={-1}
            >
              <i>
                <Icon icon="ic:round-keyboard-arrow-left" />
              </i>{" "}
            </button>
          </li>
        
          <li className={`page-item`}>
            <button
              onClick={() => increment()}
              disabled={pageNum === totalPages}
            
            >
              <Icon icon="ic:round-keyboard-arrow-right" />
            </button>
          </li>
        </ul>
    </nav></>
  );
}

export default Table;