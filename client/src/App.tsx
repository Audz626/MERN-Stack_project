import React, { Component, ComponentState } from 'react';
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
      <div className='container p-[10rem]'>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increment</button>
        <div className="flex flex-col h-16">
  <p className="overflow-hidden overflow-ellipsis">
    This is a long text that will be truncated after a certain number of lines.
  </p>
</div>
        <br />
        <br />
        <Button className='rounded-[1rem]' type='primary'>Test</Button>
      </div>
    );
  }
}

export default MyComponent;

    // <>
    //     <div>🌊</div>
    //     <div>🦦</div>
    //     <div>🌊</div>
    // </>