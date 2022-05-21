import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const ResourceList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
          <TextField source='title' />
          <TextField source='allocation' />
          <TextField source='completed' />
          <EditButton basePath='/resources' />
          <DeleteButton basePath='/resources' />
      </Datagrid>
    </List>
  );
};

export default ResourceList;
