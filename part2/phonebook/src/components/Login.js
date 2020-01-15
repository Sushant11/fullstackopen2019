import React from "react";
import {Form, Button} from 'react-bootstrap'

const Login =  props => {
  return (
    <Form onSubmit={props.handleLogin}>
<Form.Group controlId="username">
    <Form.Control type="text" placeholder="Username"  value={props.username}
                name="Username"
                onChange={({ target }) => props.setUsername(target.value)}/>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Control type="password" placeholder="Password"  value={props.password}
                name="Password"
                onChange={({ target }) => props.setPassword(target.value)}/>
  </Form.Group>
  <Button variant="info" type="submit">
    Login
  </Button>
    </Form>
    // <form onSubmit={props.handleLogin}>
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td>Username</td>
    //         <td>
    //           {" "}
    //           <input
    //             type="text"
    //             value={props.username}
    //             name="Username"
    //             onChange={({ target }) => props.setUsername(target.value)}
    //           />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>Password</td>
    //         <td>
    //           <input
    //             type="password"
    //             value={props.password}
    //             name="Password"
    //             onChange={({ target }) => props.setPassword(target.value)}
    //           />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <button type="submit">Login</button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </form>
  );
};

export default Login;
