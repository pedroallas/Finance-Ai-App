"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "nome",
  },
  {
    accessorKey: "type",
    header: "tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "método de pagamento",
  },
  {
    accessorKey: "date",
    header: "data",
  },
  {
    accessorKey: "amount",
    header: "valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
