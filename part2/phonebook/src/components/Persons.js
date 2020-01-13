import React from "react";

const Persons = ({ person, handleDelete }) => {
  return (
    <div>
      <li>
        {person.name} : {person.number}{" "}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Persons;
