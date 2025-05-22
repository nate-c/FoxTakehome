import React, { useState } from 'react';
import './ContactList.css';

const ContactList = ({contacts}) => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className='contact-list'>
        {
            contacts.length > 0 && 
            contacts.map((contact) =>
            <div className='contact'>
                {contact.name.first } {contact.name.last}
            </div>)
        }
    </div>
  );
};

export default ContactList;