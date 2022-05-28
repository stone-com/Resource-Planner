import React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'availability',
    headerName: 'Availability',
    width: 150,
  },
  {
    field: 'assignedProjects',
    headerName: 'Assigned Projects',
    type: 'number',
    width: 150,
  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
];

const rows = [
  { id: 1, name: 'Stone', availability: '100%' },
  { id: 2, name: 'Namees', availability: '100%' },
  { id: 3, name: 'Mike', availability: '100%' },
  { id: 4, name: 'Cheng', availability: '100%' },
  { id: 5, name: 'Brian', availability: '100%' },
  { id: 6, name: 'Ali', availability: '100%' },
  { id: 7, name: 'Zakk', availability: '100%' },
];

export default function ProjectList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
