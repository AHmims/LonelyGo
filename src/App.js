import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
    //
    this.click = this.click.bind(this);
  }
  //
  click(e){
    console.log(e);
    this.setState((state, props)=>({
        counter: state.counter + parseInt(props.increment)
    }));
  }
  //
  render(){
    return (
      <button onClick={this.click}>Count is : {this.state.counter}</button>
    );
  }
}
// 
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
    //console.log(this.state);
  }
  //
  tick(){
    this.setState({
      date : new Date()
    });
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
        <Counter increment="1"/>
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
