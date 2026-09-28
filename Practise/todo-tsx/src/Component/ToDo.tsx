import {useState} from 'react'

function ToDo(){
    const [inputValue,setInputValue] = useState<string>('')
    const [taskList,setTaskList] = useState<string[]>([])

const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim() !== ''){
        setTaskList([...taskList,inputValue.trim()])
        setInputValue('')
    }
} 


    return (
        <>
            <h1>ToDo List</h1>
            <form onSubmit={(e)=>{(handleSubmit(e))}}>
                <input type="text" placeholder="Add yr task" />
                <button type="submit">Add Task</button>

            </form>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    )
}
export default ToDo