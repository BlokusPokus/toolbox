import React from 'react';
import './Table.css';


export interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
  }

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

function Table<T>({ columns, data, onRowClick }: TableProps<T>) {
    console.log('Table Data:', data);
  return (
    <div className="table-container">
      <div className="table-header">
        {columns.map((column, index) => (
          <div key={index} className="table-cell">
            {column.header}
          </div>
        ))}
      </div>
      {data.map((item, rowIndex) => (
        <div
          key={rowIndex}
          className="table-row"
          onClick={() => onRowClick && onRowClick(item)}
        >
          {columns.map((column, cellIndex) => (
            <div key={cellIndex} className="table-cell">
              {typeof column.accessor === 'function'
                ? column.accessor(item)
                : (item[column.accessor] as React.ReactNode)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
