import { Container, Grid } from '@mui/material';

import SummaryCard from './SummaryCard';
import ProgressRing from './ProgressRing';

import SummaryNumber from './SummaryNumber';
import ProjectList from './ProjectList';
const Dashboard = () => {
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
      </Grid>
    </Container>
  );
};

export default Dashboard;
