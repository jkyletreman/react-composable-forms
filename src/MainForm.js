import React from 'react'
// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
import useMainForm from "./CustomHooks";

const MainForm = props => {
    // callback function
    const signup = () => {
      alert(`User Created!
             Name: ${inputs.firstName}`);
    };
  
    // custom hook - takes callback as param
    const { inputs, handleInputChange, handleSubmit } = useMainForm(signup);
    
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
            <button type="submit" onClick={() => props.setForm('two')}>Next</button>
          </div>
        </form>
      </div>
    );
  };

  export default MainForm;