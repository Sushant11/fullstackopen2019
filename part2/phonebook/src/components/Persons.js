import React from "react";

const Persons = ({ person, handleDelete }) => {
  return (
    <div>
      <li key={person.id}>
        {person.name} : {person.number}{" "}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Persons;
