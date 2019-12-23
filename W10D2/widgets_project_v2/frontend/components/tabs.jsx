import React from "react";
import Header from "./header";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    return (
      <div>
        <Header
          tabsContent={this.props.tabsContent}
          updateSelected={this.updateSelected} />
        <article>
          {
            this.props.tabsContent[this.state.selected].content
          }
        </article>
      </div>
    )
  }
}

export default Tabs;