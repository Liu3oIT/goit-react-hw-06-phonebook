import ACTIONS from './constans';

export const addContact = contact => {
  return {
    type: ACTIONS.ADD_CONTACT,
    payload: contact,
  };
};

export const removeContact = id => {
  return {
    type: ACTIONS.REMOVE_CONTACT,
    payload: id,
  };
};

export const findContact = data => {
  return {
    type: ACTIONS.FIND_CONTACT,
    payload: data,
  };
};

// filters
export const changeSearchQuery = searchQuery => {
  return {
    type: ACTIONS.CHANGE_SEARCH_QUERY,
    payload: searchQuery,
  };
};
