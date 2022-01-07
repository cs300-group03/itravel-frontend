import React, {Component} from 'react';
import WeekView from './weekView';
import CalendarEventHandler from './event-handler';
import { ThreeSixty } from '@mui/icons-material';

class ScheduleCalendar extends Component {
  constructor (props) {
    super (props);

    this.state = {
      events: JSON.parse (localStorage.getItem ('events')) || {},
    };

    // saving data to the local storage
    window.addEventListener ('beforeunload', () => {
      localStorage.setItem ('events', JSON.stringify (this.state.events));
    });

    this.canEdit = false; 
  }

  addNewEvent = event => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId (event),
    };
    this.setState (previousSate => ({
      events: CalendarEventHandler.add (previousSate.events, event),
    }));
  };

  updateEvent = (eventId, updatedEvent) => {
    this.setState (previousState => {
      return {
        events: CalendarEventHandler.update (
          eventId,
          updatedEvent,
          previousState.events
        ),
      };
    });
  };

  deleteEvent = eventId => {
    this.setState (previousState => {
      return {
        events: CalendarEventHandler.delete (eventId, previousState.events),
      };
    });
  };

  render () {
    const {events} = this.state;
    if (this.canEdit){
      return (
      <WeekView
          events={events}
          onNewEvent={this.addNewEvent}
          onEventUpdate={this.updateEvent}
          onEventDelete={this.deleteEvent}/>
      )
    }
    else {
      return (
        <WeekView events={events} canEdit={this.canEdit}/> 
      )
    }
  }
}

export default ScheduleCalendar;
