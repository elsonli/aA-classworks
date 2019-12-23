import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";
import Autocomplete from "./autocomplete";

const Root = (props) => {
  return (
    <div>
      <Clock />
      <Tabs tabsContent={props.tabsContent} />
      <Autocomplete acNames={props.acNames} />
    </div>
  )
}

export default Root;