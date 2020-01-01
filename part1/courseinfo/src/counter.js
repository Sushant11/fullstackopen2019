import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Counter = props => {
    const [counter,setCounter] = useState(0);

    return (
        <div>
            asd
            {counter}
        </div>
    )
}

ReactDOM.render(<Counter/>, document.getElementById("counter"));
