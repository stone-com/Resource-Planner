import { Container, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import SummaryCard from './SummaryCard';
import ResourceList from './ResourceList';
import ProjectList from './ProjectList';
import ProjectButton from './ProjectButton';
import SectionHeader from './SectionHeader';
import Navbar from './Navbar';
import ResourceButton from './ResourceButton';
import { getCapacity } from '../utils/cardfunctions';
import { DataContext } from '../contexts/DataContext';

const Dashboard = () => {
  // bring in projects and resources context
  const { projects, resources } = useContext(DataContext);
  console.log(getCapacity(resources));
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
              number={3}
              title={'Total Resources'}
              icon={'fa-user'}
              color={'danger'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <SummaryCard
              number={12}
              title={'Hours Available'}
              icon={'fa-hourglass'}
              color={'success'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <SummaryCard
              number={3}
              title={'Resources needed'}
              icon={'fa-user-plus'}
              color={'info'}
            />
          </Grid>
          <Grid item xs={12}>
            <SectionHeader title={'Projects'} addButton={<ProjectButton />} />
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
