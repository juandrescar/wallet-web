import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {pay} from '../../api/wallet';
var createReactClass = require('create-react-class');


var BalanceForm = createReactClass({

  toPay: async event => {
    event.preventDefault()

    var data = {
      document: event.target.document.value,
      phone: event.target.phone.value,
      value: event.target.value.value,
    }

    var success = true;
    const res = await pay(data).catch( error => {
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
      <h2>Pagar</h2>
      <Form onSubmit={this.toPay}>
        <Form.Label column="sm" lg={2}>
          Documento
        </Form.Label>
        <Form.Control name="document" size="sm" type="text" placeholder="Add a document"/>
        
        <Form.Label column="sm" lg={2}>
          Teléfono
        </Form.Label>
        <Form.Control name="phone" size="sm" type="text" placeholder="Add a phone"/>
        
        <Form.Label column="sm" lg={2}>
          Monto
        </Form.Label>
        <Form.Control name="value" size="sm" type="text" placeholder="Add a value"/>
      
        <Button variant="primary" type="submit" size="md" block>
          Guardar
        </Button>
      </Form>
    </Container>
    );
  }
});

export default BalanceForm;
