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
  if (!columns || columns.length === 0) {
    throw new Error(
      "DataTable: 'columns' prop is required and cannot be empty.",
    );
  }

  if (!data) {
    throw new Error("DataTable: 'data' prop is required.");
  }

  return (
    <div className="overflow-auto rounded-lg shadow-lg border border-gray-300 bg-white">
      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white uppercase text-sm">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-semibold tracking-wide border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`text-gray-700 transition ${
                  rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 ${
                  rowIndex === data.length - 1 ? '' : 'border-b border-gray-300'
                }`}
              >
                {columns.map((col, colIndex) => {
                  const cellValue = col.render
                    ? col.render(row)
                    : ((row[col.key as keyof T] as React.ReactNode) ?? '—');

                  return (
                    <td key={colIndex} className="px-6 py-4">
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
                className="px-6 py-6 text-center text-gray-500"
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
