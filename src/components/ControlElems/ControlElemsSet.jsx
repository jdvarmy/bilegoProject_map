import React, { useCallback, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addTicketToBasket, removeTicketFromBasket } from '../../store/actions/basket/basket-actions';
import { hidePop, showPop } from '../../store/actions/popup/popup-action';
import { WAIT, MAX_TICKETS_IN_BASKET } from '../../utils/utils';
// https://mui-treasury.com/styles/icon-button/
// import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    box: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      padding: theme.spacing(0, 3),
    },
  }),
);

// eslint-disable-next-line import/prefer-default-export
export const PlusMinusElementsSet = ({
  // eslint-disable-next-line camelcase
  ticket: { id, name, price_regular, seat_name, row_name, sector_name, type, stock },
  ticketInBasket,
  basket,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let timeout;

  const onClickCb = useCallback(
    (flag) => () => {
      if (flag) {
        if (
          (ticketInBasket ? ticketInBasket.stock > ticketInBasket.count : true) &&
          basket.count < MAX_TICKETS_IN_BASKET
        ) {
          dispatch(
            addTicketToBasket({
              id,
              name,
              price: price_regular,
              seat: seat_name,
              row: row_name,
              sector: sector_name,
              type,
              count: 1,
              stock,
            }),
          );
        } else {
          dispatch(showPop());
          timeout = setTimeout(() => {
            dispatch(hidePop());
          }, WAIT);
        }
      } else {
        dispatch(removeTicketFromBasket({ id }));
      }
    },
    [ticketInBasket, basket, dispatch],
  );

  useEffect(
    () => () => {
      clearTimeout(timeout);
    },
    [],
  );

  return (
    <div className={classes.root}>
      <IconButton onClick={onClickCb(true)} color="primary">
        <AddIcon />
      </IconButton>
      <Box display="inline" className={`${classes.root} ${classes.box}`}>
        <Typography variant="h6">{ticketInBasket ? ticketInBasket.count : 0}</Typography>
      </Box>
      <IconButton onClick={onClickCb(false)} color="primary">
        <RemoveIcon />
      </IconButton>
    </div>
  );
};
