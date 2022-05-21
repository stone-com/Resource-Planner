import DashboardHeader from './DashboardHeader';
import TotalCapacity from './ProgressRing';
import { Container } from '@mui/material';
import ProjectList from './ProjectList';
import { Resource } from 'react-admin';

export default () => (
  <Container>
    <div>
      <DashboardHeader />
    </div>
    <div>
      <TotalCapacity />
    </div>
    <Resource name='projects' list={ProjectList} />
  </Container>
);
