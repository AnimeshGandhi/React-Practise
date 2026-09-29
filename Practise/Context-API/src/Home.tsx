
import {useContext} from 'react'
import {dataContext} from './App'

const Home = () => {
    const data = useContext(dataContext)

    return (
        <div>
            {data.value}

        </div>
    )
}

export default Home