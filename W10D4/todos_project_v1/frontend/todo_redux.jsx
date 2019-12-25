import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { configureStore } from "./store/store";
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.store = configureStore;
    ReactDOM.render(<Root store={configureStore}/>, root);
});