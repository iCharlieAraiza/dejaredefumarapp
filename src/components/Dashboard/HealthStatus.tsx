import { getHealthBadges } from "../../utils/healthUtils";

const HealthStatus = ({ days }) => {
  console.log(getHealthBadges(days));

  const badges = getHealthBadges(days);

  return (
    <>
      <div className="row col-6">
        {badges.reverse().map((badge) =>
          badge.benefits.reverse().map((benefit) => {
            return <Badge title={benefit.title} key={benefit.title} description={benefit.description} svg={benefit.svg} />;
          })
        )}
      </div>
    </>
  );
};

const Badge = ({ title, description , svg }) => {
  return (
    <div className="dashboard__group health-badge">
      <div className="aux-icon">
        {svg}
      </div>
      <div>
        <div className="dashboard__label">Logros de salud</div>
        <div>
          <p className="health-badge__title">{title}</p>
          <p>La sangre bombeará mucho mejor hacia el corazón y los músculos</p>
        </div>
      </div>
    </div>
  );
};



export default HealthStatus;
