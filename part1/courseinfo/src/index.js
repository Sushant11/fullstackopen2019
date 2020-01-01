import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = ({ course }) => <h2>{course}</h2>;

const Part = props => (
  <p>
    {props.name} {props.exercises}
  </p>
);

//Alternative

// const Part = ({ name, exercises }) => (
//   <p>
//     {name} {exercises}
//   </p>
// );

//-----------//

const Content = ({ course }) => {
  return (
    <div>
      <Part name={course[0].name} exercises={course[0].exercises} />
      <Part name={course[1].name} exercises={course[1].exercises} />
      <Part name={course[2].name} exercises={course[2].exercises} />
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <div>
      <h4>
        Number of exercises{" "}
        {course[0].exercises + course[1].exercises + course[2].exercises}
      </h4>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack App Dev",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </div>
  );
};

const Counter = props => {
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter+1),1000);
  const setToValue = value => {
    return () => {
      setCounter(value);
    };
  };

  const Display = ({ counter }) => <div>{counter}</div>;

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  return (
    <div>
      <Button onClick={setToValue(counter - 1)} text="Decrease" />{" "}
      <Display counter={counter} />{" "}
      <Button onClick={setToValue(counter + 1)} text="Increase" />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("root"));
