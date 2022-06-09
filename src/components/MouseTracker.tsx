import React, { useEffect, useState } from 'react';


export const MouseTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMouse = (event: MouseEvent) => {
            console.log("inner")
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        document.addEventListener('click', updateMouse);

        return () => {
            console.log("remove")
            document.removeEventListener("click", updateMouse);
        }
    }, []);


    return (
        <p>x:{position.x} y:{position.y}</p>
    )

}

