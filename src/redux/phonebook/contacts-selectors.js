const getContacts = (state) => state.contacts;

const getLoader = (state) => state.loader;

const getFilter = (state) => state.filter;

const getFilteredContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export { getContacts, getLoader, getFilter, getFilteredContacts };
