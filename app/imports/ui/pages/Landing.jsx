import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
     <div className='digits-landing-background'>
        <Grid container centered stackable columns={3}>

          <Grid.Column textAlign='center'>
            <Icon name='users' size='huge'></Icon>
            <Header as='h1'>Multiple Users</Header>
            <p>
              This address book enables any number of users to register and sace their business contacts. You can only see the contacts you have created.
            </p>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='file alternate outline' size='huge'></Icon>
            <Header as='h1'>Contact Details</Header>
            <p>
              For each contact, you can save their name, address, and phone number.
            </p>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='calendar' size='huge'></Icon>
            <Header as='h1'>Timestamped Notes</Header>
            <p>
              Each time you make contact with a contact, you can write a note that summarized thje conversation. This note is saved along with a timestamp with the   contact.
            </p>
          </Grid.Column>

        </Grid>
     </div>
    );
  }
}

export default Landing;
