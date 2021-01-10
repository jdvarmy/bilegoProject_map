import React from 'react';
import { useSelector } from 'react-redux';
import { getEventSelector } from '../../store/selectors/selectors';
import { TICKET_TYPE_SET } from '../../utils/utils';
import Set from './Set/Set';

const Tickets = () => {
  const {
    tickets: { type, tickets },
  } = useSelector(getEventSelector);

  console.log(tickets);
  return type === TICKET_TYPE_SET && <Set tickets={tickets || []} />;
};

export default Tickets;
