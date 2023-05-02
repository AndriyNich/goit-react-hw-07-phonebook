export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  const filterL = filter.toLowerCase().trim();
  return {
    ...contacts,
    items: contacts.items.filter(elem =>
      elem.name.toLowerCase().includes(filterL)
    ),
  };
};
