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
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// custom progress bar component using Line component, getting record context availability value and passing it in as percent to Line component
const ProgressBarField = () => {
  const record = useRecordContext();
  console.log('record:' , record)
  return (
    <Line percent={record.availability} strokeWidth='5' strokeColor='#70cc45' />
  );
};

// custom field to display avatar/image field. if there is an image, it will display, else dispay default
const AvatarField = () => {
  const record = useRecordContext();
  if (record.photo) {
    return <Avatar src={<Image src={record.photo} style={{ width: 32 }} />} />;
  } else {
    return (
        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} />
    );
  }
};
const ResourceList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid isRowSelectable={(record) => !record}>
          <AvatarField />
        <TextField source='personName' label='Name' />
        <ReferenceManyField
          label='Current Projects'
          reference='projects'
          target='id'
        >
          <SingleFieldList>
            <ChipField source='' />
          </SingleFieldList>
        </ReferenceManyField>
        <ProgressBarField label='Capacity' />
        <DeleteButton basePath='/resources' label='' />
      </Datagrid>
    </List>
  );
};

export default ResourceList;
