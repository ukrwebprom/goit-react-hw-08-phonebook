import { Contact } from './Contact';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import './contactlist.scss';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  
  return (
    <ul className="contact-list">
      {contacts.map(item => (
        
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export const ContactListHeader = ({ children }) => {
  return (
    <div className="contactlistheader">
      <h1>Contacts</h1>
      {children}
    </div>
  );
};
