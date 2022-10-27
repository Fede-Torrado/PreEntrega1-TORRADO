import {useState} from "react"
import Button from 'react-bootstrap/Button';



const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleRestar = () => {
        setCounter(counter - 1);
    }
    const handleSumar = () => {
        setCounter(counter + 1);
    }
    return(
        <div className="counter">
            <Button variant="secondary" disabled ={counter === 0 ? true : false} onClick={handleRestar}>-</Button>
            <div className="counterNumber">{counter}</div>    
            <Button variant="secondary" onClick={handleSumar}>+</Button>    
        </div>
    )
}

export default Counter;