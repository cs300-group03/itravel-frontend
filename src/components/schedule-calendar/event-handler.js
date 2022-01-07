import moment from 'moment';

const CalendarEventHandler = (function () {
  function addEvents (allEvents, newEvents) {
    for (const event of newEvents) {
      const time = moment(event.start).hours();
      const eventWithMeatInfo = {
        ...event,
        startWeek: moment(event.start).week(),
        endWeek: moment(event.end).week(),
      };
      if (allEvents[time]) {
        allEvents[time].push(eventWithMeatInfo);
      } else {
        allEvents[time] = [eventWithMeatInfo];
      }
    }
    return {...allEvents};
  }
  function addEvent (allEvents, newEvent) {
    const time = moment (newEvent.start).hours ();
    const eventWithMeatInfo = {
      ...newEvent,
      startWeek: moment (newEvent.start).week (),
      endWeek: moment (newEvent.end).week (),
    };
    if (allEvents[time]) {
      allEvents[time].push (eventWithMeatInfo);
    } else {
      allEvents[time] = [eventWithMeatInfo];
    }
    return {...allEvents};
  }

  function generateUniqueId({start, title, end}) {
    return start + title + end;
  }

  function deleteEvent (eventId, allEvents) {
    Object.keys (allEvents).forEach (time => {
      allEvents[time] = allEvents[time].filter (event => event.id !== eventId);
    });
    return {...allEvents};
  }

  function updateEvent (eventId, updatedEvent, allEvents) {
    Object.keys (allEvents).forEach (time => {
      allEvents[time] = allEvents[time].map (
        event => (event.id === eventId ? {...event, ...updatedEvent} : event)
      );
    });
    return {...allEvents};
  }

  return {
    add: addEvent,
    addMany: addEvents,
    delete: deleteEvent,
    update: updateEvent,
    generateId: generateUniqueId,
  };
}) ();

export default CalendarEventHandler;
