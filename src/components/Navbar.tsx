import { AiOutlineLogin } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {logout} from "../hooks/authHooks";

const Navbar = () => {
  const {user} = useContext(GlobalContext);
  const [session, loading, error] = user

  console.log(session);
  return (
    <nav>
      <div className="container navbar__container">
        <span className="navbar__logo">Navbar</span>
        <dl>
          {loading ? <dt>Loading...</dt> : <ButtonSection session={session} /> }
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
