import { render } from "@testing-library/react";
import React, { Component } from "react";

// class Comments extends Component {

//   render(){

//     return(
//       <div>
//         <p>hej</p>

//       </div>
//     );

//   }
// }

// TEST 2 --------------------------------------------------TEST 2

const Test = (props) => (
<div>
<p className="App-test">
    heeej
  </p>
</div>
)



class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Din kommentar är publicerad: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Dela med dig av ditt bästa miljötips!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:
            <br/>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>{" "}
          <br/>
          <label>
            Kommentar:
            <br/>
            <textarea value={this.state.value}  onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Skicka kommentar" />
        </form>
        <Test/>
      </div>
    );
  }
}

export default Comments;

// TEST 2 --------------------------------------------------TEST 2

// kodinspiration från https://reactjs.org/docs/forms.html





// export default Comments;