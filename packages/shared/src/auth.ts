import "server-only";
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function getUserFromCookie() {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
}

export interface AuthUserPayload extends JwtPayload {
  id: string;
  email: string;
  username: string;
  role: string;
}