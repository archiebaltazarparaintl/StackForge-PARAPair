import "server-only";
import jwt, { JwtPayload } from "jsonwebtoken";
export declare function getUserFromCookie(): Promise<string | jwt.JwtPayload | null>;
export interface AuthUserPayload extends JwtPayload {
    id: string;
    email: string;
    username: string;
    role: string;
}
