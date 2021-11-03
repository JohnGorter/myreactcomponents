import React from 'react';

export const Button = ()=>{
    return <button>Click me</button>
}

export const MyList = () => {
    return <>
        <div>{ ["a", "b", "c"].map(s => <div>{s}</div>)}</div>
    </>
}