import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Ticket } from './Ticket';

const Root = styled(Box)({
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  left: 360,
  zIndex: 10000,
});
const TicketContainer = styled(({ children, ...other }) => <Box {...other}>{children}</Box>)({
  marginTop: '-40px',
  marginLeft: 'auto',
  maxWidth: ({ shift }) => `${shift}px`,
});
const TicketTable = styled(({ children, ...other }) => <Box {...other}>{children}</Box>)({
  width: '100%',
  boxSizing: 'border-box',
  maxWidth: ({ shift }) => `${shift}px`,
});
const TicketRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});

// eslint-disable-next-line import/prefer-default-export
export const Products = ({ ticketsList, count }) => (
  <Root>
    <TicketContainer shift={140 * count}>
      <TicketTable shift={140 * count}>
        <TicketRow>
          {ticketsList.map((ticket, k) => (
            <Ticket key={k} ticket={ticket} count={count} number={k + 1} />
          ))}
        </TicketRow>
      </TicketTable>
    </TicketContainer>
  </Root>
);
