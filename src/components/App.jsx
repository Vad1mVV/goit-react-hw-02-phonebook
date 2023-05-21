import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Title } from "./Title";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  contactChange = (data) => {
    if(this.state.contacts.some(contact => contact.name === data.name)) {
      return alert(data.name + ' already in contacts')
    }

    const contact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    }
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  deleteContact = (e) => {
    e.preventDefault()

    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== e.target.id)
    })
  }

  filtration = (e) => {
    this.setState({
      filter: e.target.value.toLowerCase()
    })
  }

  render() {
    return <>
      <Title title='Phonebook' />
      <ContactForm contactChange={this.contactChange} />
      <Title title='Contacts' />
      <Filter filtration={this.filtration} />
      <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
    </>;
  }
}