import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return(
    <div>
      {props.ticketList.map((ticket) =>
        <Ticket
          location={ticket.location}
          names={ticket.names}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}
        />
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
