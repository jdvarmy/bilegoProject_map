import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getEventDataReducer } from '../../store/selectors/selectors';

const EventHeader = () => {
  if (window && window !== window.top) {
    return null;
  }
  const { title, date, address } = useSelector(getEventDataReducer);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item container justify="center" alignItems="flex-end" direction="column">
        <Grid item>
          <Typography variant="h5">{date}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{address}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventHeader;
