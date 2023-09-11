import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialContacts = {
contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]}
   
;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      const contactExists = state.contacts.some(
        contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
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
      } else {
        state.contacts.push(action.payload);
      }
    },
    findContact: (state, action) => {
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const filterState = {
  searchQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterState,
  reducers: {
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addContact, findContact, removeContact } = contactsSlice.actions;
export const { changeSearchQuery } = filtersSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filtersReducer = filtersSlice.reducer;
