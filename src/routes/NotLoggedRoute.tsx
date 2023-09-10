import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { Navigate } from "react-router-dom"

const NotLoggedRoute = ({children}) => {
  const {user} = useContext(GlobalContext)
  const [session, loading, error] = user

  if(loading) return <h1>Loading...</h1>

  if(!session && !loading) return (children)

  if(error) return <h1>{error}</h1>

  return <Navigate to="/" />


}

export default NotLoggedRoute