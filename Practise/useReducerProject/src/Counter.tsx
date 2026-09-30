import {useReducer} from 'react'
import {initialState,reducer} from './Reducer'



const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({type:"increment"})}>+</button>
            <button onClick={() => dispatch({type:"decrement"})}>-</button>

        </div>
    )
}
export default Counter