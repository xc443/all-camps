// import React,{Component} from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import { Calendar } from '@fullcalendar/core';
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// // import resourceTimelinePlugin from '@fullcalendar/resource-timeline'


// import './main.scss' // webpack must be configured to do this
// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
  
//     var calendar = new Calendar(calendarEl, {
//       plugins: [ dayGridPlugin ]
//     });
  
//     calendar.render();
//   });
// let calendar = new Calendar(calendarEl, {
//     plugins: [ interactionPlugin, dayGridPlugin ],
//     defaultView: 'dayGridMonth',
//     selectable: true
//   });
// export default class Scheduler extends Component {

//   render() {
   
//     return (
//     <div>
//     <FullCalendar dateClick={this.handleDateClick} plugins={[ dayGridPlugin, interactionPlugin ]} />
//       {/* <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} /> */}
//       </div>
//     )
//   }
  



//   handleDateClick = (arg) => { // bind with an arrow function
//     alert(arg.dateStr)
//   }



// }




import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./styles.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { Calendar } from "@fullcalendar/core";

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date()}
    ]
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          {/* <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event) */}
        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  // gotoPast = () => {
  //   let calendarApi = this.calendarComponentRef.current.getApi();
  //   calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  // };

  handleDateClick = arg => {
    // if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {

      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay,
        })
      });
    
 

  

  };
}
