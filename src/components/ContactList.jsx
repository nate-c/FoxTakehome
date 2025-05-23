import React, { useState } from 'react';
import './ContactList.css';

const ContactList = ({contacts}) => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className='contact-list'>
      <div>Contacts</div>
        {
            contacts.length > 0 && 
            contacts.map((contact, index) =>
            <div className={`contact ${index % 2 ? 'striped' : ''}`}>
                {contact.name.first } {contact.name.last}
            </div>)
        }
    </div>
  );
};

export default ContactList;