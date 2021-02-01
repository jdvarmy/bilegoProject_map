import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { feetchEventAsync } from '../../store/actions/event/event-actions';
import { getErrorSelector } from '../../store/selectors/selectors';
import Error from '../../components/Error/Error';
import Tickets from '../../components/Tickets/Tickets';
import Loading from '../../components/Loading/Loading';
import EventHeader from '../../components/Headers/EventHeader';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';
import PayCard from '../../components/PayCard/PayCard';

const useStyles = makeStyles({
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});

const Event = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(getErrorSelector);
  const classes = useStyles();

  const requestData = useCallback(() => {
    dispatch(feetchEventAsync.request());
  }, [dispatch]);

  useEffect(() => {
    requestData();
  }, [requestData]);

  console.log('render event');

  const render = useCallback(() => {
    switch (error) {
      case -1:
        return <Loading />;
      case 0:
        return (
          <Fade in>
            <Box className={classes.box}>
              <EventHeader />
              <Tickets />
              <Footer />
              <Basket />
              <PayCard />
            </Box>
          </Fade>
        );
      case 1:
        return (
          <>
            <Box className={classes.box}>
              <Error />
              <Footer />
            </Box>
          </>
        );
      default:
        return <Loading />;
    }
  }, [error]);

  return <>{render()}</>;
};

export default Event;
