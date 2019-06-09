import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useRouter, useForm } from "./CustomHooks";
import SignUpForm from "./SignUpForm";
import UserProfileForm from "./UserProfileForm";
import UserProfileCard from "./UserProfileCard";
import "./App.css";

function App() {
  const signup = inputs => {
    alert(`User Created
      Email: ${inputs.email},
      Username: ${inputs.username},
      Avatar: ${inputs.avatar}
    `);
  };

  const { location } = useRouter();
  const { inputs, handleInputChange, handleSubmit } = useForm(signup); 

  const transitions = useTransition(
    location,
    location => location.pathname,
    {
      from: { opacity: 0, transform: "translate3d(100%,0,0)" },
      enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
      leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
    },
    []
  );

  return (
    <div>
      <div className="container">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props} className="container">
            <Switch location={item}>
              <Route
                path="/"
                exact
                render={props => (
                  <SignUpForm
                    {...props}
                    inputs={inputs}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                  />
                )}
              />
              <Route
                path="/two"
                render={props => (
                  <UserProfileForm
                    {...props}
                    inputs={inputs}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                  />
                )}
              />
              <Route
                path="/profile"
                render={props => (
                  <UserProfileCard
                    {...props}
                    inputs={inputs}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                  />
                )}
              />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
