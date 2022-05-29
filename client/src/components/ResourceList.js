import React from 'react';
import { GETALL_RESOURCES } from '../utils/queries';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';

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
    field: 'assignedResources',
    headerName: 'Assigned resources',
    width: 150,
  },
];

// const rows = [
//   { id: 1, name: 'Stone', availability: '100%' },
//   { id: 2, name: 'Namees', availability: '100%' },
//   { id: 3, name: 'Mike', availability: '100%' },
//   { id: 4, name: 'Cheng', availability: '100%' },
//   { id: 5, name: 'Brian', availability: '100%' },
//   { id: 6, name: 'Ali', availability: '100%' },
//   { id: 7, name: 'Zakk', availability: '100%' },
// ];

export default function ResourceList() {
  let rows = [];

  const { loading, error, data } = useQuery(GETALL_RESOURCES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  let resourceArray = data.getAllResources;
  for (let i = 0; i < resourceArray.length; i++) {
    let resource = resourceArray[i];
    console.log(`resource number ${i}:`, resource);
    rows.push({
      id: i,
      name: resource.personName,
      availability: resource.availability,
      assignedResources: resource.assignedResources,
    });
  }

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
