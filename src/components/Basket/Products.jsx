import React from 'react';
import { createStyles, makeStyles, styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Ticket } from './Ticket';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    row: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  }),
);

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

// eslint-disable-next-line import/prefer-default-export
export const Products = ({ ticketsList, count }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TicketContainer shift={140 * count}>
        <TicketTable shift={140 * count}>
          <Box className={classes.row}>
            {ticketsList.map((ticket, k) => (
              <Ticket key={k} ticket={ticket} count={count} number={k + 1} />
            ))}
          </Box>
        </TicketTable>
      </TicketContainer>
    </Box>
  );
};
