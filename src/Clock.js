import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
      const clockDiv = {
        display: 'flex',
        fontSize: '4.4vw',
        textDecoration: 'underline',
        marginLeft: '.5%'
      }
      const whiteText = {
          color: 'white',
          textDecoration: 'underline white'
      }
    return (
      <div style={clockDiv}>
        <div className="Clock-days">
            <span style={whiteText}>{this.leading0(this.state.days)}</span> Days &nbsp;
        </div>
        <div className="Clock-hours">
          <span style={whiteText}>{this.leading0(this.state.hours)}</span> Hours &nbsp;
        </div>
        <div className="Clock-minutes">
          <span style={whiteText}>{this.leading0(this.state.minutes)}</span> Minutes &nbsp;
        </div>
        <div className="Clock-seconds">
          <span style={whiteText}>{this.leading0(this.state.seconds)}</span> Seconds
        </div>
      </div>
    );
  }
}
export default Clock;