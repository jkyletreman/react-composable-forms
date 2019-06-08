import React, { useState } from "react";

import MainForm from './MainForm';
import "./App.css";

function App() {
  const [ form, setForm ] = useState('main');

  // const renderForm = form => {
  //   switch (form) {
  //     case 'main':
  //       return <MainForm setForm={setForm} />
      
  //     case 'second':
  //       return <SecondForm setForm={setForm} />

  //     default:
  //       return <MainForm setForm={setForm} />
  //   }
  // }

  return (
    <div className="App">
      {form === 'main' ? <MainForm setForm={setForm} /> : null}
      {form === 'two' ? <SecondForm setForm={setForm} /> : null}
    </div>
  );
}

const SecondForm = () => (
  <div>Hello</div>
)
export default App;
