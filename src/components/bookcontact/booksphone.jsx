import React, { useEffect } from 'react';
import { Form } from 'components/FormForContact/form';
import css from './booksphone.module.css';

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, changeSearchQuery } from '../../redux/tasksSlice';
import { getFilteredContacts } from 'redux/selectors';

const BookPhones = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { searchQuery } = useSelector(state => state.filters);
  const LocalStorage = JSON.parse(window.localStorage.getItem('bookContacts'));
  const listContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();


  useEffect(() => {
    if (LocalStorage) {
      localStorage.setItem('bookContacts', JSON.stringify(contacts)); 
    }
  }, [contacts, LocalStorage]);



  const handleFindContact = event => {
    const query = event.target.value;
    dispatch(changeSearchQuery(query));
  };


  const handleRemoveContact = id => {
    dispatch(removeContact(id));
     localStorage.setItem('bookContacts', JSON.stringify(contacts));
  };


  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <div className={css.container}>
        <h2 className={css.title_contact}>Contacts</h2>

        <label className={css.find_contact} htmlFor="">
          Find contacts by name
          <input
            className={css.input_find}
            type="text"
            name="filter"
            value={searchQuery}
            onChange={handleFindContact}
          />
        </label>

        <ul>
          {listContacts.map(({ id, name, number }) => (
            <li className={css.list_contact} key={id}>
              <p className={css.info_contact}>{name}</p>
              
              <p className={css.info_contact}>{number}</p>
              <button
                className={css.button_delet_contact}
                type="button"
                onClick={() => handleRemoveContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookPhones;
