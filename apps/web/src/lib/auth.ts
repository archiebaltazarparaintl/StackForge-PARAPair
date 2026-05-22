// src/lib/auth.server.ts
import 'server-only';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

type AuthUser = {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
  currentMode?: 'PERSONAL' | 'BUSINESS';
};

export async function getUserFromCookie(): Promise<AuthUser | null> {
  const token = (await cookies()).get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!,
    ) as jwt.JwtPayload;

    // ✅ IMPORTANT: normalize shape
    return {
      id: decoded.id as string,
      email: decoded.email as string,
      role: decoded.role as AuthUser['role'],
      currentMode: decoded.currentMode as AuthUser['currentMode'],
    };
  } catch {
    return null;
  }
}