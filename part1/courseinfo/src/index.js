import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const course = "Half Stack App Dev";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = course => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  };

  const Content = () => {
    return (
      <div>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </div>
    )
  };

  const Total = () => {
    return (
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    );
  };

  return (
    <div>
     <Header course={course}/>
     <Content/>
     <Total/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
