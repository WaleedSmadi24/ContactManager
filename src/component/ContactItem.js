import React from 'react';

function ContactItem({ number, contact, deleteContact }) {
  return (
    <div>
      <p>{number}. {contact.name} - {contact.email}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
