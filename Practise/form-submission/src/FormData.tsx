import {useState} from 'react'
import type{SyntheticEvent} from 'react'
type formDataType = {
    name:string,
    email:string,
    age:number,
    address:string
}
const FormData = () => {

const [formData,setFormData] = useState<formDataType>({
    name:'',
    email:'',
    age:0,
    address:''
})
const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Name: ${formData.name} 
        Email: ${formData.email} 
        Age:${formData.age} 
        Address:${formData.address}`)
    
}


    return (
        <div>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <input type="text" placeholder="Name" value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} />
                <input type="email" placeholder="Email" value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
                <input type="number" placeholder="Age" value={formData.age} onChange={(event) => setFormData({...formData, age: Number(event.target.value)})} />
                <input type="text" placeholder="Address" value={formData.address} onChange={(event) => setFormData({...formData, address: event.target.value})} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormData;