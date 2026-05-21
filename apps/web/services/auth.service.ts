import axios from 'axios';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:3000';

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