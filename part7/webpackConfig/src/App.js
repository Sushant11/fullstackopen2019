import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setVlues] = useState([])

  const handleClick = () => {
      setCounter(counter+1);
      setVlues(values.concat(counter))
  }

  return (
  <div className="container">
      Hello Webpack {counter}<br/>
      <button onClick={handleClick}>Click</button>
    </div>
    )
};

export default App;
