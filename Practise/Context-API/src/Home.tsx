
import {useContext} from 'react'
import {dataContext} from './App'

const Home = () => {
    const data = useContext(dataContext)

    return (
        <div>
            {data}

        </div>
    )
}

export default Home