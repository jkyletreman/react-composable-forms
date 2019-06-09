import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useRouter } from "./CustomHooks";
import SignUpForm from "./SignUpForm";
import UserProfileForm from "./UserProfileForm";
import "./App.css";

function App() {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  }, []);

  return (
    <div>
      {/* <h1>Signup!</h1> */}
      <div className="container">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props} className="container border">
            <Switch location={item}>
              <Route path="/" exact component={SignUpForm} />
              <Route path="/two" component={UserProfileForm} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
