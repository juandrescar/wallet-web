import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {recharge} from '../../api/wallet';
var createReactClass = require('create-react-class');


var BalanceForm = createReactClass({

  registerUser: async event => {
    event.preventDefault()

    var data = {
      document: event.target.document.value,
      phone: event.target.phone.value,
      value: event.target.value.value,
    }

    var success = true;
    const res = await recharge(data).catch( error => {
      success = false
      return error
    });

    if(success) {
      console.log(res);
      var text = res.message
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
      <h2>Recargar saldo</h2>
      <Form onSubmit={this.registerUser}>
        <Form.Label column="sm" lg={2}>
          Documento
        </Form.Label>
        <Form.Control name="document" size="sm" type="text" placeholder="Ingrese documento" required/>
        
        <Form.Label column="sm" lg={2}>
          Teléfono
        </Form.Label>
        <Form.Control name="phone" size="sm" type="text" placeholder="Ingrese teléfono" required/>
        
        <Form.Label column="sm" lg={2}>
          Monto
        </Form.Label>
        <Form.Control name="value" size="sm" type="number" placeholder="Ingrese monto a recargar" required min="1"/>
      
        <Button variant="primary" type="submit" size="md" block>
          Guardar
        </Button>
      </Form>
    </Container>
    );
  }
});

export default BalanceForm;
