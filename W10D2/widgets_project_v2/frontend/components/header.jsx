import React from "react";

const Header = (props) => {
  return (
    <ul>
      {
        props.tabsContent.map((tab, index) => {
          return (
            <li key={index} onClick={() => props.updateSelected(index)}>
              {tab.title}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Header;