import React, { useEffect, useState } from 'react';


const LikeButton: React.FC = () => {
    const [obj, setObj] = useState({
        like: 0,
        on: true
    })

    useEffect(() => {
        document.title = `点击了${obj.like}次`
    })


    return (
        <>
            <button onClick={() => {
                setObj({
                    like: obj.like + 1,
                    on: obj.on
                })
            }}>
                {obj.like}👍

            </button>

            <button onClick={() => {
                setObj({
                    like: obj.like,
                    on: !obj.on
                })
            }}>
                {obj.on ? "on" : "off"}

            </button>
        </>
    )
}

export default LikeButton;