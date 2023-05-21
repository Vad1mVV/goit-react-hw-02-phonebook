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

  contactChange = (e) => {
    e.preventDefault()

    if(this.state.contacts.some(contact => contact.name.includes(e.target.name.value))) {
      return alert(e.target.name.value + ' already in contacts')
    }

    const contact = {
      name: e.target.name.value,
      number: e.target.number.value,
      id: nanoid(),
    }
    this.setState({
      contacts: [...this.state.contacts, contact]
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
      <ContactList contacts={this.state.contacts} filter={this.state.filter} />
    </>;
  }
}