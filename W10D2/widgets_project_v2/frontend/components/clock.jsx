import React from "react";

class Clock extends React.Component {
  // Component Methods
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    this.daysOfTheWeek = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    };
    this.monthsOfTheYear = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec"
    }
  }
  
  render() {
    const seconds = this.state.time.getSeconds().toString().padStart(2, "0");
    const minutes = this.state.time.getMinutes().toString().padStart(2, "0");
    const hours = this.state.time.getHours().toString().padStart(2, "0");
    const weekday = this.daysOfTheWeek[this.state.time.getDay()];
    const day = this.state.time.getDate().toString().padStart(2, "0");
    const month = this.monthsOfTheYear[this.state.time.getMonth()].padStart(2, "0");
    const year = this.state.time.getFullYear();
    return (
      <div>
        <h1 className="clock-widget-header">Clock</h1>
        <div className="clock-widget">
          <section className="clock-widget-time">
            <h1>Time:</h1>
            <h1>{`${hours}:${minutes}:${seconds} PDT`}</h1>
          </section>
          <section className="clock-widget-date">
            <h1>Date:</h1>
            <h1>{`${weekday} ${month} ${day} ${year}`}</h1>
          </section>
        </div>
      </div>
    )
  }

  // Lifecycle Methods
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Other Methods
  tick() {
    this.setState({
      time: new Date()
    });
  }
}

export default Clock;