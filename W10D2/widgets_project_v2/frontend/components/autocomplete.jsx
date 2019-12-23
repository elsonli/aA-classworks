import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      inputVal: event.target.value
    })
  }

  render() {
    const filteredNames = this.props.acNames.filter(name => {
      return name.toLowerCase().startsWith(this.state.inputVal);
    })
    return (
      <div>
        <input type="text" onChange={this.updateInput} />
        <ul>
          {
            filteredNames.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Autocomplete;