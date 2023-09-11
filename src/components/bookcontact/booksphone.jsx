import React  from 'react';
import { Form } from 'components/FormForContact/form';
import css from './booksphone.module.css';

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, changeSearchQuery } from '../../redux/tasksSlice';
import { getFilteredContacts } from 'redux/selectors';

const BookPhones = () => {
  const { searchQuery } = useSelector(state => state.filters);
  const listContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();





  const handleFindContact = event => {
    const query = event.target.value;
    dispatch(changeSearchQuery(query));
  };


  const handleRemoveContact = id => {
    dispatch(removeContact(id));
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
