import React from "react";

import useMainForm from "./CustomHooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainForm />
    </div>
  );
}

// TODO: // use custom hook to manage form
// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

const MainForm = () => {
  // callback function
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName}`);
  };

  // custom hook - takes callback as param
  const { inputs, handleInputChange, handleSubmit } = useMainForm(signup);
  // console.log(inputs)
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="firstName input">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="type selection">
          <select onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="submit">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default App;
