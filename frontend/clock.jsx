import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  formatTime(val) {
    return val < 10 ? `0${val}` : val;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {time} = this.state;
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const timezone = time.toLocaleString('en', {timeZoneName:'short'}).split(' ').pop();

    return (
      <div className="clock">
        <h1>Clock</h1>

        <div>
          <div className="wrapper">
            <h2>Time</h2>
            <span>
              { this.formatTime(hours) }:
              { this.formatTime(mins) }:
              { this.formatTime(secs) }
              { timezone }
            </span>
          </div>
          <div className="wrapper">
            <h2>Date</h2>
            <span>
              { time.toDateString() }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;