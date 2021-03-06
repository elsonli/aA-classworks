import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const tabsContent = [
    {"title": "one", "content": "I am the first"},
    {"title": "two", "content": "Second pane here"},
    {"title": "three", "content": "Third pane here"}
  ];
  const acNames = [
    "Abba",
    "Barney",
    "Barbara",
    "Jeff",
    "Jenny",
    "Sarah",
    "Sally",
    "Xander"
  ]
  ReactDOM.render(<Root
    tabsContent={tabsContent} 
    acNames={acNames} />,
    root);
});