import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import SummaryCard from './SummaryCard';
import ProgressRing from './ProgressRing';
import { GETALL_PROJECTS, GETALL_RESOURCES } from '../utils/queries';
import SummaryNumber from './SummaryNumber';
import ResourceList from './ResourceList';
import ProjectList from './ProjectList';
import { useQuery, gql } from '@apollo/client';

const Dashboard = () => {
  // declare state for projects and resources.
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);
  // query the projects and resources
  const {
    data: resourcesData,
    error: resourceError,
    loading: resourceLoading,
  } = useQuery(GETALL_RESOURCES);
  const {
    data: projectsData,
    error: projectError,
    loading: projectLoading,
  } = useQuery(GETALL_PROJECTS);
  if (resourceLoading || projectLoading) return 'Loading...';
  if (resourceError || projectError)
    return projectError.message || resourceError.message;
  // set state to the results returned from query
  setResources(resourcesData);
  setProjects(projectsData);

  console.log(resources);
  console.log(projects);
  return (
    <Container>
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        <Grid item xs={6} md={3}>
          <SummaryCard icon={<ProgressRing />} title={'Total Capacity'} />
        </Grid>
        <Grid item xs={6} md={3}>
          <SummaryCard
            icon={<SummaryNumber number={3} />}
            title={'Total Resources'}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <SummaryCard
            icon={<SummaryNumber number={12} />}
            title={'Hours Available'}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <SummaryCard
            icon={<SummaryNumber number={3} />}
            title={'Resources needed'}
          />
        </Grid>
        <Grid item xs={12}>
          <ProjectList />
        </Grid>
        <Grid item xs={12}>
          <ResourceList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
