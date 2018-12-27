import React, { useRef } from "react";

import hooks from "./AntesHooks";

const Selector = () => {
  const selector = hooks.useSelection();

  return (
    <div>
      <select defaultValue="Red" ref={selector.ref} className="ui dropdown">
        <option>Red</option>
        <option>Blue</option>
        <option>Yellow</option>
      </select>
      <p>{selector.option}</p>
    </div>
  );
};

export default Selector;
