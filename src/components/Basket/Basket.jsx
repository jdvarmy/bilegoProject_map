import React from 'react';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getBasketSelector } from '../../store/selectors/selectors';

const Basket = () => {
  const {
    basket: { isTicketInBasket },
  } = useSelector(getBasketSelector);
  console.log(isTicketInBasket);
  return (
    <Divider open anchor="bottom">
      <Box>
        <Typography variant="h6">hello</Typography>
      </Box>
    </Divider>
  );
};

export default Basket;
