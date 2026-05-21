import api from '@/services/api';

export const getAdminStats = async () => {
  const response = await api.get(
    '/dashboard/admin/stats',
  );

  return response.data;
};

export const getBusinessStats = async () => {
  const response = await api.get(
    '/dashboard/business/stats',
  );

  return response.data;
};

export const getPersonalStats = async () => {
  const response = await api.get(
    '/dashboard/personal/stats',
  );

  return response.data;
};