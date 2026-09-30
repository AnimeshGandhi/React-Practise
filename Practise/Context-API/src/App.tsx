import {createContext} from 'react'
import Home from './Home'
import {useState} from 'react'


type dataContextType = {
  value : string
}
type counterContextType = {
  count : number,
  increment : () => void,
  decrement : () => void
}
type counterStateType = {
  count : number,
  setCount : () => void
}
export const dataContext = createContext<dataContextType>({value:""})
export const counterContext = createContext<counterContextType>({
  count : 0,
  increment : () => {},
  decrement : () => {}
})
const App = ()=>{
  const [count,setCount] = useState<number>(0)
  const increment = () => {
    setCount((prev) => prev +1)
  }
  const decrement = () => {
    setCount((prev) => prev-1)
  }
  return (
    <div>
      <dataContext.Provider value={{value:"Hello"}}>
        <counterContext.Provider value={{count,increment,decrement}}><Home /></counterContext.Provider>
      </dataContext.Provider>
    </div>
  )
}
export default App