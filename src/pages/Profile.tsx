import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { GlobalContext } from "../context/GlobalContext";
import { Dashboard } from "../components/Dashboard";

export const Profile = () => {
  const { user, profile, dispatch } = useContext(GlobalContext);

  const [username, setUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({
      type: "SET_USER",
      payload: {
        username: username,
        loading: false,
      },
    });
    console.log(username);
  };

  return (
    <MainLayout>
      <div className="container main__two-column">
        <div className="col-left">
          <h1>Profile</h1>
          <h4>Datos de cuenta</h4>
          <label htmlFor="">Email de usuario</label>
        </div>

        <div className="col-right">
          {!profile.username ? <h1>...</h1> : <h1>Profile {profile.username}</h1>}
          <Link to="/">Homepage</Link>
          <div>Profile</div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {
            profile.username && <Dashboard profile={profile}/>
          }
        </div>
      </div>
    </MainLayout>
  );
};
