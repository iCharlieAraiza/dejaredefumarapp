import { AiOutlineLogin } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {logout} from "../hooks/authHooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user} = useContext(GlobalContext);
  if(!user) return null
  const [session, loading, error] = user

  return (
    <nav>
      <div className="container navbar__container">
        <span className="navbar__logo">
          <Link to="/">
            Navbar
          </Link>
          </span>
        <dl>
          {loading ? <><div className='avatar-circle skeleton'></div> <dt><div className="skeleton skeleton--navbar"></div></dt> </>: <ButtonSection session={session} /> }
        </dl>
      </div>
    </nav>
  );
};

const ButtonSection = ({session}) => {

  return(
    <>
        {session ? (
            <>
              <dt className="navbar__user">
                <Avatar username="John Doe" />
                Username
              </dt>
              <dt>
                <button className="btn" onClick={() => logout()}>
                  <AiOutlineLogin style={{ "margin-right": "10px" }} />
                  Sign Out
                </button>
              </dt>
            </>
          ) : (
            <>
              <dt>
                <button className="btn">Sign Up</button>
              </dt>
              <dt>
                <button className="btn btn--primary">
                  <AiOutlineLogin style={{ "margin-right": "10px" }} />
                  Login
                </button>
              </dt>
            </>
          )}
    </>
  )

}

export default Navbar;
