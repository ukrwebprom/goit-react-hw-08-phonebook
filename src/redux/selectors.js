export const getContacts = state => state.contacts.items.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase()));
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filters.status;
export const getIsLogged = state => state.auth.isLogged;
export const getUser = state => state.auth.user;
export const getAuthError = state => state.auth.error;