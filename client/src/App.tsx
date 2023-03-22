import React, { Component, ComponentState } from 'react';
import reactLogo from './assets/react.svg';
import { Button} from "antd";
import './App.css';

interface MyComponentState{
  count: number;
}

class MyComponent extends Component<{},MyComponentState> {
  constructor(props:any) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
    <>
        <div>🌊</div>
        <div>🦦</div>
        <div>🌊</div>
    </>

      // <div>
      //   <p>Count: {this.state.count}</p>
      //   <button onClick={this.handleButtonClick}>Increment</button>
      //   <br />
      //   <br />
      //   <Button className='rounded-[1rem]' type='primary'>Test</Button>
      // </div>
    );
  }
}

export default MyComponent;
