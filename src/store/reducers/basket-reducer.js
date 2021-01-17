import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { addTicketToBasket, removeTicketFromBasket } from '../actions/basket/basket-actions';

const initialState = {
  tickets: [],
  ticketsList: [],
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
    state.ticketsList.push({ ...action.payload, count: 1 });

    return {
      ...state,
      count: state.tickets.reduce((acc, val) => acc + val.count, 0),
      isTicketInBasket: true,
    };
  })
  .handleAction(removeTicketFromBasket, (state, action) => {
    const findTicket = state.tickets.findIndex((t) => t.id === action.payload.id);
    const findTicketList = state.ticketsList.map((t) => t.id).lastIndexOf(action.payload.id);
    if (findTicket !== -1) {
      // eslint-disable-next-line no-param-reassign,operator-assignment
      state.tickets[findTicket].count = state.tickets[findTicket].count - 1;
      if (state.tickets[findTicket].count <= 0) {
        state.tickets.splice(findTicket, 1);
      }
    }
    const count = state.tickets.reduce((acc, val) => acc + val.count, 0);
    if (findTicketList !== -1) {
      state.ticketsList.splice(findTicketList, 1);
    }

    return {
      ...state,
      count,
      isTicketInBasket: count > 0,
    };
  });

// const ticketsList = createReducer([])
//   .handleAction(addTicketToBasket, (state, action) => {
//     state.push({ ...action.payload, count: 1 });
//     return [...state];
//   })
//   .handleAction(removeTicketFromBasket, (state, action) => {
//     if (action.payload.index) {
//       console.log(3);
//       state.splice(action.payload.index, 1);
//     } else {
//       console.log(2);
//       const findTicket = state.indexOf((t) => t.id === action.payload.id);
//       state.splice(findTicket, 1);
//     }
//     return [...state];
//   });

const basketReducer = combineReducers({
  basket,
});

export default basketReducer;
