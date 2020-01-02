import React, { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: "Arto Hellas", number: "040-123456" },
    { id: 1, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 2, name: "Dan Abramov", number: "12-43-234345" },
    { id: 3, name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      id: persons.length,
      name: newName,
      number: newNumber
    };
    if (persons.find(item => item.name === newName)) {
      alert(`${newName} already added in the List.`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handlePersonChange = e => {
    setNewName(e.target.value);
  };
  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };
  const handleFilter = e => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
      />
      <h2>Filter</h2>
      <input value={newFilter} onChange={handleFilter} />
      <h2>Numbers</h2>
      <Persons persons={persons} id={persons.id} newFilter={newFilter} />
    </div>
  );
};

export default App;
