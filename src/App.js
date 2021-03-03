import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      date2:new Date()
    };
  }
  //
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  componentDidUpdate(){
    // console.log(this.state.date);
    // console.log(this.state);
  }
  //
  tick(){
    this.setState({
      date : new Date()
    });
  }
  //
  render(){
    return (
      <div>
        <h3>
          {this.state.date.toLocaleTimeString()}
        </h3>
        <h3>
          {this.state.date2.toLocaleTimeString()}
        </h3>
      </div>
    );
  }
}
//

export default Timer;
