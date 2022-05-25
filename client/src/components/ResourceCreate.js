import React from 'react';
import { Create, SimpleForm, TextInput, FileInput } from 'react-admin';
import { Container } from '@mui/material';

const ResourceCreate = (props) => {
  return (
    <Container>
      <Create {...props}>
        <SimpleForm>
          <TextInput source='personName' />
          {/* <FileInput />  CANT GET THSI TO WORK YET*/}
        </SimpleForm>
      </Create>
    </Container>
  );
};

export default ResourceCreate;
