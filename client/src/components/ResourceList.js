import React from 'react';
import { GETALL_RESOURCES } from '../utils/queries';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import ProjectButton from './ProjectButton';

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
    width: 150,
  },
];

export default function ResourceList() {
  let rows = [];
  // query all resources
  const { loading, error, data } = useQuery(GETALL_RESOURCES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  let resourceArray = data.getAllResources;
  // loop through arra of resources, create object with values for resource, then push to rows array for datagrid
  for (let i = 0; i < resourceArray.length; i++) {
    let resource = resourceArray[i];
    // console.log(`resource number ${i}:`, resource);
    rows.push({
      id: i,
      name: resource.personName,
      availability: resource.availability,
      assignedProjects: resource.assignedProjects,
    });
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection = {false}
        disableSelectionOnClick
      />
    </div>
  );
}
