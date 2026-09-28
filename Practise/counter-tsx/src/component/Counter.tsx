import { useState } from "react";

function Counter(){
    const [Counter,setCounter] = useState<number>(0)
    const [inputValue,setInputValue] = useState<number>(0)

    return (

        <>
        <h1>{Counter}</h1>
        <button onClick={() => setCounter(Counter + 1)}>+</button>
        <button onClick={() => setCounter(Counter - 1)}>-</button>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(Number(e.target.value))} />
        <button onClick={()=>setCounter(Counter + inputValue)}>Increase by Amount</button>
        <button onClick={()=>setCounter(Counter - inputValue)}>Decrease by amount</button>
        </>
    )
}

export default Counter;