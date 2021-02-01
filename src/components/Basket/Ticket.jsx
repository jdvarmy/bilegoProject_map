import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    ticketBox: {
      width: ({ shift }) => `${shift}%`,
      '&:hover': {
        zIndex: 10001,
      },
      '&>div': {
        '&:hover': {},
      },
    },
  }),
);

const Wrapper = styled(({ children, ...other }) => <Box {...other}>{children}</Box>)({
  width: ({ shift }) => `${shift}%`,
  position: 'relative',
  boxSizing: 'border-box',
  display: 'inline-block',
});
const Container = styled(({ children, ...other }) => <Box {...other}>{children}</Box>)({
  margin: '-13px -13px -13px 0',
  minHeight: '90px',
  width: '152px',
  position: 'absolute',
  top: 0,
  right: ({ shift }) => `${shift}px`,
  boxSizing: 'content-box',
  // background: ${$css.colors.white};
  borderWidth: '1px 1px 0',
  borderStyle: 'solid solid solid',
  borderColor: 'red',
  // border-image: initial;
  borderBottom: 0,
  padding: '12px 24px',
  transition: 'all 130ms cubic-bezier(0,0,0.88,1) 0s',
  '&:hover': {
    marginTop: '-29px',
    zIndex: 1,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const Ticket = ({ ticket, count, number }) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles({ shift: 100 / count });
  const shift = number === 1 ? 12 : 12 * number - (count * number * 12) / 2;

  return (
    <Wrapper shift={100 / count}>
      <Container shift={shift}>
        <Typography variant="body2">{`ряд ${ticket.row}, место ${ticket.seat}`}</Typography>
        <Typography variant="caption">{ticket.sector}</Typography>
        <Typography variant="caption">{ticket.name}</Typography>
        <Typography variant="caption">{ticket.price}</Typography>
      </Container>
    </Wrapper>
  );
};
