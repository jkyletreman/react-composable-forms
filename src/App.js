import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainForm />
    </div>
  );
}

const MainForm = () => (
  <div className='container'>
    <form className='form'>
      <div className='first-name input'>
        <label>First Name</label>
        <input type='text' name='first-name' />
      </div>
      <div className='type selection'>
        <select>
          <option value='1'>1</option>
          <option value='1'>2</option>
          <option value='1'>3</option>
        </select>
      </div>
      <div className='submit'>
        <button type='submit'>Next</button>
      </div>
    </form>
  </div>
)

export default App;
