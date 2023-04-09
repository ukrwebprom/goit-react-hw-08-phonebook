import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {items: [], isLoading: false, error: null},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })

    .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const filtered = state.items.filter(item => item.id !== action.payload.id);
        state.items = filtered;
      })

      .addMatcher(isAnyOf(
        fetchContacts.pending,
        addContact.pending,
        deleteContact.pending
      ), (state) => {state.isLoading = true})

      .addMatcher(isAnyOf(
        fetchContacts.rejected,
        addContact.rejected,
        deleteContact.rejected
      ), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
  },
})

export const contactReducer = contactSlice.reducer;