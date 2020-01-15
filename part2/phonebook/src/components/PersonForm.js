import React from "react";
import {Form, Button} from 'react-bootstrap'

const PersonForm = props => {
  return (
    <Form onSubmit={props.addPerson} className="mt-1 mb-3">
<Form.Group controlId="name">
    {/* <Form.Label>Name:</Form.Label> */}
    <Form.Control type="text" placeholder="Name" value={props.newName} onChange={props.handleNameChange}/>
  </Form.Group>
  <Form.Group controlId="number">
    {/* <Form.Label>Number:</Form.Label> */}
    <Form.Control type="number" placeholder="Contact Details"  value={props.newNumber}
              onChange={props.handleNumberChange}/>
  </Form.Group>
  <Button variant="info">
    Add
  </Button>
    </Form>
    // <form onSubmit={props.addPerson}>
    //   <table>
    //     <tbody>
    //     <tr>
    //       <td>Name:</td>
    //       <td>
    //         <input value={props.newName} onChange={props.handleNameChange} />
    //       </td>
    //     </tr>
    //     <tr>
    //       <td>Phone No:</td>
    //       <td>
    //         <input
    //           value={props.newNumber}
    //           onChange={props.handleNumberChange}
    //         />
    //       </td>
    //     </tr>
    //     <tr>
    //       <td>
    //         <button type="submit">Add</button>
    //       </td>
    //     </tr>
    //     </tbody>
    //   </table>
    // </form>
  );
};

export default PersonForm;
