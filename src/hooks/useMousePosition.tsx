import React, { useEffect, useState } from 'react';

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMouse = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        document.addEventListener('click', updateMouse);
        return () => {
            document.removeEventListener("click", updateMouse);
        }
    }, []);

    return position
}