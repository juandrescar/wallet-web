import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {confirmPay} from '../../api/wallet';
var createReactClass = require('create-react-class');
import router from 'next/router'

var BalanceForm = createReactClass({
  
  toPay: async event => {
    event.preventDefault()

    console.log(router.query);

    var data = {
      id: router.query.id,
      pay:router.query.pay,
      code: event.target.code.value,
    }

    var success = true;
    const res = await confirmPay(data).catch( error => {
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
      <h2>Confirmar pago</h2>
      <Form onSubmit={this.toPay}>        
        <Form.Label column="sm" lg={2}>
          Código
        </Form.Label>
        <Form.Control name="code" size="sm" type="text" placeholder="Ingrese código" required minlength="6" maxlength="6"/>
      
        <Button variant="primary" type="submit" size="md" block>
          Guardar
        </Button>
      </Form>
    </Container>
    );
  }
});

export default BalanceForm;

