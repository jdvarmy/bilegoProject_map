import React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getErrorSelector } from '../../store/selectors/selectors';

const styles = () =>
  createStyles({
    root: {
      flex: 'auto',
    },
  });

const Error = ({ classes }) => {
  const { message } = useSelector(getErrorSelector);

  return (
    <Box className={classes.root}>
      <Typography variant="h5">{message}</Typography>
    </Box>
  );
};

export default withStyles(styles)(Error);
