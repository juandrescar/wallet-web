import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from '../../api/wallet';
var createReactClass = require('create-react-class');

var ClientForm = createReactClass({
  registerUser: async event => {
    event.preventDefault()

    var data = {
      name: event.target.name.value,
      document: event.target.document.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    }

    var success = true;
    const res = await register(data).catch( error => {
      success = false
      return error
    });

    alert(res.message);
    if(success){
      window.location.replace('/');
    }
  },

  render: function() {
    return (
      <Container className='mt-5'>
      <h2>Registrar cliente</h2>
      <Form onSubmit={this.registerUser}>
        <Form.Label column="sm" lg={2}>
          Nombre
        </Form.Label>
        <Form.Control name="name" size="sm" type="text" placeholder="Ingrese nombre (solo letras y espacios)" required pattern="[A-Za-z ]+$"/>
        <Form.Label column="sm" lg={2}>
          Documento
        </Form.Label>
          <Form.Control name="document" size="sm" type="text" placeholder="Ingrese documento" required/>
        <Form.Label column="sm" lg={2}>
          Email
        </Form.Label>
          <Form.Control name="email" size="sm" type="email" placeholder="Ingrese email" required/>
        <Form.Label column="sm" lg={2}>
          Teléfono
        </Form.Label>
          <Form.Control name="phone" size="sm" type="text" placeholder="Ingrese teléfono" required/>
      <Button variant="primary" type="submit" size="md" block>
        Guardar
      </Button>
      </Form>
    </Container>
    );
  }
});

export default ClientForm;
