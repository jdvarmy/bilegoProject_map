import React from 'react';
import Typography from '@material-ui/core/Typography';

const EventHeader = () => {
  if (window && window !== window.top) {
    return null;
  }
  return <Typography variant="h5">EventHeader</Typography>;
};

export default EventHeader;
