import React from "react";
import ReactDOM from "react-dom";
import Report from "./components/Report"

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Report />, wrapper) : null;