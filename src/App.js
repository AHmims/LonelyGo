import React from 'react';

class StateA extends React.Component{
  //
  render(){
    return(
      <h1>STATE A</h1>
    );
  }
}

class StateB extends React.Component{
  render(){
    return(
      <h1>STATE B</h1>
    );
  }
}

class Handler extends React.Component{
  constructor(props){
    super(props);
    this.data = props.state;
  }
//
  render(){
    return (
      <div>
        <h2>test</h2>
        {(this.data) ? <StateA /> : <StateB />}
      </div>
    );
  }
}
//

export default Handler;
