import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  NumberField,
  ChipField,
  ReferenceArrayField,
  SingleFieldList,

} from 'react-admin';

const ProjectList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid>
        <TextField source='title' />
        <NumberField source='allocation' />
        <BooleanField source='completed' />
        <ReferenceArrayField
          label='Assigned Resources'
          reference='resources'
          source='assignedResources'
        >
          <SingleFieldList>
            <ChipField source='personName' />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton basePath='/projects' />
        <DeleteButton basePath='/projects' />
      </Datagrid>
    </List>
  );
};

export default ProjectList;
