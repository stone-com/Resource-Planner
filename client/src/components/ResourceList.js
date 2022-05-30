import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataContext } from '../contexts/DataContext';

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
  // pull in resource state from context
  const { resources} = useContext(DataContext);
  let rows = [];
  // loop through arra of resources, create object with values for resource, then push to rows array for datagrid
  for (let i = 0; i < resources.length; i++) {
    let resource = resources[i];
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
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </div>
  );
}
