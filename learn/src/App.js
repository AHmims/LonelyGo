import React from 'react';
import { StateA, StateB } from './App2';
//

class ButtonA extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        button-A
      </button>
    );
  }
}

class ButtonB extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        button-B
      </button>
    );
  }
}

/*class Handler extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.state;
  }
  //
  render() {
    return (
      <div>
        <h2>test</h2>
        {(this.data) ? <StateA /> : <StateB />}
      </div>
    );
  }
}*/

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleBtnAClick = this.handleBtnAClick.bind(this);
    this.handleBtnBClick = this.handleBtnBClick.bind(this);
    this.state = {
      buttonState: false
    };
  }
  //
  handleBtnAClick() {
    this.setState({ buttonState: true });
  }
  handleBtnBClick() {
    this.setState({ buttonState: false });
  }
  //
  render() {
    const buttonState = this.state.buttonState;
    let button = buttonState ? <ButtonA onClick={this.handleBtnBClick} /> : <ButtonB onClick={this.handleBtnAClick} />;
    // this doesn't work WTF
    /*let handler = <Handler state={buttonState} />;
    console.log(handler);*/
    let testhmm = buttonState ? 69 : null;
    return (
      <div>
        {/* {handler} */}
        <div>
          <h2>test</h2>
          {(buttonState) ? <StateA /> : <StateB />}
        </div>
        {button}
        {
          buttonState &&
          <h5>bruh moment</h5>
        }
        {
          testhmm &&
          <h6>gharib</h6>
        }
        <WarningBanner warn={!buttonState} />
      </div>
    );
  }
}


export default Button;
