import React, { useState } from 'react'

function MyComponent() {

    const[count, setCount] = useState(1000)
    const[balance, setBalance] = useState('vBucks')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount (prevCount => prevCount + 1)
    }

    return(
        <>
        <button onClick = {decrementCount}> — </button>
        <span> {count} </span>
        <span> {balance} </span>
        <button onClick = {incrementCount}> + </button>
        </>
    )

}

export default MyComponent