import React, { useState, useEffect } from "react";
    
    function usePointerLocation() {
        const [x, setX] = useState(0);
        const [y, setY] = useState(0);
        
        useEffect(() => {
            const onMouseMove = e => {
                setX(e.pageX);
                setY(e.pageY);
            }
            window.addEventListener("mousemove", onMouseMove, false);
            window.addEventListener("mouseenter", onMouseMove, false);
            
            return () => {
                window.removeEventListener("mousemove", onMouseMove, false);
                window.removeEventListener("mouseenter", onMouseMove, false);
            }
        });
        return {x, y};
    }


export default { usePointerLocation }



