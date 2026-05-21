import { api } from './api';

export interface RegisterPayload {
  fullname: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;
}

export async function registerUser(payload: RegisterPayload) {
  const response = await api.post('/auth/register', payload);

  return response.data;
}