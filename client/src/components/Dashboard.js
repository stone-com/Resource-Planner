import DashboardHeader from './DashboardHeader';
import { Container, Grid } from '@mui/material';
import ProjectList from './ProjectList';
import { Resource } from 'react-admin';
import SummaryCard from './SummaryCard';
import ProgressRing from './ProgressRing';
import ProjectCreate from './ProjectCreate';

export default () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DashboardHeader />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard
          icon=<ProgressRing />
          title='Total Capacity'
          description={'Description'}
        />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard
          icon=<ProgressRing />
          title='Total Capacity'
          description={'Description'}
        />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard
          icon=<ProgressRing />
          title='Total Capacity'
          description={'Description'}
        />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard
          icon=<ProgressRing />
          title='Total Capacity'
          description={'Description'}
        />
      </Grid>
    </Grid>
    <Resource name='projects' list={ProjectList} create={ProjectCreate} />
  </Container>
);
