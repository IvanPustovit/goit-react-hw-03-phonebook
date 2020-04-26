import React from "react";
import PropTypes from "prop-types";
import classes from "./ContactList.module.css";

const ContactList = ({ contacts, filterContacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {filterContacts.length
          ? filterContacts.map(el => (
              <li key={el.name}>
                {el.name} : {el.number}
                <button
                  type="button"
                  id={el.id}
                  className={classes.delete}
                  onClick={() => {
                    deleteContact(el.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))
          : contacts.map(el => (
              <li key={el.name}>
                {el.name} : {el.number}
                <button
                  type="button"
                  id={el.id}
                  className={classes.delete}
                  onClick={() => {
                    deleteContact(el.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
