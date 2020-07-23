import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

const ContainerBox = styled.div`
  display: grid;
  justify-content: center;
`;

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "제목1",
      },
      {
        id: 2,
        title: "제목2",
      },
      {
        id: 3,
        title: "제목3",
      },
    ],
  };

  add = () => {
    this.setState({
      posts: this.state.posts.concat({
        id: 4,
        title: "제목4",
      }),
    });
  };

  del = () => {
    this.setState({
      posts: this.state.posts.filter((post) => {
        return post.id !== 2;
      }),
    });
  };

  update = () => {
    const data = {
      id: 2,
      title: "제목200",
    };

    this.setState({
      posts: this.state.posts.map((post) =>
        post.id === data.id ? { ...post, ...data } : post
      ),
    });
  };

  // shouldComponentUpdate(newxProps, nextState) {
  //   if (nextState.posts !== this.state.posts) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    return (
      <div>
        <ContainerBox>
          <button onClick={this.del}>삭제</button>
          <button onClick={this.add}>추가</button>
          <button onClick={this.update}>수정</button>
          {this.state.posts.map((post) => {
            return <Post id={post.id} title={post.title} />;
          })}
        </ContainerBox>
      </div>
    );
  }
}

export default App;
