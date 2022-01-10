import { api } from 'config/api';

export const getSearchList = (search) => api.get(`/items/${search}`)

export const getDetails = (id) => api.get(`/item/${id}`)