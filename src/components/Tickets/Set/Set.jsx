import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import { PlusMinusElementsSet } from '../../ControlElems/ControlElemsSet';
import { wordEnding, WORDS_TICKETS, WALLET_RUS } from '../../../utils/utils';
import { getBasketSelector } from '../../../store/selectors/selectors';

const styles = (theme) =>
  createStyles({
    root: {
      flex: 'auto',
    },
    box: {
      padding: theme.spacing(2),
    },
    flexBox: {
      display: 'flex',
      alignItems: 'baseline',
      '& > :first-child': {
        paddingRight: theme.spacing(1),
      },
    },
    typography: {
      color: theme.palette.text.disabled,
    },
    fullWidth: {
      width: '100%',
    },
    scroll: {
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  });

const Set = ({ classes, tickets }) => {
  const { basket } = useSelector(getBasketSelector);

  return (
    <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
      <Grid item className={classes.fullWidth}>
        <Scrollbars style={{ height: 485 }} className={classes.scroll}>
          {tickets.map((ticket) => {
            const ticketInBasket = basket.tickets.find((t) => t.id === ticket.id);
            const countCurTicketInBasket = ticketInBasket ? ticketInBasket.count : 0;
            return (
              <Grid item container key={ticket.id} alignItems="center">
                <Grid item width={144}>
                  <Box className={classes.box}>
                    {/* eslint-disable-next-line max-len */}
                    <PlusMinusElementsSet ticket={ticket} basket={basket} ticketInBasket={ticketInBasket} />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box className={classes.box}>
                    <Typography variant="h5">{ticket.name}</Typography>
                  </Box>
                </Grid>
                <Hidden smDown>
                  <Grid item xs={2}>
                    <Box className={classes.box}>
                      <Typography className={classes.typography} variant="caption">
                        {`доступно ${ticket.stock - countCurTicketInBasket} ${wordEnding(
                          ticket.stock - countCurTicketInBasket,
                          WORDS_TICKETS,
                        )}`}
                      </Typography>
                    </Box>
                  </Grid>
                </Hidden>
                <Grid item container xs={2} justify="flex-end">
                  <Box className={`${classes.box} ${classes.flexBox}`}>
                    <Typography variant="h6">{`${ticket.price_regular}`}</Typography>
                    <Typography variant="caption">{`${WALLET_RUS}`}</Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Scrollbars>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Set);
