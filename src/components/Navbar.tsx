import { AiOutlineLogin } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { logout } from "../hooks/authHooks";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  if (!user) return null;
  const [session, loading, error] = user;

  return (
    <>
      <nav>
        <div className="container navbar__container">
          <span className="navbar__logo">
            <Link to="/">Dejare de Fumar</Link>
            <span className="navbar__version">version alfa.1.2</span>
          </span>
          <dl className="navbar__content">
            {loading ? (
              <>
                <div className="avatar-circle skeleton"></div>{" "}
                <dt>
                  <div className="skeleton skeleton--navbar"></div>
                </dt>{" "}
              </>
            ) : (
              <ButtonSection session={session} />
            )}
            {error && <dt>{error}</dt>}
          </dl>
          <div className="menuButton" onClick={() => setOpen(!open)}>
            <AiOutlineMenu />
          </div>
        </div>
      </nav>

      {open && (
        <>
          <div className={`mobile-menu ${open ? "active" : ""}`}>
            <dl>
              <dt>
                <Link to="/profile">Profile</Link>
              </dt>
              <dt>
                <Link to="/edit">Edit</Link>
              </dt>
            </dl>
          </div>
          <div className="modal-menu" onClick={() => setOpen(false)}></div>
        </>
      )}
    </>
  );
};

const ButtonSection = ({ session }) => {
  return (
    <>
      {session ? (
        <>
          <dt className="navbar__user">
            <Link to="/profile" className="black-link">
              <Avatar
                username={
                  session.displayName ? session.displayName : "User Anonymous"
                }
              />
              {session.displayName ? session.displayName : session.email}
            </Link>
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
            <Link to="/signup" className="btn btn-sm">
              Sign Up
            </Link>
          </dt>
          <dt>
            <Link to="/login" className="btn btn--primary">
              <AiOutlineLogin style={{ "margin-right": "10px" }} />
              Login
            </Link>
          </dt>
        </>
      )}
    </>
  );
};

export default Navbar;
