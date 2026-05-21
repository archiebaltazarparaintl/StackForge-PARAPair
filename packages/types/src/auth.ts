export interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}