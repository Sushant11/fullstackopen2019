import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({
  part1,
  part2,
  part3,
}) => {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <h4>Number of exercises {exercises1 + exercises2 + exercises3}</h4>
    </div>
  );
};

const App = () => {
  const course = "Half Stack App Dev";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
