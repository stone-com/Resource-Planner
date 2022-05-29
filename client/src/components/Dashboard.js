import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import SummaryCard from './SummaryCard';
import ProgressRing from './ProgressRing';
import { useContext } from 'react';
import SummaryNumber from './SummaryNumber';
import ResourceList from './ResourceList';
import ProjectList from './ProjectList';
import ProjectButton from './ProjectButton';

const Dashboard = ({}) => {
  // declare state for projects and resources.
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);

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
        <ProjectButton />
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
