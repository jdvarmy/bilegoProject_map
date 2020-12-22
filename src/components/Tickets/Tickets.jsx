import React from 'react';
import { useSelector } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { getEventReducer } from '../../store/selectors/selectors';
import { PlusMinusElementsSet } from '../ControlElems/ControlElemsSet';

const styles = (theme) =>
  createStyles({
    root: {
      flex: 'auto',
    },
    box: {
      padding: theme.spacing(1, 2),
    },
  });

const Tickets = ({ classes }) => {
  const event = useSelector(getEventReducer);

  console.log(event);
  return (
    <Grid className={classes.root} container>
      <Grid item container direction="column" justify="center" alignItems="center">
        <Grid item container>
          <Grid item xs={3}>
            <Box className={classes.box}>
              <PlusMinusElementsSet />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box className={classes.box}>2</Box>
          </Grid>
          <Grid item xs={2}>
            <Box className={classes.box}>3</Box>
          </Grid>
          <Grid item xs={2}>
            <Box className={classes.box}>4</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Tickets);
