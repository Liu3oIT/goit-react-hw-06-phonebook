import ACTIONS from './constans';
import { toast } from 'react-toastify';
const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const getInitialData = () => {
  const savedContacts = JSON.parse(localStorage.getItem('bookContacts'));
  return savedContacts || initialContacts.contacts;
};
export const contactsReducer = (state = {contacts:getInitialData()}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      const newContact = action.payload;
      const contactExists = state.contacts.some(
        contact => contact.name === newContact.name
      );
      if (contactExists) {
        toast.error('Already Added.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return state;
      }

      const updatedContacts = [...state.contacts, newContact];
      return {
        ...state,
        contacts: updatedContacts,
      };
    case ACTIONS.FIND_CONTACT:
      const name = action.payload.name.toLowerCase();
      state.contacts.some(contact => contact.name.toLowerCase() === name);

      return state;
    case ACTIONS.REMOVE_CONTACT:
      const id = action.payload;
      const updatedContactsAfterRemove = state.contacts.filter(
        contact => contact.id !== id
      );

      return { ...state, contacts: updatedContactsAfterRemove };
    default:
      return state;
  }
};

// Filter
const filterstate = {
  searchQuery: '',
};
export const filtersReducer = (state = filterstate, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};
