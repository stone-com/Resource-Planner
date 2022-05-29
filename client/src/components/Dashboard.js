import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import SummaryCard from './SummaryCard';
import ResourceList from './ResourceList';
import ProjectList from './ProjectList';
import ProjectButton from './ProjectButton';
import SectionHeader from './SectionHeader';
import Navbar from './Navbar'
import ResourceButton from './ResourceButton';

const Dashboard = () => {
  // declare state for projects and resources.
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <>
    <Navbar />
    <Container>
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        <Grid item xs={6} md={3}>
          <SummaryCard
            number={'40%'}
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
          <SectionHeader title={'Resources'} addButton={<ResourceButton/>} />
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
