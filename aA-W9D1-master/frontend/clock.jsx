import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  } 


  render() {
    let time = this.state.date;
    // time.toLocale​Time​String();

    return <div className="clock-box">
            <h1>Time: </h1>
            <h1>{time.toLocaleTimeString()}</h1>
            <h1>Date:</h1>
            <h1>{time.toLocaleDateString()}</h1>
          </div>
  }

  tick() {
      this.setState({date: new Date()});
  }

  componentDidMount() {
    this.lastInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.lastInterval);
  }
  
}









export default Clock;