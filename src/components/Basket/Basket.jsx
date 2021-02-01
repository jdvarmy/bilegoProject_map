import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getBasketSelector } from '../../store/selectors/selectors';
import { Products } from './Products';
import { showCard } from '../../store/actions/paycard/paycard';

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
  }),
);

const Basket = () => {
  const {
    basket: { isTicketInBasket, ticketsList, count },
  } = useSelector(getBasketSelector);
  const dispatch = useDispatch();
  const classes = useStyles({ shift: 140 * count });

  const handleShowPayCard = useCallback(() => {
    dispatch(showCard());
  }, [dispatch]);

  return (
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
            <Button variant="contained" color="primary" onClick={handleShowPayCard}>
              Купить билеты
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box className={`${classes.box} ${classes.drawerPaper} ${classes.flex}`}>
            <Typography variant="h4">1900</Typography>
          </Box>
        </Grid>
        <Grid>
          <Products ticketsList={ticketsList} count={count} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Basket;
