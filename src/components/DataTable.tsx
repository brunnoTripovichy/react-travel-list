import React from 'react';

interface Column<T> {
  key: keyof T | string;
  header: string | React.ReactNode;
  render?: (row: T) => React.ReactNode; // Optional custom template
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  // Validate required props
  if (!columns || columns.length === 0) {
    throw new Error(
      "DataTable: 'columns' prop is required and cannot be empty.",
    );
  }

  if (!data) {
    throw new Error("DataTable: 'data' prop is required.");
  }

  return (
    <div className="overflow-auto rounded-lg border border-gray-200">
      <table className="min-w-full bg-white border-collapse">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-2 border text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 border-b">
                {columns.map((col, colIndex) => {
                  const cellValue = col.render
                    ? col.render(row) // Use custom template if provided
                    : ((row[col.key as keyof T] as React.ReactNode) ?? '—'); // Fallback to "—" if value is null/undefined

                  return (
                    <td key={colIndex} className="px-4 py-2 border">
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
