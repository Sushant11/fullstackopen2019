import React, { useState, useEffect, Fragment } from "react";
import PersonForm from "./PersonForm";
import Login from "./Login";
import Persons from "./Persons";
import personService from "../services/persons";
import loginService from "../services/login";
import Notification from "./Notification";

const App = props => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNubmer] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    personService.getAll().then(response => setPersons(response.data));
  }, []);

  const addPerson = e => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.find(item => item.name === newName)) {
      alert(`${newName} already added in the List.`);
      setNewName("");
    } else {
      personService.create(personObject).then(response => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNubmer("");
        setErrorMessage("Added");
      });
    }
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };
  const handleNumberChange = e => {
    setNewNubmer(e.target.value);
  };

  const handleDelete = id => {
    var r = window.confirm(`Delete ${id}?`);
    if (r === true) {
      personService.deleted(id).then(response => {
        alert(`${id} Deleted`, document.location.reload());
        return response.data;
      });
    } else {
    }
  };

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      personService.setToken(user.token)
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const rows = () =>
    persons.map(person => (
      <Persons
        key={person.id}
        person={person}
        handleDelete={() => handleDelete(person.id)}
      />
    ));

  return (
    <div>
      <Notification message={errorMessage} />
     

      {user === null ?
      <Fragment> <h4>Login</h4> 
      <Login 
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
      /> </Fragment>
     :
     <Fragment>
     <h2>Phonebook</h2>
     <p>{user.name} logged in</p>
     <PersonForm
       addPerson={addPerson}
       newName={newName}
       newNumber={newNumber}
       handleNumberChange={handleNumberChange}
       handleNameChange={handleNameChange}
     />
     <h2>Numbers</h2>
     {rows()}
     </Fragment>
    }
   
     
    </div>
  );
};

export default App;
