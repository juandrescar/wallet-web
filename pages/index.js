import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ClientList from '../components/ClientList';
import { Card, Spinner } from 'react-bootstrap';
import {index} from '../api/wallet';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientPage(props) {
  const {
    errors,
    success,
    message,
    loading,
  } = props;

  const [clients,setClients]=useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    console.log(clients)
  }, [clients]);

  const fetchClients = async()=>{
    const response = await index();
    setClients(response.data)    
  }

  return (
    <Layout>
      <Card className="m-3 pt-2">
        {
          (loading) ?
            <Spinner animation="border" className="mx-auto" />
          : ''
        }
        
        <ClientList
          clients={clients}
        />
      </Card>
    </Layout>
  );
}

export default ClientPage;