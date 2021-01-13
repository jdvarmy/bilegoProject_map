import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getBasketSelector } from '../../store/selectors/selectors';
import Ticket from './Ticket';

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      height: 76,
    },
  }),
);

const Basket = () => {
  const classes = useStyles();
  const {
    basket: { isTicketInBasket },
    ticketsList,
  } = useSelector(getBasketSelector);
  console.log(ticketsList);

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
      <Box>
        {ticketsList.map((t, k) => (
          <Ticket ticket={t} key={k} />
        ))}
      </Box>
    </Drawer>
  );
};

export default Basket;
