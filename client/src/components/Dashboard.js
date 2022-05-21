import DashboardHeader from './DashboardHeader';
import { Container, Grid } from '@mui/material';
import ProjectList from './ProjectList';
import { Resource } from 'react-admin';
import SummaryCard from './SummaryCard';
import ProgressRing from './ProgressRing';
import ProjectCreate from './ProjectCreate';
import SummaryNumber from './SummaryNumber';
import { useGetList } from 'react-admin';

const Dashboard = () => {
  // get  list of resources/workers
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

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DashboardHeader />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard
            icon={<ProgressRing />}
            title={'Total Capacity'}
            description={'Description'}
          />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard
            icon={<SummaryNumber number={data.length} />}
            title={'Total Resources'}
            description={'Description'}
          />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard
            icon={<SummaryNumber number={12} />}
            title={'Total Hours Available'}
            description={'Description'}
          />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard
            icon={<SummaryNumber number={3} />}
            title={'Resources needed'}
            description={'Description'}
          />
        </Grid>
      </Grid>
      <Resource name='projects' list={ProjectList} create={ProjectCreate} />
    </Container>
  );
};

export default Dashboard;
