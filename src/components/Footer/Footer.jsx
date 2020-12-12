import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) =>
  createStyles({
    padding: {
      padding: theme.spacing(1, 2),
    },
  });

const Footer = ({ classes }) => (
  <Grid container>
    <Grid item xs={3}>
      <Box className={classes.padding}>
        <Typography variant="body2">one</Typography>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Box className={classes.padding}>
        <Typography variant="body2">one</Typography>
      </Box>
    </Grid>
    <Grid item xs={3}>
      <Box className={classes.padding}>
        <Typography variant="body2">one</Typography>
      </Box>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Footer);
