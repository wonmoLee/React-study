import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  state = {
    data: {
      userId: null,
      id: null,
      title: null,
      completed: null,
    },
  };

  onClick = () => {
    const { data } = this.state;
    Axios.get("https://jsonplaceholder.typicode.com/todos/1").then((resp) => {
      console.log(data);
      console.log(resp);
      this.setState({
        data: { data, ...resp.data },
      });
    });
  };

  render() {
    const { data } = this.state.data;
    return (
      <div>
        <div>아이디 : {this.state.data.userId}</div>
        <div>제목 : {this.state.data.title}</div>
        <hr />
        <h1>클릭하세요</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default App;
