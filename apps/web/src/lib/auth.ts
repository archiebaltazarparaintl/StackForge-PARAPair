import { cookies } from 'next/headers';

import jwt from 'jsonwebtoken';

import API from './api';

interface JwtPayload {
  sub: string;
  email: string;
  username: string;
  role: string;
  currentMode: string;
}

export async function getCurrentUser() {
  try {
    const cookieStore =
      await cookies();

    const token =
      cookieStore.get(
        'access_token',
      )?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(
      token,
      process.env
        .NEXT_PUBLIC_JWT_SECRET ||
        'secret',
    ) as JwtPayload;

    return {
      id: decoded.sub,
      email: decoded.email,
      username:
        decoded.username,
      role: decoded.role,
      currentMode:
        decoded.currentMode,
    };
  } catch {
    return null;
  }
}

export async function getMe() {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch {
    return null;
  }
}
