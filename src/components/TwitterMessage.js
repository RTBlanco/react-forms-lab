import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      maxChars: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState(prev => {
      return {
        value: e.target.value,
        maxChars: prev.maxChars - 1
      }
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.value}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
