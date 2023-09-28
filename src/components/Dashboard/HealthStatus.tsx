import { FIXED_HEALTH, getAllHealthBadges } from "../../utils/healthUtils";

const HealthStatus = ({ days }) => {
  const badges = FIXED_HEALTH.filter((badge) => {
    return badge.time <= days;
  });

  const lastTwoBadges = []
  let count = 0;

  for(let i = badges.length - 1; i >= 0; i--) {
    if(badges[i].time <= days) {
      console.log(badges[i])
      lastTwoBadges.push(badges[i])
      count++;
    }
    if(count === 2) break;
  }

  return (
    <>
      <div className="row col-6">
        {
        lastTwoBadges.map((badge) => {
              return (
                <Badge
                  title={badge.title}
                  key={badge.title}
                  description={badge.description}
                  svg={badge.svg}
                />)
            }
          )
          
        }
      </div>
    </>
  );
};

export const HealthDashboard = ({ days }) => {
  const badges = FIXED_HEALTH.filter((badge) => {
    return badge.time <= days;
  });

  const lastTwoBadges = []
  let count = 0;

  for(let i = badges.length - 1; i >= 0; i--) {
    if(badges[i].time <= days) {
      console.log(badges[i])
      lastTwoBadges.push(badges[i])
      count++;
    }
    if(count === 2) break;
  }

  return (
    <>
      <div className="row col-6">
        {
        lastTwoBadges.map((badge) => {
              return (
                <Badge
                  title={badge.title}
                  key={badge.title}
                  description={badge.description}
                  svg={badge.svg}
                />)
            }
          )
          
        }
      </div>
    </>
  );
}

export const Badge = ({ title, description, svg }) => {
  return (
    <div className="dashboard__group health-badge">
      <div className="aux-icon">{svg}</div>
      <div>
        <div className="dashboard__label">Logros de salud</div>
        <div>
          <p className="health-badge__title">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthStatus;
