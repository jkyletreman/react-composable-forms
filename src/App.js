import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useRouter, useForm } from "./CustomHooks";
import SignUpForm from "./SignUpForm";
import "./App.css";

function App() {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={SignUpForm} />
        <Route path="/two" component={SecondForm} />
      </Switch>
    </animated.div>
  ));
}

const SecondForm = () => (
  <Link to="/">
    <button type="submit" />
  </Link>
);

export default App;
