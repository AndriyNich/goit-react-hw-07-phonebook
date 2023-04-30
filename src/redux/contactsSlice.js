import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import { nanoid } from 'nanoid';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {},
    [fetchContacts.rejected](state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
