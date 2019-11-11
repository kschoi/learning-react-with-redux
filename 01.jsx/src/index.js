// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function GetButtonText() {
  return "Click on me!";
}

// Create a react component
const App = () => {
  // const buttonText = [10, 20];
  const buttonText = { text: "click" };

  return (
    <div>
      {/* <label class="label" for="name"> */}
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input type="text" id="name" />
      {/* <button style="background-color:blue; color:white">Submit</button> */}
      <button
        style={{
          backgroundColor: "blue",
          color: "white"
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
