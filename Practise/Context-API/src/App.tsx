import {createContext} from 'react'
import Home from './Home'

type dataContextType = {
  value : string
}

export const dataContext = createContext<dataContextType>({value:""})

const App = ()=>{

  return (
    <div>
      <dataContext.Provider value={{value:"Hello"}}>
        <Home />
      </dataContext.Provider>
    </div>
  )
}
export default App