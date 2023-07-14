import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return data;
};
// https://jsonplaceholder.typicode.com/posts
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
const BasicTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleTheFetch();
  }, []);
  const handleTheFetch = async () => {
    let data = await getData();
    setData(data);
  };

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Title",
      accessorKey: "title",
      footer: "Title",
    },
    {
      header: "Body",
      accessorKey: "body",
      footer: "Body",
    },
  ];

  const table = useReactTable({ data, columns ,getCoreRowModel :getCoreRowModel() });

  return (
    <div className="p-4">
      <h4>TanStack Table</h4>

      {/* Main  */}
      <div>
        <table>
          {/* table head  */}
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
          {/* table head  */}
          <tbody>
            {data && table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
