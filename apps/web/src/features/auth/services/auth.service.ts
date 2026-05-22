import axios from 'axios';
import api from '../../../lib/api';




const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:3001';

export interface RegisterPayload {
  fullname: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;
  otpCode: string;
}

export interface SendOtpPayload {
  email: string;
}

export const sendOtp = async (
  payload: SendOtpPayload,
) => {
  const response = await axios.post(
    `${API_URL}/auth/send-otp`,
    payload,
  );

  return response.data;
};

export const registerUser = async (
  payload: RegisterPayload,
) => {
  const response = await axios.post(
    `${API_URL}/auth/register`,
    payload,
  );

  return response.data;
};

export const verifyOtp = async (
  data: {
    email: string;
    otpCode: string;
  },
) => {
  return axios.post(
    `${API_URL}/auth/verify-otp`,
    data,
  );
};

export interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = async (
  payload: LoginPayload,
) => {
  const response = await api.post(
    '/auth/login',
    payload,
  );

  return response.data;
};