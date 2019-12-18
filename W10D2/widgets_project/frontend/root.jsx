import React from "react";
import Clock from "./clock";
import Tab from "./tabs"

const Root = (props) => (
  <div>
    <div>
      <Clock />
    </div>
    <div>
      <Tab title={["one", "two", "three"]} content={["I am the first", "Second pane here", "Third pane here"]} />
    </div>
  </div>
)

export default Root;