import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getBasketSelector } from '../../store/selectors/selectors';

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
        {
          // делаем карусель билетов, элемент билета вынести в отдельный файл
        }
        <Typography variant="h6">hello</Typography>
      </Box>
    </Drawer>
  );
};

export default Basket;
