import React, { useState, useEffect, Fragment } from "react";
import PersonForm from "./PersonForm";
import Login from "./Login";
import Persons from "./Persons";
import personService from "../services/persons";
import loginService from "../services/login";
import Notification from "./Notification";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedPhonebookUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      personService.setToken(user.token);
    }
  }, []);

  const addPerson = e => {
    e.preventDefault();

    const personObject = {
      // id: persons.length + 1,
      name: newName,
      number: newNumber
    };
    if (persons.find(item => item.name === newName)) {
      alert(`${newName} already added in the List.`);
      setNewName("");
    } else {
      personService.create(personObject).then(response => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNubmer("");
        setErrorMessage("New Person Added!");
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

      window.localStorage.setItem("loggedPhonebookUser", JSON.stringify(user));

      personService.setToken(user.token);
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

  const handleLogout = () => {
    window.localStorage.removeItem("loggedPhonebookUser");
    window.location.reload();
  };

  const styles = {
    width: "30%",
    padding: "30px",
    margin: "auto"
  };

  const stylesMain = {
    width: "45%",
    padding: "20px",
    margin: "auto"
  };

  const rows = () =>
    persons.map(person => (
      <Persons
        key={person.id}
        person={person}
        persons={persons}
        handleDelete={() => handleDelete(person.id)}
      />
    ));

  return (
    <div>
      <Notification message={errorMessage} />

      {user === null ? (
        <Fragment>
          <Container>
            {" "}
            <Card style={styles}>
              <Col md="auto" className="mx-auto">
                {" "}
                <h4>Login</h4>
                <Login
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
              </Col>
            </Card>
          </Container>
        </Fragment>
      ) : (
        <Container>
          <Card style={stylesMain}>
            <h3>Phonebook</h3>
            <PersonForm
              addPerson={addPerson}
              newName={newName}
              newNumber={newNumber}
              handleNumberChange={handleNumberChange}
              handleNameChange={handleNameChange}
            />
            <h4>Numbers</h4>
            {persons.length === 0 ? <Alert variant='warning'>No Data</Alert> : rows()}
          </Card>
          <div className="mt-3" style={{textAlign: 'center'}}>
            {user.name} Logged In.{" "}
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default App;
