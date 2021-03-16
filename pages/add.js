import React from 'react';
import Layout from '../components/layout';
import ClientForm from '../components/ClientForm';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientPage(props) {
  return (
    <Layout>
      <Card className="m-3 pt-2">
        <ClientForm/>
      </Card>
    </Layout>
  );
}

export default ClientPage;