import React from 'react';
import { useGetList } from 'react-admin';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  NumberField,
} from 'react-admin';

const ProjectList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid>
        <TextField source='title' />
        <NumberField source='allocation' />
        <BooleanField source='completed' />
        <EditButton basePath='/resources' />
        <DeleteButton basePath='/resources' />
      </Datagrid>
    </List>
  );
};

export default ProjectList;
