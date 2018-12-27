import React, { useState, useEffect, useRef } from "react";

function usePointerLocation() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onMouseMove = e => {
      setX(e.pageX);
      setY(e.pageY);
    };
    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("mouseenter", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
      window.removeEventListener("mouseenter", onMouseMove, false);
    };
  });
  return { x, y };
}

function useKeyPress() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const onKeyPress = e => {
      setKey(e.keyCode);
    };
    window.addEventListener("keypress", onKeyPress, false);

    return () => {
      window.removeEventListener("keypress", onKeyPress, false);
    };
  });
  return key;
}

function useClick() {
  const [clicked, setClicked] = useState(false);
  const [location, setLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onClick = e => {
      setClicked(!clicked);
      setLocation({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("click", onClick, false);
    return () => {
      window.removeEventListener("click", onClick, false);
    };
  });
  return { clicked, location };
}

function useSelection() {
  const ref = useRef(null);
  const selector = ref.current;

  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const onChange = e => {
      setSelectedOption(e.target.value);
    };

    if (selector) {
      selector.addEventListener("change", onChange, false);
      return () => {
        selector.removeEventListener("change", onChange, false);
      };
    }
  });
  return { ref: ref, option: selectedOption };
}

export default { usePointerLocation, useKeyPress, useClick, useSelection };
