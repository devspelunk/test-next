"use client";

import { Text } from "lucide-react";
import { useMemo } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { DataTableSortList } from "@/components/data-table/data-table-sort-list";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { useDataTable } from "@/hooks/use-data-table";

export default function TablePage() {
  // Define blank data
  const data = useMemo(() => [], []);
  
  // Define columns
  const columns = useMemo(() => [
    {
      id: "title",
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
      meta: { 
        label: "Title", 
        placeholder: "Search titles...", 
        variant: "text", 
        icon: Text, 
      },
      enableColumnFilter: true,
    },
  ], []);

  // Initialize table with blank data
  const { table } = useDataTable({
    data,
    columns,
    pageCount: 1,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Table Example</h1>
      <DataTable table={table}>
        <DataTableToolbar table={table}>
          <DataTableSortList table={table} />
        </DataTableToolbar>
      </DataTable>
    </div>
  );
}