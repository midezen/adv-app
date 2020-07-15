import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      items: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      this.setState({
        loading: false,
        items: res.data,
      });
    });
  }

  handleClick() {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      this.setState({
        loading: false,
        items: res.data,
      });
    });
  }

  render() {
    const { loading, items } = this.state;
    if (loading) {
      return (
        <div className="loading">
          <em>Loading...</em>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="header">ADVICE APP</h1>
          <div className="advice">
            <h3>{items.slip.advice}</h3>
            <button className="button" onClick={this.handleClick}>
              Give me Advice!
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
