import React, { Component } from 'react';

import "./App.css";
import hooks from "./AntesHooks";

const app = () => {
  const pointerLocation = hooks.usePointerLocation();
  
  return (
    <div className="App">
      <h1>Demo Hooks</h1>
      <p>Mouse X: {pointerLocation.x} Mouse Y: {pointerLocation.y}</p>
    </div>
  );
  
}

export default app;
