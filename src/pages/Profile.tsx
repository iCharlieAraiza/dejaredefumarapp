import { useContext } from "react";
import MainLayout from "../layout/MainLayout";
import { GlobalContext } from "../context/GlobalContext";
import { Dashboard } from "../components/Dashboard/Dashboard";

import TargetSvg from "../assets/target.svg";

export const Profile = () => {
  const { user, profile } = useContext(GlobalContext);

  const [currentProfile, loading] = profile;

  return (
    <MainLayout>
      <div className="separator"></div>
      <div className="container main__two-column">
        <div className="col-left">
          {!loading && (
            <>
              <h1>
                ¡Muy buenas {" "}
                  <span style={{ color: "var(--color-orange)" }}> 
                  {
                    currentProfile?.display_name ? currentProfile.display_name.split(" ")[0]: " "
                  }</span>
                !
              </h1>
              <h4>Aquí van tus estadísticas</h4>
              <img src={TargetSvg} alt="target" />
            </>
          )}
        </div>

        <div className="col-right">
          {loading && <h1>Loading...</h1>}
          {currentProfile.username && !loading && (
            <Dashboard profile={currentProfile} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};
