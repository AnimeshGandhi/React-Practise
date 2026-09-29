import type{SyntheticEvent} from 'react'
import {useState} from 'react'

type formDataType = {
    name : string;
    contact : number
}

const ContactForm = () => {
    const [inputVal,setInputVal] = useState<formDataType>({
            name:'',
            contact:0
        })
    const handleSubmit = (event:SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(inputVal)
    }

    return (
        
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name 
                        <input type="text" value={inputVal.name} onChange={(event)=>setInputVal({...inputVal,name:event.target.value})}/>
                        <input type="number" value={inputVal.contact} onChange={(event)=>setInputVal({...inputVal,contact:Number(event.target.value)})}/>
                    </label>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default ContactForm