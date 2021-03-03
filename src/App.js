import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
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
    console.log(this.state.date);
    console.log(this);
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
      </div>
    );
  }
}
//

export default Timer;
