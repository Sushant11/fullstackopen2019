import React from "react";
import {Table, Button} from 'react-bootstrap'

const Persons = ({ person, persons, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>{persons.length + 1 }</td> */}
          <td>
          {person.name}
          </td>
          <td>
          {person.number}
          </td>
          <td>
            <Button variant='danger' onClick={handleDelete}>
            Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
    // <div>
    //   <li>
    //     {person.name} : {person.number}{" "}
    //     <button onClick={handleDelete}>Delete</button>
    //   </li>
    // </div>
  );
};

export default Persons;
