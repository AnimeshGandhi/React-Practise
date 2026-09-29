import {createContext} from 'react'
import Home from './Home'


export const dataContext = createContext("")

const App = ()=>{

  return (
    <div>
      <dataContext.Provider value="Hello">
        <Home />
      </dataContext.Provider>
    </div>
  )
}
export default App