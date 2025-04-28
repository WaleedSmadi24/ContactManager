import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            number={index + 1}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;