import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };

  add = () => {
    this.setState({
      number: number + 1,
    });
  };

  minus = () => {
    this.setState({
      number: number - 1,
    });
  };

  //render는 그림을 그려주는 함수 = setState()가 호출되거나, 최초에 객체 생성시
  //render 내부에서는 state와 props에 접근할 수 있음.
  //return 내부는 JSX문법이 들어간다.
  render() {
    // temp1 = this.state;
    // temp2 = this.props;

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
