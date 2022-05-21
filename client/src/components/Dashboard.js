import DashboardHeader from './DashboardHeader';
import { Container, Grid } from '@mui/material';
import ProjectList from './ProjectList';
import { Resource } from 'react-admin';
import SummaryCard from './SummaryCard';

export default () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DashboardHeader />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard />
      </Grid>
      <Grid item xs={3}>
        <SummaryCard />
      </Grid>
    </Grid>

    <Resource name='projects' list={ProjectList} />
  </Container>
);
