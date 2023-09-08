export const getFilteredContacts = state => {
  const { searchQuery } = state.filters;
  const { contacts } = state.contacts; // Destructure `contacts` correctly

  if (!searchQuery) {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
