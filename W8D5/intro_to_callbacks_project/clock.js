class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(
      this.date.toLocaleTimeString().replace(/\s[A|P]M/, '')
    );
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.date.setSeconds(this.date.getSeconds() + 1);
    this.printTime();
  }

}

const clock = new Clock();




