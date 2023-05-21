import React, { Component } from "react";
import { Title } from "./Title";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  contactChange = (e) => {
    e.preventDefault()

    const contact = {
      name: e.target.name.value,
      number: e.target.number.value,
      id: nanoid(),
    }
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return <>
      <Title title='Phonebook' />
      <ContactForm contactChange={this.contactChange} />
      <Title title='Contacts' />
      <ContactList contacts={this.state.contacts} />
    </>;
  }
}