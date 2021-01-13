import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

function Ticket({ ticket }) {
  return (
    <Drawer open anchor="bottom" variant="persistent">
      {ticket.name}
    </Drawer>
  );
}

export default Ticket;
