import React from "react";
import Header from "./header";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(idx) {
    this.setState({
      index: idx //parseInt(e.currentTarget.dataset.idx)
    });
  }

  render() {
    return (
      <div className="tabs">
        <Header
          onClick={this.updateIndex}
          title={this.props.title}
          index={this.state.index}/>

          <article className="content">
            <h1>{this.props.content[this.state.index]}</h1>
          </article>
      </div>
    )
  }
}

export default Tab;