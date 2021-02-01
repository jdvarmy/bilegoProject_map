import React from 'react';
import { useSelector } from 'react-redux';
import { Drawer } from '@material-ui/core';
import { getPayCardSelector } from '../../store/selectors/selectors';

const PayCard = () => {
  const { isCardOpen } = useSelector(getPayCardSelector);

  return (
    <Drawer open={isCardOpen} anchor="left">
      PayCard
    </Drawer>
  );
};

export default PayCard;
