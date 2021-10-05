export const getVisibleContacts = state => {
  const allContacts = state.contacts.items
  const filter = state.contacts.filter
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
};
