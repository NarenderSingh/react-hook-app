import React, { Component } from "react";

interface IClassMouseState {
  x: number;
  y: number;
}

class ClassMouse extends Component<any, IClassMouseState> {
  constructor(props: any) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePostion = (e: any) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePostion);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePostion);
  }

  render() {
    return (
      <div>
        <h3>Class Mouse Event </h3>
        <div>
          <p>
            x : {this.state.x} and y : {this.state.y}
          </p>
        </div>
      </div>
    );
  }
}

export default ClassMouse;
