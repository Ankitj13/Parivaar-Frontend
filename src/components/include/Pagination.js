import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

export const Pagination = ({ columns, data }) => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    setPageSize,
    pageCount,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      <table className="table table-hover text-nowrap" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      <hr />
      <div className="row col-md-12 ">
        <div className="col-md-5">
          <div
            className="d-flex dataTables_info"
            id="example1_info"
            role="status"
            aria-live="polite"
          >
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} - {pageOptions.length} of
              </strong>{" "}
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <div className="col-md-7">
          <div className="d-flex justify-content-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {"<<"}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    {"<"}
                  </a>
                </li>
                <li className="">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  >
                    {">"}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canPreviousPage}
                  >
                    {">>"}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
