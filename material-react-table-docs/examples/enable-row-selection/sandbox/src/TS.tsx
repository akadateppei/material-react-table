import React, { FC, useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

const Example: FC = () => {
  const columns = useMemo(
    () =>
      [
        //column definitions...
        {
          header: 'First Name',
          accessorKey: 'firstName',
        },
        {
          header: 'Last Name',
          accessorKey: 'lastName',
        },
        {
          header: 'Age',
          accessorKey: 'age',
        },
        {
          header: 'Address',
          accessorKey: 'address',
        },
        {
          header: 'City',
          accessorKey: 'city',
        },
        {
          header: 'State',
          accessorKey: 'state',
        },
        //end
      ] as MRT_ColumnDef[],
    [],
  );

  const data = useMemo(
    () => [
      //data definitions...
      {
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
      },
      {
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
      },
      //end
    ],
    [],
  );
  return (
    <MaterialReactTable columns={columns} data={data} enableRowSelection />
  );
};

export default Example;
