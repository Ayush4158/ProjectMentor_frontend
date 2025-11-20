import { useQuery } from '@tanstack/react-query'
import api from '../api/axiosInstance'

export const useAuth = () => {
  return useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      const { data } = await api.get(`/api/user/me`, {withCredentials: true})
      return data.data
    },
    retry: false,
  })
}
