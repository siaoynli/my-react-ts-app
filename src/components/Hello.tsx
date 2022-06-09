import React from 'react';

interface IHelloProps {
    message?: string;
}


const Hello:React.FC<IHelloProps> =  (props)=> {
    return <h1>{props.message} </h1>
}



Hello.defaultProps={
    message: 'Hello world2'
}

export default Hello