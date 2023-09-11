import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { GlobalContext } from "../context/GlobalContext";
import { Dashboard } from "../components/Dashboard/Dashboard";

export const Profile = () => {
  const { user, profile } = useContext(GlobalContext);

  const [currentProfile, loading] = profile

  return (
    <MainLayout>
      <div className="separator"></div>
      <div className="container main__two-column">
        <div className="col-left">
          <h1>¡Muy buenas!</h1>
          <h4>Aquí van tus estadísticas</h4>
          <label htmlFor="">Email de usuario</label>
        </div>

        <div className="col-right">
          {
            loading && <h1>Loading...</h1>
          }
          {
            (currentProfile.username && !loading) && <Dashboard profile={currentProfile}/>
          }
        </div>
      </div>
    </MainLayout>
  );
};
