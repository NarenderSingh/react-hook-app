import React, { Component } from "react";

interface IClassCounter {
  count: number;
}

class ClassCounter1 extends Component<any, IClassCounter> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h3>Class Counter Component - update document title</h3>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default ClassCounter1;
