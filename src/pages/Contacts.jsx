import { useDispatch } from "react-redux";
import { fetchContacts } from 'redux/operations';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList, ContactListHeader } from "components/ContactList/ContactList";
import { useEffect } from "react";

export const Contacts = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

    return(
        <>
        <ContactForm />
        <ContactListHeader>
            <Filter />
        </ContactListHeader>
        <ContactList />
        </>
    )
}