import React, { useState } from 'react';
/* 
    In order for React to recognize any custom hooks, 
        their name should start with “use”.
*/

// callback - whenever the user submits the form.
const useMainForm = callback => {
    // object of inputs, inputName: inputValue
    const [ inputs, setInputs ] = useState({});

    // user submits form
    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        };
        callback();
    };

    // user provides input
    const handleInputChange = event => {
        /*
            If you need to access an event in an asynchronous way, 
            then you should call event.persist() at the beginning of the function. 
            This will take the SyntheticEvent out of the pool 
            and prevent it from being reclaimed by React.
        */
        event.persist();

        // name of form
        // value of input
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    
    return {
        handleInputChange,
        handleSubmit,
        inputs
    };
};

export default useMainForm;

// useMainForm --> https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57