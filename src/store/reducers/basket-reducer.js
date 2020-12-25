import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { addTicketToBasket, removeTicketFromBasket } from '../actions/basket/basket-actions';

// const maxCountInBasket = 6;

const basket = createReducer([])
  .handleAction(addTicketToBasket, (state, action) => {
    const findTicket = state.findIndex((ticket) => ticket.id === action.payload.id);
    if (findTicket !== -1) {
      // eslint-disable-next-line no-param-reassign,operator-assignment
      state[findTicket].count = state[findTicket].count + 1;
    } else {
      state.push(action.payload);
    }
    return [...state];
  })
  .handleAction(removeTicketFromBasket, (state, action) => {
    const findTicket = state.findIndex((ticket) => ticket.id === action.payload);
    if (findTicket !== -1) {
      // eslint-disable-next-line no-param-reassign,operator-assignment
      state[findTicket].count = state[findTicket].count - 1;
      if (state[findTicket].count <= 0) {
        state.splice(findTicket, 1);
      }
    }
    return [...state];
  });

const basketReducer = combineReducers({
  basket,
});

export default basketReducer;
