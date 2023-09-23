import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { calculateDays } from "../utils/calculatorUtils";
import dayjs from "dayjs";


import MainLayout from "../layout/MainLayout";
import HealthBadgeSection from "../components/HealthBadge/HealthBadgeSection";

const Health = () => {
  const {profile} = useContext(GlobalContext);
  const [currentProfile, loading] = profile;

  if(loading) {
    return <h1>Loading…</h1>;
  }


  const days = calculateDays(currentProfile.date_quit, dayjs().format("YYYY-MM-DD"));

  return (
    <MainLayout>
      <div className="separator"></div>

      <div className="container">
        <h1>Tus records de salud</h1>
        <HealthBadgeSection days={days} />
      </div>
    </MainLayout>
  );
};

export default Health;
