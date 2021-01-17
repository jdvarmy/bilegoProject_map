import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, styled } from '@material-ui/core/styles';
import { getBasketSelector } from '../../store/selectors/selectors';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawerPaper: {
      height: 76,
      overflow: 'hidden',
    },
    box: {
      display: 'flex',
      width: 180,
      padding: theme.spacing(2),
    },
    flex: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ticketContainer: {
      position: 'fixed',
      bottom: 0,
      left: 360,
      display: 'flex',
      flex: '1 0 auto',
      zIndex: 10000,
    },
    ticketBox: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1, 2),
    },
  }),
);

// eslint-disable-next-line react/jsx-props-no-spreading,max-len
const TicketBox = styled(({ color, index, children, ...other }) => <Box {...other}>{children}</Box>)({
  height: 144,
  width: 178,
  transform: 'translateY(20px)',
  '&:hover': {
    transform: 'translateY(0) scale(1.02)',
    zIndex: 10001,
  },
  border: (props) => `1px solid ${props.color}`,
});

const Basket = () => {
  const classes = useStyles();
  const {
    basket: { isTicketInBasket, ticketsList },
  } = useSelector(getBasketSelector);
  console.log(ticketsList);

  const { width, setWidth } = useState(window.innerWidth);
  console.log(width, setWidth);

  return (
    <>
      <Drawer
        open={isTicketInBasket}
        anchor="bottom"
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          hideBackdrop: true,
          disablePortal: true,
          disableEnforceFocus: true,
          disableBackdropClick: true,
          disableAutoFocus: true,
        }}
      >
        <Grid container>
          <Grid item>
            <Box className={`${classes.box} ${classes.drawerPaper}`}>
              <Button variant="contained" color="primary">
                Купить билеты
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box className={`${classes.box} ${classes.drawerPaper} ${classes.flex}`}>
              <Typography variant="h4">1900</Typography>
            </Box>
          </Grid>
          <Grid item xs />
        </Grid>
      </Drawer>
      {isTicketInBasket && (
        <Box className={classes.ticketContainer}>
          {ticketsList.map((ticket, k) => (
            <TicketBox color="blue" index={k} key={k} className={classes.ticketBox}>
              <Typography variant="body1">{ticket.name}</Typography>
            </TicketBox>
          ))}
        </Box>
      )}
    </>
  );
};

export default Basket;
