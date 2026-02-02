import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hook/useAuth.ts'
import Loading from './Loading.tsx'

const ProtectedRoute = () => {

  const { data: user, isLoading, isError } = useAuth()

  if(isLoading) return <Loading/>
  if(isError || !user) return <Navigate to={'/login'} replace/>

  return <Outlet/>
}

export default ProtectedRoute
