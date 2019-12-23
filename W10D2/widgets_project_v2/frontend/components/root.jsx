import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";

const Root = (props) => {
  return (
    <div>
      <Clock />
      <Tabs tabsContent={props.tabsContent} />
    </div>
  )
}

export default Root;