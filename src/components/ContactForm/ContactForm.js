import React from "react";
import classes from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({
  handleChangeName,
  nameValue,
  numberValue,
  handleChangeNumber,
  addToContacts,
  contactsId,
}) => {
  return (
    <div className={classes.form}>
      <form>
        <label className={classes["label-name"]} htmlFor={contactsId}>
          Name
          <input
            name="name"
            id={contactsId}
            type="text"
            value={nameValue}
            onChange={handleChangeName}
          />
        </label>

        <label className={classes["label-name"]}>
          Number
          <input
            name="number"
            type="text"
            value={numberValue}
            onChange={handleChangeNumber}
          />
        </label>

        <div>
          <button type="text" onClick={addToContacts}>
            Add contact
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNumber: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  addToContacts: PropTypes.func.isRequired,
  contactsId: PropTypes.string.isRequired,
};

export default ContactForm;
