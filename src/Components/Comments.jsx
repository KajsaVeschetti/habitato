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
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Dela med dig av ditt bästa miljötips!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Namn:
            <br />
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>{" "}
          <br />
          <label>
            Kommentar:
            <br />
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Skicka kommentar" />
        </form>
      </div>
    );
  }
}

export default Comments;


// kodinspiration från https://reactjs.org/docs/forms.html