import { Container, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import SummaryCard from './SummaryCard';
import ResourceList from './ResourceList';
import ProjectList from './ProjectList';
import ProjectButton from './ProjectButton';
import EditProjectButton from './EditProjectButton';
import SectionHeader from './SectionHeader';
import Navbar from './Navbar';
import ResourceButton from './ResourceButton';
import {
  getCapacity,
  getTotalResources,
  getHoursAvailable,
  getResourcesNeeded,
} from '../utils/cardfunctions';
import { DataContext } from '../contexts/DataContext';

const Dashboard = () => {
  // bring in projects and resources context
  const { projects, resources } = useContext(DataContext);
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={4} sx={{ marginTop: 1 }}>
          <Grid item xs={6} md={3}>
            <SummaryCard
              number={`${getCapacity(resources)}%`}
              title={'Total Capacity'}
              icon={'fa-battery-half'}
              color={'primary'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <SummaryCard
              number={getTotalResources(resources)}
              title={'Total Resources'}
              icon={'fa-user'}
              color={'danger'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <SummaryCard
              // number={getHoursAvailable(projects, resources)}
              number={4}
              title={'Hours Available'}
              icon={'fa-hourglass'}
              color={'success'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <SummaryCard
              number={getResourcesNeeded(projects, resources)}
              title={'Resources needed'}
              icon={'fa-user-plus'}
              color={'info'}
            />
          </Grid>
          <Grid item xs={12}>
            <SectionHeader title={'Projects'} editButton={<EditProjectButton />} addButton={<ProjectButton />} />
          </Grid>
          <Grid item xs={12}>
            <ProjectList />
          </Grid>
          <Grid item xs={12}>
            <SectionHeader title={'Resources'} addButton={<ResourceButton />} />
          </Grid>
          <Grid item xs={12}>
            <ResourceList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
