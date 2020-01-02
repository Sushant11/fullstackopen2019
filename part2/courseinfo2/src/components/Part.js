import React from "react";

const styles = {
  margin: "10px"
};

const Part = props => {
  const parts = props.parts;
  const part = [
    parts.map(part => (
      <li key={part.id}>
        {part.name}: {part.exercises}
      </li>
    ))
  ];
  return <div style={styles}>{part}</div>;
};

export default Part;
