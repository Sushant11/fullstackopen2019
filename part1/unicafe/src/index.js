import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ feedback, number }) => {
    return (
        <div>
        {feedback} : <b>{number}</b>
        </div>
      )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>

      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      <h3>Statistics</h3>
      <Statistics feedback="Good" number={good} />
      <Statistics feedback="Neutral" number={neutral} />
      <Statistics feedback="Bad" number={bad} />
      {"---------"}
      <Statistics feedback="Average" number={(good + bad + neutral) / 3} />
      <Statistics feedback="Positive" number={(good / 3) * 100} />
      <Statistics feedback="Total" number={good + bad + neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
