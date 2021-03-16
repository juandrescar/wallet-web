import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {get} from '../../api/wallet';
var createReactClass = require('create-react-class');


var BalanceForm = createReactClass({

  registerUser: async event => {
    event.preventDefault()

    var data = {
      document: event.target.document.value,
      phone: event.target.phone.value,
    }

    var success = true;
    const res = await get(data).catch( error => {
      success = false
      return error
    });

    if(success) {
      var text = res.message + 
      '\n name: ' + res.data.name +
      '\n saldo: ' + res.data.balance;
    } else {
      text = res.message
    }

    alert(text);
    if(success){
      window.location.replace('/');
    }
  },

  render: function() {
    return (
      <Container className='mt-5'>
      <h2>Consultar saldo</h2>
      <Form onSubmit={this.registerUser}>
        <Form.Label column="sm" lg={2}>
          Documento
        </Form.Label>
          <Form.Control name="document" size="sm" type="text" placeholder="Add a document"/>
        <Form.Label column="sm" lg={2}>
          Teléfono
        </Form.Label>
          <Form.Control name="phone" size="sm" type="text" placeholder="Add a phone"/>
      <Button variant="primary" type="submit" size="md" block>
        Guardar
      </Button>
      </Form>
    </Container>
    );
  }
});

export default BalanceForm;
