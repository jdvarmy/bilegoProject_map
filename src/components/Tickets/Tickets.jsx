import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { getEventReducer } from '../../store/selectors/selectors';

const styles = () =>
  createStyles({
    root: {
      flex: 'auto',
    },
  });

const Tickets = ({ classes }) => {
  const event = useSelector(getEventReducer);

  console.log(event);
  return (
    <Box className={classes.root}>
      <Typography variant="h5">Tickets</Typography>
    </Box>
  );
};

export default withStyles(styles)(Tickets);
