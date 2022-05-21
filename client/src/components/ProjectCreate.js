import React from 'react';
import {
  useGetList,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  SelectArrayInput,
} from 'react-admin';

const ProjectCreate = (props) => {
  // get list of resources, will be used for select element options in the form
  const { data } = useGetList('resources', {
    pagination: { page: 1, perPage: 10 },
  });
  console.log('data:',data);
  //   declare choices variable
  let choices = [];
    // push object with id and name into choices array for each resources
  data.forEach((data) => {
    choices.push({ id: data.id, name: data.personName });
  });

  return (
    <Create title='Add a project' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='description' />
        <NumberInput source='allocation' />
        <NumberInput source='requiredResources' />
        <DateInput label='Start Date' source='createdAt' />
        <SelectArrayInput
          label='Resources'
          source='assignedResources'
          // pass in choices array to choices for select
          choices={choices}
        />
      </SimpleForm>
    </Create>
  );
};

export default ProjectCreate;

