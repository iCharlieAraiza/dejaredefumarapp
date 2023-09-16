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
            <Link to="/">
              <LogoSvg />
            </Link>
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

function LogoSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="193"
      height="25"
      fill="none"
      viewBox="0 0 193 25"
    >
      <ellipse cx="10" cy="11.5" fill="#DF4646" rx="10" ry="9.5"></ellipse>
      <path
        fill="#000"
        d="M34.443 20.23c-1.028 0-1.949-.264-2.761-.793-.813-.528-1.455-1.295-1.926-2.3-.472-1.006-.708-2.228-.708-3.665 0-1.455.239-2.682.716-3.682.483-1.006 1.134-1.764 1.952-2.276a5.016 5.016 0 012.736-.775c.767 0 1.397.13 1.892.392.494.255.886.565 1.176.929.29.358.514.696.673 1.014h.128V2.545h3.094V20H38.38v-2.063h-.188a5.27 5.27 0 01-.69 1.015c-.301.352-.699.653-1.193.903-.495.25-1.117.375-1.867.375zm.861-2.531c.653 0 1.21-.176 1.67-.529.46-.358.81-.855 1.049-1.491.238-.636.358-1.378.358-2.225 0-.846-.12-1.582-.358-2.207-.233-.625-.58-1.11-1.04-1.457-.455-.347-1.014-.52-1.679-.52-.688 0-1.261.179-1.722.537-.46.358-.806.852-1.04 1.483-.232.63-.349 1.352-.349 2.165 0 .818.117 1.548.35 2.19.238.636.588 1.14 1.048 1.508.466.364 1.037.546 1.713.546zm14.714 2.557c-1.313 0-2.446-.273-3.4-.819a5.54 5.54 0 01-2.191-2.335c-.511-1.011-.767-2.201-.767-3.57 0-1.347.256-2.53.767-3.546.517-1.023 1.239-1.818 2.165-2.387.926-.573 2.014-.86 3.264-.86.807 0 1.568.13 2.284.392a5.162 5.162 0 011.91 1.193c.556.54.993 1.227 1.312 2.062.318.83.477 1.819.477 2.966v.946h-10.73v-2.08h7.773c-.006-.59-.134-1.116-.384-1.576-.25-.466-.6-.832-1.048-1.1-.444-.266-.96-.4-1.551-.4-.631 0-1.185.153-1.662.46-.478.301-.85.7-1.117 1.194a3.434 3.434 0 00-.4 1.61v1.816c0 .761.139 1.414.417 1.96.279.54.668.954 1.168 1.244.5.284 1.085.426 1.755.426.45 0 .856-.062 1.22-.187.363-.13.678-.321.945-.571.267-.25.469-.56.605-.93l2.881.325a4.493 4.493 0 01-1.04 1.994c-.505.563-1.153 1-1.943 1.313-.79.306-1.693.46-2.71.46zm7.951-13.347h3.085V20.75c0 .943-.179 1.722-.537 2.335a3.296 3.296 0 01-1.55 1.372c-.677.302-1.498.452-2.464.452a5.38 5.38 0 01-.315-.008c-.097 0-.202-.003-.316-.009v-2.514c.086.006.162.008.23.008.069.006.14.009.214.009.59 0 1.014-.145 1.27-.435.255-.284.383-.701.383-1.253V6.91zm1.534-1.858a1.81 1.81 0 01-1.27-.486 1.577 1.577 0 01-.52-1.184c0-.466.174-.861.52-1.185.353-.33.776-.494 1.27-.494.489 0 .906.164 1.253.494.352.324.528.719.528 1.185 0 .46-.176.855-.528 1.184a1.77 1.77 0 01-1.253.486zm8.01 15.213c-.829 0-1.576-.148-2.24-.443a3.657 3.657 0 01-1.569-1.33c-.38-.585-.57-1.306-.57-2.164 0-.739.136-1.35.408-1.833.273-.483.645-.869 1.117-1.159a5.633 5.633 0 011.593-.656 12.964 12.964 0 011.85-.332c.767-.08 1.39-.151 1.866-.213.478-.069.824-.17 1.04-.307.222-.142.333-.361.333-.656v-.052c0-.642-.19-1.139-.572-1.491-.38-.352-.928-.529-1.644-.529-.756 0-1.356.165-1.799.495-.437.33-.733.719-.886 1.167l-2.88-.409c.227-.795.602-1.46 1.124-1.994a4.893 4.893 0 011.918-1.21c.756-.273 1.59-.41 2.506-.41.63 0 1.258.074 1.883.222a5.3 5.3 0 011.713.733c.517.335.932.793 1.245 1.372.318.58.477 1.304.477 2.174V20H71.46v-1.798h-.102a3.768 3.768 0 01-.793 1.022c-.335.313-.758.566-1.27.759-.506.188-1.1.281-1.781.281zm.802-2.267c.62 0 1.156-.122 1.61-.366a2.71 2.71 0 001.05-.989c.25-.409.374-.855.374-1.338v-1.543c-.097.08-.261.154-.494.222a7.002 7.002 0 01-.767.179c-.284.051-.566.096-.844.136l-.725.103c-.46.062-.872.164-1.235.306-.364.142-.65.341-.861.597-.21.25-.315.574-.315.972 0 .568.207.997.622 1.287.414.29.943.434 1.585.434zM77.048 20V6.91h2.992v2.18h.136c.239-.755.648-1.337 1.227-1.746a3.378 3.378 0 012.003-.622c.17 0 .36.008.571.025.216.012.395.031.537.06v2.838a3.245 3.245 0 00-.622-.12 5.725 5.725 0 00-.81-.06 3.12 3.12 0 00-1.517.367 2.682 2.682 0 00-1.048.997c-.256.427-.384.918-.384 1.475V20h-3.085zm14.292.256c-1.312 0-2.446-.273-3.4-.819a5.54 5.54 0 01-2.19-2.335c-.512-1.011-.768-2.201-.768-3.57 0-1.347.256-2.53.767-3.546.517-1.023 1.239-1.818 2.165-2.387.926-.573 2.014-.86 3.264-.86.807 0 1.568.13 2.284.392a5.162 5.162 0 011.91 1.193c.556.54.994 1.227 1.312 2.062.318.83.477 1.819.477 2.966v.946h-10.73v-2.08h7.773c-.006-.59-.134-1.116-.384-1.576a2.79 2.79 0 00-1.048-1.1c-.443-.266-.96-.4-1.551-.4-.63 0-1.185.153-1.662.46-.477.301-.85.7-1.117 1.194a3.433 3.433 0 00-.4 1.61v1.816c0 .761.139 1.414.417 1.96.279.54.668.954 1.168 1.244.5.284 1.085.426 1.756.426.449 0 .855-.062 1.218-.187.364-.13.68-.321.946-.571.267-.25.47-.56.606-.93l2.88.325a4.491 4.491 0 01-1.04 1.994c-.505.563-1.153 1-1.943 1.313-.79.306-1.693.46-2.71.46zM89.908 5.187l1.91-3.894h3.016l-2.616 3.894h-2.31zm44.398 1.722v2.386h-7.739V6.91h7.739zM128.502 20V5.673c0-.88.181-1.613.545-2.199a3.451 3.451 0 011.483-1.312c.619-.29 1.307-.435 2.063-.435.534 0 1.008.043 1.423.128.415.085.721.162.92.23l-.613 2.387a5.375 5.375 0 00-.495-.12 2.985 2.985 0 00-.664-.068c-.574 0-.981.14-1.219.418-.233.272-.35.664-.35 1.176V20h-3.093zm16.084-5.506V6.91h3.085V20h-2.992v-2.327h-.136a3.94 3.94 0 01-1.457 1.799c-.671.465-1.498.698-2.481.698-.858 0-1.616-.19-2.275-.57-.654-.387-1.165-.947-1.534-1.68-.37-.738-.554-1.63-.554-2.676V6.91h3.085v7.858c0 .83.227 1.489.682 1.977.454.489 1.051.733 1.79.733.454 0 .894-.11 1.321-.332a2.688 2.688 0 001.048-.989c.278-.443.418-.997.418-1.662zM150.363 20V6.91h2.949v2.224h.154c.272-.75.724-1.336 1.355-1.756.63-.426 1.383-.64 2.258-.64.887 0 1.634.217 2.242.648a3.39 3.39 0 011.295 1.748h.137a3.575 3.575 0 011.465-1.74c.694-.437 1.515-.655 2.464-.655 1.204 0 2.187.38 2.948 1.142.762.761 1.142 1.872 1.142 3.332V20h-3.093v-8.31c0-.812-.216-1.406-.648-1.78-.432-.382-.96-.572-1.585-.572-.745 0-1.327.233-1.747.699-.415.46-.623 1.06-.623 1.798V20h-3.025v-8.438c0-.676-.205-1.215-.614-1.619-.403-.403-.932-.605-1.585-.605-.443 0-.847.114-1.21.341a2.378 2.378 0 00-.87.946c-.215.403-.323.875-.323 1.415V20h-3.086zm24.826.264c-.829 0-1.576-.148-2.241-.443a3.656 3.656 0 01-1.568-1.33c-.381-.585-.571-1.306-.571-2.164 0-.739.136-1.35.409-1.833.273-.483.645-.869 1.116-1.159a5.638 5.638 0 011.594-.656 12.967 12.967 0 011.85-.332c.767-.08 1.389-.151 1.866-.213.477-.069.824-.17 1.04-.307.221-.142.332-.361.332-.656v-.052c0-.642-.19-1.139-.571-1.491-.381-.352-.929-.529-1.645-.529-.755 0-1.355.165-1.798.495-.438.33-.733.719-.886 1.167l-2.881-.409c.227-.795.602-1.46 1.125-1.994a4.895 4.895 0 011.918-1.21c.755-.273 1.59-.41 2.505-.41.631 0 1.259.074 1.884.222a5.298 5.298 0 011.713.733c.517.335.932.793 1.244 1.372.318.58.477 1.304.477 2.174V20h-2.966v-1.798h-.102a3.753 3.753 0 01-.792 1.022c-.336.313-.759.566-1.27.759-.506.188-1.1.281-1.782.281zm.802-2.267c.619 0 1.156-.122 1.61-.366.455-.25.804-.58 1.049-.989.25-.409.375-.855.375-1.338v-1.543c-.097.08-.262.154-.495.222a6.997 6.997 0 01-.767.179c-.284.051-.565.096-.843.136l-.725.103c-.46.062-.872.164-1.236.306-.363.142-.65.341-.86.597-.211.25-.316.574-.316.972 0 .568.208.997.622 1.287.415.29.944.434 1.586.434zM184.724 20V6.91h2.991v2.18h.137c.238-.755.647-1.337 1.227-1.746a3.378 3.378 0 012.003-.622c.17 0 .36.008.571.025.216.012.395.031.537.06v2.838a3.246 3.246 0 00-.623-.12 5.716 5.716 0 00-.809-.06 3.12 3.12 0 00-1.517.367 2.687 2.687 0 00-1.049.997c-.255.427-.383.918-.383 1.475V20h-3.085z"
      ></path>
      <path
        fill="#9B9B9B"
        d="M104.149 20.23c-1.028 0-1.949-.264-2.761-.793-.813-.528-1.455-1.295-1.926-2.3-.472-1.006-.708-2.228-.708-3.665 0-1.455.239-2.682.716-3.682.483-1.006 1.134-1.764 1.952-2.276a5.015 5.015 0 012.736-.775c.767 0 1.397.13 1.892.392.494.255.886.565 1.176.929.29.358.514.696.673 1.014h.128V2.545h3.094V20h-3.034v-2.063h-.188a5.272 5.272 0 01-.69 1.015c-.301.352-.699.653-1.193.903-.495.25-1.117.375-1.867.375zm.861-2.531c.653 0 1.21-.176 1.67-.529.461-.358.81-.855 1.049-1.491.238-.636.358-1.378.358-2.225 0-.846-.12-1.582-.358-2.207-.233-.625-.58-1.11-1.04-1.457-.455-.347-1.014-.52-1.679-.52-.688 0-1.261.179-1.722.537-.46.358-.806.852-1.039 1.483-.233.63-.35 1.352-.35 2.165 0 .818.117 1.548.35 2.19.238.636.588 1.14 1.048 1.508.466.364 1.037.546 1.713.546zm14.714 2.557c-1.313 0-2.446-.273-3.401-.819a5.537 5.537 0 01-2.19-2.335c-.511-1.011-.767-2.201-.767-3.57 0-1.347.256-2.53.767-3.546.517-1.023 1.239-1.818 2.165-2.387.926-.573 2.014-.86 3.264-.86.807 0 1.568.13 2.284.392a5.158 5.158 0 011.909 1.193c.557.54.994 1.227 1.313 2.062.318.83.477 1.819.477 2.966v.946h-10.73v-2.08h7.772c-.005-.59-.133-1.116-.383-1.576-.25-.466-.6-.832-1.048-1.1-.444-.266-.961-.4-1.552-.4-.63 0-1.184.153-1.661.46-.478.301-.85.7-1.117 1.194a3.429 3.429 0 00-.4 1.61v1.816c0 .761.139 1.414.417 1.96.279.54.668.954 1.168 1.244.5.284 1.085.426 1.755.426.449 0 .856-.062 1.219-.187a2.7 2.7 0 00.946-.571c.267-.25.469-.56.605-.93l2.881.325a4.487 4.487 0 01-1.04 1.994c-.505.563-1.153 1-1.943 1.313-.79.306-1.693.46-2.71.46z"
      ></path>
    </svg>
  );
}