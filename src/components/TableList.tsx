import * as React from "react";
import { Table } from "react-bootstrap";

const TableList = ({ headers, rows, noIndex = false }) => {
  return (
    <Table
      className="justify-content-center text-center"
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          {!noIndex && <th>#ID</th>}
          {headers.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr>
            {Object.keys(r).map((k) =>
              k === "id" ? (
                !noIndex && <td> {r[k].substr(28)}</td>
              ) : typeof r[k] === "string" ? (
                <td>{r[k]}</td>
              ) : (
                <td>{r[k].toLocaleDateString()}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableList;
