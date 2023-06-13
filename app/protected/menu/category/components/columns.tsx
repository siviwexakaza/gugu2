import { ColumnDef } from "@tanstack/react-table";

export type Category = {
  id: string;
  name: string;
  status: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
