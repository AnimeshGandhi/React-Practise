import {useEffect,useState} from 'react'

const APIHandling = () => {
    const [data,setData] = useState<any>(null)
    useEffect(()=>{
        const Fetching = async () => {
            const response = await fetch( "https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        Fetching()
    },[])
    const handleClick = () => {
            console.log(data)
    }
    return (
        <div>
            
            <button onClick={handleClick}>Call</button>
            
        </div>
    )
}
export default APIHandling