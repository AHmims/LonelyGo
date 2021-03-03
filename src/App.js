import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      counter : 0,
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
    console.log(this.state.counter);
  }
  //
  tick(){
    this.setState((state,props)=>({
      date : new Date(),
      counter:state.counter + parseInt(props.increment)
    }));
    /*this.setState(function(state, props) {
      return {
        counter: state.counter + props.increment
      };
    });*/
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
