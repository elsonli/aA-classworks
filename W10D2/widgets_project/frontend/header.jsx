import React from "react";

const Header = ({ onClick, title, index }) => (
  <ul className="tabs-list">
    {
      title.map((title, idx) =>
        {
          { var nameClass = "" }
          { idx === index ? nameClass = "tab selected" : nameClass = "tab" }
          return (
            <div key={idx}>
              <li onClick={() => {onClick(idx)}} className={nameClass}>
                <h1>{title}</h1>
              </li>
            </div>
          )
        }
      )
    }
  </ul>  
)

export default Header;