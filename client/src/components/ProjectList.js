import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  NumberField
} from 'react-admin';

const ResourceList = (props) => {
  return (
    <List {...props}>
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

export default ResourceList;
