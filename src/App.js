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
    filterContacts: [],
    filter: "",
    name: "",
    number: "",
  };
  notifyA = () => toast("Enter name and number");
  notifyB = () => {
    const { name } = this.state;
    toast(`${name} is already in contacts`);
  };

  addToContacts = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContacts = { name: name, number: number, id: shortid.generate() };

    this.isContact() !== true
      ? name.length && number.length
        ? this.setState(prev => ({
            contacts: [newContacts, ...prev.contacts],
            // filterContacts: [newContacts, ...prev.filterContacts],
          }))
        : this.notifyA()
      : this.notifyB();

    this.setState({
      name: "",
      number: "",
    });
  };

  inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  filterContacts = e => {
    e.preventDefault();
    e.persist();
    const { contacts } = this.state;
    this.setState(() => {
      const filterContacts = contacts.filter(
        el =>
          el.name.toLowerCase().includes(e.target.value) ||
          el.number.toLowerCase().includes(e.target.value),
      );
      return {
        filterContacts,
      };
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const ContactListNew = contacts.filter(el => el.id !== id);

    this.setState({
      contacts: ContactListNew,
      // filterContacts: ContactListNew,
    });
  };

  isContact = e => {
    const { name, contacts } = this.state;
    return contacts.some(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
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
    console.log(this.state.filterContacts);
  }

  contactsId = shortid.generate();
  render() {
    const { name, number, contacts, filter, filterContacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChangeName={this.inputHandler}
          nameValue={name}
          numberValue={number}
          handleChangeNumber={this.inputHandler}
          addToContacts={this.addToContacts}
          contactsId={this.contactsId}
          isContact={this.isContact}
        />

        <h2>Contacts</h2>
        <Filter
          handleChangeNameFilter={this.inputHandler}
          filterContacts={this.filterContacts}
          contacts={contacts}
          filter={filter}
        />
        <ContactList
          contacts={contacts}
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
