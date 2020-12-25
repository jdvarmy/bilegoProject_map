import React, { useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketReducer } from '../../store/selectors/selectors';
import { addTicketToBasket, removeTicketFromBasket } from '../../store/actions/basket/basket-actions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
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
  ticket: { id, name, price_regular, seat_name, row_name, sector_name, type },
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { basket } = useSelector(getBasketReducer);
  const currentTicket = basket.find((ticket) => ticket.id === id);

  const onClickCb = useCallback(
    (flag) => () => {
      if (flag) {
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
          }),
        );
      } else {
        dispatch(removeTicketFromBasket(id));
      }
    },
    [currentTicket, basket, dispatch],
  );

  return (
    <div className={classes.root}>
      <IconButton onClick={onClickCb(true)} color="primary">
        <AddIcon />
      </IconButton>
      <Box display="inline" className={`${classes.root} ${classes.box}`}>
        <Typography variant="h6">{currentTicket ? currentTicket.count : 0}</Typography>
      </Box>
      <IconButton onClick={onClickCb(false)} color="primary">
        <RemoveIcon />
      </IconButton>
    </div>
  );
};
