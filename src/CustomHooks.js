import { useState, useContext } from 'react';
import { __RouterContext } from 'react-router-dom'

/* 
    In order for React to recognize any custom hooks, 
        their name should start with “use”.
*/

// Navigation + Transitions 
// https://codesandbox.io/embed/jp1wr1867w
const useRouter = () => {
  return useContext(__RouterContext)
}

// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

const initialFormState = {}
// callback - whenever the user submits the form.
const useForm = callback => {
    // object of inputs, inputName: inputValue
    const [ inputs, setInputs ] = useState(initialFormState);

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

export { useForm, useRouter };
