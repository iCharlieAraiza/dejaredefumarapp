import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { Navigate } from "react-router-dom"
import { LoadingPagePlaceholder } from "../components/Placeholder"

const NotLoggedRoute = ({children}) => {
  const {user} = useContext(GlobalContext)
  const [session, loading, error] = user

  if(loading) return <LoadingPagePlaceholder/>

  if(!session && !loading) return (children)

  if(error) return <h1>{error}</h1>

  return <Navigate to="/profile" />


}

export default NotLoggedRoute