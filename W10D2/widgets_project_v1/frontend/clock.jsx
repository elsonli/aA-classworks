import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();
    let day = this.state.date.getDay();
    let month = monthsOfTheYear[this.state.date.getMonth()];
    let year = this.state.date.getFullYear();
    let dayOfWeek = daysOfTheWeek[this.state.date.getUTCDay()];

    if (seconds.toString().length === 1) {
      seconds = "0" + seconds.toString();
    }

    if (hours > 12) {
      hours = hours % 12;
    }

    if (hours.toString().length === 1) {
      hours = "0" + hours.toString();
    }

    if (day.toString().length === 1) {
      day = "0" + day.toString();
    }

    return (
      <div>
        <div className="clock-widget">
          <div className="clock">
            <h1>Time:</h1> 
            <h1>{hours}:{minutes}:{seconds} PDT</h1>
          </div>
          <div className="date">
            <h1>Date:</h1> 
            <h1>{dayOfWeek} {month} {day} {year}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;