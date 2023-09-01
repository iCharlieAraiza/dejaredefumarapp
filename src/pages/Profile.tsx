import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

export const Profile = () => {
  console.log("Profile")
  return (
    <MainLayout>  
      <Link to="/">Homepage</Link>
      <div>Profile</div>
    </MainLayout>
  )
}
