import React, { useRef } from "react";

import Selector from "./Selector";

import hooks from "./AntesHooks";

const app = () => {
  const pointerLocation = hooks.usePointerLocation();
  const click = hooks.useClick();

  return (
    <div className="ui container">
      <h1>Demo Hooks</h1>
      <Selector />
      <p>
        Mouse X: {pointerLocation.x} Mouse Y: {pointerLocation.y}
      </p>
      <p>Clicked? {click.clicked.toString()}</p>
      <p>Click_X: {click.clicked && click.location.x}</p>
      <p>Click_Y: {click.clicked && click.location.y}</p>
    </div>
  );
};

export default app;
