import React, { useContext } from 'react';
import { GETALL_PROJECTS } from '../utils/queries';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import { DataContext } from '../contexts/DataContext';

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

export default function ProjectList() {
  const { projects, setSelectedProject } = useContext(DataContext);
  let rows = [];
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    // console.log('project rray 1', project);
    rows.push({
      id: i,
      projectName: project.title,
      description: project.description,
      allocation: project.allocation,
      requiredResources: project.requiredResNumber,
      completed: false,
      assignedResources: project.assignedResources,
      createdAt: project.createdAt,
      _id: project._id,
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
        onSelectionModelChange={(checked) => {
          const selection = rows.filter((row) => checked[0] === row.id);
          console.log(selection[0]);
          setSelectedProject(selection);
        }}
      />
    </div>
  );
}
