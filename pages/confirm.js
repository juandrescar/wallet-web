import React from 'react';
import Layout from '../components/layout';
import ConfirmForm from '../components/ConfirmForm';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientPage(props) {
  
  return (
    <Layout>
      <Card className="m-3 pt-2">
        <ConfirmForm/>
      </Card>
    </Layout>
  );
}

export default ClientPage;