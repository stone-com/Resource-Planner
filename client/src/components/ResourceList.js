import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  ChipField,
  ReferenceManyField,
  SingleFieldList,
  useRecordContext,
} from 'react-admin';
import { Line } from 'rc-progress';
// custom progress bar component using Line component, getting record context availability value and passing it in as percent to Line component
const ProgressBarField = () => {
  const record = useRecordContext();
  return (
    <Line percent={record.availability} strokeWidth='5' strokeColor='#38bcd5' />
  );
};
const ResourceList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid isRowSelectable={(record) => !record}>
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
        <ProgressBarField label='Capacity' />
        <DeleteButton basePath='/resources' />
      </Datagrid>
    </List>
  );
};

export default ResourceList;
