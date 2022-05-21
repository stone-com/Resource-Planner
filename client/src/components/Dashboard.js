import DashboardHeader from './DashboardHeader';
import { Container, Grid } from '@mui/material';
import ProjectList from './ProjectList';
import ResourceList from './ResourceList';
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DashboardHeader title={'Summary'} />
        </Grid>
        <Grid item xs={6} md={3}>
          <SummaryCard icon={<ProgressRing />} title={'Total Capacity'} />
        </Grid>
        <Grid item xs={6} md={3}>
          <SummaryCard
            icon={<SummaryNumber number={data.length} />}
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
          <DashboardHeader title={'Projects'} />
          <Resource name='projects' list={ProjectList} create={ProjectCreate} />
        </Grid>
        <Grid item xs={12}>
          <DashboardHeader title={'Resources'} />
          <Resource name='resources' list={ResourceList} create={ProjectCreate} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
