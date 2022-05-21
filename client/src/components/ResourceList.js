import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  ChipField,
  ReferenceManyField,
  SingleFieldList,
  FunctionField,
  useRecordContext,
} from 'react-admin';
import { Line } from 'rc-progress';

const ProgressBarField = () => {
  const record = useRecordContext();
  return (
    <Line percent={record.availability} strokeWidth='5' strokeColor='#38bcd5' />
  );
};
const ResourceList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid isRowSelectable={false}>
        <TextField source='personName' label='Name' />
        <ReferenceManyField
          label='Current Projects'
          reference='projects'
          target='id'
        >
          <SingleFieldList>
            <ChipField source='name' />
          </SingleFieldList>
        </ReferenceManyField>
        <ProgressBarField label='Capacity'/>
        <DeleteButton basePath='/resources' />
      </Datagrid>
    </List>
  );
};

export default ResourceList;
