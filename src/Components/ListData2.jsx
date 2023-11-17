import React from 'react';
import { useTable } from 'react-table';
import '../Styling/movieTable.css'

const ListData2 = ({ movies ,param1,param2,param3}) => {
  // Columns configurationnpm
  const columns = React.useMemo(
    () => [
      { Header: param1, accessor: param1 },
      { Header: param2, accessor: param2 },
      { Header: param3, accessor: param3 },
    ],
    []
  );

  // Create an instance of the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: movies });

  return (
    
      <table className='movieTable' {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
  
  );
};

export default ListData2;
