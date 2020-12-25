import React from 'react';
import { useSelector } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  const { tickets } = useSelector(getEventReducer);

  console.log(tickets);
  return (
    <Grid className={classes.root} container>
      <Grid item container direction="column" justify="center" alignItems="center">
        {tickets.tickets.map((ticket) => (
          <Grid item container key={ticket.id} alignItems="center">
            <Grid item width={144}>
              <Box className={classes.box}>
                <PlusMinusElementsSet ticket={ticket} />
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.box}>
                <Typography variant="h5">{ticket.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.box}>3</Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.box}>4</Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Tickets);
