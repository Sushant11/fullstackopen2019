import React from "react";

const PersonForm = props => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        Name: <input value={props.newName} onChange={props.handleNameChange} />{" "}
        <br />
        Phone No:{" "}
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
