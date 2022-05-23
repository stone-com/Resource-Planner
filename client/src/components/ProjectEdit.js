import React from 'react';
import {
  useGetList,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  SelectArrayInput,
} from 'react-admin';
import { Container } from '@mui/material';

const ProjectEdit = (props) => {
  // get list of resources, will be used for select element options in the form
  const { data, isLoading, error } = useGetList('resources', {
    pagination: { page: 1, perPage: 10 },
  });
  if (isLoading) {
    return <p>LOADING</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  console.log('data:', data);
  const resources = data.map((data) => {
    return { key: data.id, id: data.id, name: data.personName };
  });
  console.log(props);
  return (
    <Container>
      <Edit
        title='Edit project'
        {...props}
        
      >
        <SimpleForm>
          <TextInput disabled source='title'  />
          <TextInput source='description'  />
          <NumberInput source='allocation'  />
          <NumberInput source='requiredResources'  />
          <DateInput
            disabled
            label='Start Date'
            source='createdAt'
            
          />
          <SelectArrayInput
            label='Resources'
            source='assignedResources'
            // pass in choices array to choices for select
            choices={resources}
            
          />
        </SimpleForm>
      </Edit>
    </Container>
  );
};

export default ProjectEdit;
