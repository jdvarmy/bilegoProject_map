import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { getEventDataReducer } from '../../store/selectors/selectors';

const styles = (theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  });

const EventHeader = ({ classes }) => {
  if (window && window !== window.top) {
    return null;
  }
  const { title, date, address } = useSelector(getEventDataReducer);
  console.log(title, date, address);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography variant="h5">{date}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{address}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(EventHeader);
