import React from "react";
import ReactDOM from "react-dom";

function App(props){
  return (
    <div>
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
    </div>
  );
}

ReactDOM.render(<App heading="Header" para="Para" />, document.getElementById("app"))


