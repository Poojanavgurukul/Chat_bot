import React from "react";
import "./homepage.css";
import data from './chatbot.json'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      search: ""
    };
  }
  onChange = e => {
    this.setState({
      search: e.target.value
    });
    console.log(e.target.value);
  };
  add = () => {
    let c = this.state.todo.slice();
    c.push(this.state.search);
    this.setState({
      todo: c,
      search: "",
      myDtata:data,
    });
    console.log(data)
  };
 
  
  render() {
    let b = this.state.todo.map((e, i) => {
      return (
        <span key={i}>
          <p className="text">{e}</p>
        </span>
      );
    });
    return (
      <div>
        {this.state.todo.length === 0 ? <p /> : <ol>{b}</ol>}
      <div className="main">
          {this.getValue}
        <div>
        <input
          type="text"
          placeholder="Type Here....."
          value={this.state.search}
          onChange={this.onChange}
          className="inp"
        />
         <button className="btn" onClick={this.add}>
          Send
        </button>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
