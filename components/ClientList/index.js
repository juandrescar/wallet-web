import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientList(props) {
  const {
    clients
  } = props;

  return(
    <Container className='mt-5'>
      <h2>Clientes Registrados</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clients && clients.map((item, i) =>
            <tr
              key={i}
            >
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          )} 
        </tbody>
      </Table>
    </Container>
  );
}

export default ClientList;
