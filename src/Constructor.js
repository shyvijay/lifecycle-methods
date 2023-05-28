import { Component } from "react";

class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      favoriteFood: "rice",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    setTimeout(() => {
      this.setState({ favoriteFood: "pizza" });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count has been updated:", this.state.count);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("componet should update");
    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  changeFood() {
    this.setState({ favoriteFood: "puranpoli" });
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <hr></hr>
        <p>My favourite food is {this.state.favoriteFood}</p>
        <button onClick={() => this.changeFood()}>Change food</button>
      </div>
    );
  }
}

export default Constructor;
