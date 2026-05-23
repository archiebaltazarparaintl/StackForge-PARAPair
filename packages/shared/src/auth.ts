// packages/shared/src/auth.ts

import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface AuthUser extends JwtPayload {
  id: string;
  email?: string;
}

export async function verifyAccessToken(
  token?: string,
): Promise<AuthUser | null> {
  try {
    if (!token) return null;

    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded as AuthUser;
  } catch {
    return null;
  }
}