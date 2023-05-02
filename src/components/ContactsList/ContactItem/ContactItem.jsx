import React from 'react';
import PropTypes from 'prop-types';
import { Item, Element, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <Item>
      <Element>{name}:</Element>
      <Element>{phone}</Element>
      <Button id={id} onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
