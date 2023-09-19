import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Navigate } from "react-router-dom"
import { LoadingPagePlaceholder } from "../components/Placeholder"

const PrivateRoute =  ({children}) => {
  const {user} = useContext(GlobalContext)
  const [session, loading, error] = user

  if(loading) return <LoadingPagePlaceholder/>

  if(!session && !loading) return <Navigate to="/" />

  if(error) return <h1>{error}</h1>

  return (children)
}

export default PrivateRoute