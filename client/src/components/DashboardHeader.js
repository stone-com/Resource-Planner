import { Card, CardHeader } from '@mui/material';

export default ({title}) => (
  <Card style={{width:'fit-content', margin: 'auto'}}>
    <CardHeader title={title} />
  </Card>
);
