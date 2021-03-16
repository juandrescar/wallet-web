import React from 'react';
import Layout from '../components/layout';
import BalanceForm from '../components/BalanceForm';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientPage(props) {
  return (
    <Layout>
      <Card className="m-3 pt-2">
        <BalanceForm/>
      </Card>
    </Layout>
  );
}

export default ClientPage;