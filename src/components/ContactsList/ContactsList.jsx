import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsListWraper, ContactsListItem } from './ContactsList.styled';
import { ContactItem } from './ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function ContactsList() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsListWraper>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading &&
        JSON.stringify(items, null, 2) &&
        items.map(elem => {
          return (
            <ContactsListItem key={elem.id}>
              <ContactItem item={elem} />
            </ContactsListItem>
          );
        })}
    </ContactsListWraper>
  );
}
