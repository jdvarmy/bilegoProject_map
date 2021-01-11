import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { addTicketToBasket, removeTicketFromBasket } from '../actions/basket/basket-actions';

const initialState = {
  tickets: [],
  count: 0,
  isTicketInBasket: false,
};

const basket = createReducer(initialState)
  .handleAction(addTicketToBasket, (state, action) => {
    const findTicket = state.tickets.findIndex((ticket) => ticket.id === action.payload.id);
    if (findTicket !== -1) {
      // eslint-disable-next-line no-param-reassign,operator-assignment
      state.tickets[findTicket].count = state.tickets[findTicket].count + 1;
    } else {
      state.tickets.push(action.payload);
    }
    return {
      ...state,
      count: state.tickets.reduce((acc, val) => acc + val.count, 0),
      isTicketInBasket: true,
    };
  })
  .handleAction(removeTicketFromBasket, (state, action) => {
    const findTicket = state.tickets.findIndex((t) => t.id === action.payload.id);
    if (findTicket !== -1) {
      // eslint-disable-next-line no-param-reassign,operator-assignment
      state.tickets[findTicket].count = state.tickets[findTicket].count - 1;
      if (state.tickets[findTicket].count <= 0) {
        state.tickets.splice(findTicket, 1);
      }
    }
    const count = state.tickets.reduce((acc, val) => acc + val.count, 0);
    return {
      ...state,
      count,
      isTicketInBasket: count > 0,
    };
  });

const ticketsList = createReducer([])
  .handleAction(addTicketToBasket, (state, action) => {
    state.push({ ...action.payload, count: 1 });
    return [...state];
  })
  .handleAction(removeTicketFromBasket, (state, action) => {
    if (action.payload.index) {
      state.splice(action.payload.index, 1);
    } else {
      const findTicket = state.indexOf((t) => t.id === action.payload.id);
      state.splice(findTicket, 1);
    }
    return [...state];
  });

const basketReducer = combineReducers({
  basket,
  ticketsList,
});

export default basketReducer;
