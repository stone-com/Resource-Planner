import React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'projectName',
    headerName: 'Project Name',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'allocation',
    headerName: 'Allocation',
    type: 'number',
    width: 80,
  },
  {
    field: 'requiredResources',
    headerName: 'Resources Needed',
    type: 'number',
    width: 80,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
  },
  {
    field: 'completed',
    headerName: 'Completed',
    width: 80,
    type: 'boolean',
  },
  {
    field: 'assignedResources',
    headerName: 'Assigned Resources',
    width: 200,
  },
];

const rows = [
  { id: 1, projectName: 'Project 1', description: 'First Project', allocation:20, requiredResources:4, completed: false, assignedResources: 'Stone'  },
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
