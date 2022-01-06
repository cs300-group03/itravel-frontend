import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';    

const ReactCalendar = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
};
render(<ReactCalendar/>,document.querySelector("#root"))
export default ReactCalendar;
