import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';

const styles = (theme) =>
  createStyles({
    root: {
      width: '100%',
      color: theme.palette.text.disabled,
    },
    padding: {
      padding: theme.spacing(1, 2),
      display: 'flex',
    },
    flexEnd: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },
    marginRight: {
      marginRight: theme.spacing(1),
    },
    link: {
      color: theme.palette.text.disabled,
      textDecoration: 'auto',
    },
  });

const Footer = ({ classes }) => (
  <Box className={classes.root}>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={3}>
        <Box className={classes.padding}>
          <Typography variant="caption">
            <a href="mailto:support@bilego.ru" className={classes.link}>
              Поддержка: support@bilego.ru
            </a>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.padding} />
      </Grid>
      <Grid item xs={3}>
        <Box className={`${classes.padding} ${classes.flexEnd}`}>
          <CopyrightIcon style={{ fontSize: 15 }} className={classes.marginRight} />
          <Typography variant="caption" display="inline">
            Bilego.ru
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default withStyles(styles)(Footer);
