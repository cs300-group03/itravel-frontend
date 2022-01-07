import React, {Component} from 'react';
import WeekView from './weekView';
import CalendarEventHandler from './event-handler';
import store from '../../store';
import { ScheduleStatus } from '../../constant';
import { setTitle } from '../../store/schedule';
import { addActivity, fetchEvents } from '../../services';

class ScheduleCalendar extends Component {
  constructor (props) {
    super (props);
    this.schedule = store.getState().schedule.currentSchedule;
    this.user = store.getState().auth.user;
    this.canEdit = (this.schedule.creator._id === this.user._id);

    this.state = {
      events: {},
      //events: JSON.parse (localStorage.getItem ('events')) || {},
      title: store.getState().schedule.title,
    };

    // saving data to the local storage
    window.addEventListener ('beforeunload', () => {
      //localStorage.setItem ('events', JSON.stringify (this.state.events));
    });
  }

  async fetchActivity() {
    const response = await fetchEvents(this.schedule._id);
    this.setState({
      events: CalendarEventHandler.addMany({}, response),
    });
  }

  componentDidMount() {
    this.fetchActivity();
  }

  addNewEvent = async (event) => {
    await addActivity(this.schedule._id, store.getState().schedule.title, event.start, event.end);
    event = {
      ...event,
      title: store.getState().schedule.title,
      id: CalendarEventHandler.generateId (event),
    };
    this.setState (previousSate => ({
      events: CalendarEventHandler.add (previousSate.events, event),
    }));
    store.dispatch(setTitle(''));
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
          onEventDelete={this.deleteEvent}
          canEdit={this.canEdit}/>
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
