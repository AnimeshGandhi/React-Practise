import {useRef} from 'react'


const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        inputRef.current?.focus()
    }
    return (
        <>
        <input type="text" ref={inputRef} placeholder="Focus me!" />
        <button onClick={handleFocus}>Handle Focus</button>
        </>
        
    )
}
export default FocusInput 