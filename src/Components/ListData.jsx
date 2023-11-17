import React from 'react';
import { useTable } from 'react-table';
import '../Styling/movieTable.css'

const ListData = ({ movies }) => {
  // Columns configurationnpm
  const columns = React.useMemo(
    () => [
      { Header: 'Movie Title', accessor: 'title' },
      { Header: 'Director', accessor: 'director' },
      { Header: 'Release Date', accessor: 'release_date' },
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

export default ListData;
