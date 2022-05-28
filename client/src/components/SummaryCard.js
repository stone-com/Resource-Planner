import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// card component, with icon, title, and description props passed in to render the summaries on the dash board.
export default ({ icon, title, number }) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      {/* If icon prop is passed, render icon, otherwise, number */}
      {/* Used mainly just for the progress circle in first card. */}
      {icon ? icon : number}
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' textAlign='center'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
