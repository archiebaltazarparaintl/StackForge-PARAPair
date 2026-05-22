/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUserRole = (user: any) => {
  return user?.role ?? 'USER';
};

export const isAdmin = (user: any) => {
  return ['ADMIN', 'SUPER_ADMIN'].includes(user?.role);
};