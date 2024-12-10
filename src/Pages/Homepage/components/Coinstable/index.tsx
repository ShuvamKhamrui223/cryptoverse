import React from "react";
import { CoinsDataType } from "../..";
import { formatCurrency } from "../../../../utils/NumberFormatter";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

type CoinsTableProps = {
  coins?: CoinsDataType[];
};
const CoinColumns: ColumnDef<CoinsDataType>[] = [
  { accessorKey: "market_cap_rank", header: "rank" },
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.image}
          alt=""
          className="size-10"
          loading="lazy"
        />
        <p className="">{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "current_price",
    header: "current price",
    cell: ({ row }) => (
      <p className={``}>{formatCurrency(row.original.current_price)}</p>
    ),
  },
  {
    accessorKey: "ath_change_percentage",
    header: "price change",
    cell: ({ row }) => (
      <p
        className={`${
          row?.original?.price_change_percentage_24h > 0
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {formatCurrency(row.original.price_change_24h)}
      </p>
    ),
  },
];
const CoinsTable: React.FC<CoinsTableProps> = ({ coins }) => {
  const table = useReactTable({
    data: coins || [],
    columns: CoinColumns,
    getCoreRowModel: getCoreRowModel(),

    // manualPagination: true,
  });

  const navigate = useNavigate();
  return (
    <>
      <table className="w-[80%] overflow-x-auto sm:overflow-x-hidden text-center bg-slate-950 rounded-2xl">
        <thead className="font-semibold capitalize">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-5 bg-gray-900">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="my-6 cursor-pointer hover:bg-gray-800"
              onClick={() => navigate(row.original.id)}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default CoinsTable;
