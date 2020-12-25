import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { getEventDataReducer } from '../../store/selectors/selectors';

const styles = (theme) =>
  createStyles({
    box: {
      padding: theme.spacing(1, 2),
    },
    padding: {
      padding: theme.spacing(0, 2),
    },
  });

const EventHeader = ({ classes }) => {
  if (window && window !== window.top) {
    return null;
  }
  const { title, date, address } = useSelector(getEventDataReducer);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Box className={classes.box}>
          <Typography variant="h4">{title}</Typography>
        </Box>
      </Grid>
      <Grid item container justify="center" alignItems="flex-end" direction="column">
        <Grid item>
          <Box className={classes.padding}>
            <Typography variant="h5">{date}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.padding}>
            <Typography variant="caption">{address}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(EventHeader);
