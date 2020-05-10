import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "./utils/storage";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
    name: "",
    number: "",
  };
  notifyA = () => toast("Enter name and number");
  notifyB = () => {
    const { name } = this.state;
    toast(`${name} is already in contacts`);
  };

  addToContacts = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContacts = { name: name, number: number, id: shortid.generate() };

    if (
      this.state.contacts.find((contact) => contact.name === this.state.name)
    ) {
      this.notifyB();
    } else {
      this.setState((prev) => ({ contacts: [...prev.contacts, newContacts] }));
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  inputHandlerContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  getFilterContacts = (filter, contacts) =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

  deleteContact = (id) => {
    const { contacts } = this.state;
    const ContactListNew = contacts.filter((el) => el.id !== id);

    this.setState({
      contacts: ContactListNew,
    });
  };

  isContact = (e) => {
    const { name, contacts } = this.state;
    return contacts.some(
      (el) => el.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
  };

  componentDidMount() {
    const contactsData = storage.get("contacts");
    if (contactsData) {
      this.setState({
        contacts: contactsData,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      storage.save("contacts", this.state.contacts);
    }
  }

  contactsId = shortid.generate();
  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = this.getFilterContacts(
      this.state.filter,
      this.state.contacts,
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChangeName={this.inputHandlerContact}
          nameValue={name}
          numberValue={number}
          handleChangeNumber={this.inputHandlerContact}
          addToContacts={this.addToContacts}
          contactsId={this.contactsId}
          isContact={this.isContact}
        />

        <h2>Contacts</h2>
        <Filter
          handleChangeNameFilter={this.inputHandlerContact}
          // filterContacts={this.filterContacts}
          contacts={contacts}
          filter={filter}
        />
        <ContactList
          contacts={contacts}
          filterContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
