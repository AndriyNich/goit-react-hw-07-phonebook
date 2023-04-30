import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644eb1f54e86e9a4d8ff552d.mockapi.io/ap/v1/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

// export const fetchDeleteContact = createAsyncThunk('contacts/deleteContact', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });
