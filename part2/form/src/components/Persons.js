import React from "react";

const Persons = ({ persons, newFilter }) => {
  if (newFilter !== "") {
    const filteredData = persons.filter(item => item.name === newFilter);
    return (
      <div>
        {filteredData.map(item => (
          <li key={item.id}>
            {item.name} {item.number}
          </li>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {persons.map(item => (
          <li key={item.id}>
            {item.name} {item.number}
          </li>
        ))}
      </div>
    );
  }
};

export default Persons;
