
import {useContext} from 'react'
import {dataContext} from './App'
import {counterContext} from './App'
const Home = () => {
    const data = useContext(dataContext)
    const countVal = useContext(counterContext)

    return (
        <div>
            {data.value}
            {countVal.count}
            <button onClick={countVal.increment}>+</button>
            <button onClick={countVal.decrement}>-</button>

        </div>
    )
}

export default Home