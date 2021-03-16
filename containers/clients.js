import React from 'react';
import ClientPage from '../pages';
import {create, get, read, update, remove, readSlack, toggleTask} from '../api/wallet';

class Clients extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      errors: [],
      item: {
        title: '',
        slackChannel: {},
        date: new Date(),
        description: ''
      },
      method: 'create',
      success: false,
      loading: true,
      message: null,
      items: [],
      slackChannels: []
    };
  }

  async onGetClient(item) {
    try {
      const {items} = this.state;
      const response = await get({"phone": "+5804143954723", "document": "123"});
      console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  render(){
    const {} = this.state;
    return (
      <ClientPage
        onGetClient = {this.onGetClient}
      />
    );
  }
}

export default Clients;