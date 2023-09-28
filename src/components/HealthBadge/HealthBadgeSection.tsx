import { HEALTH_BADGES } from "../../utils/healthUtils";
import { Badge } from "./Badge";

const calculatePercentage = (props: { days: number; time: number }) => {
  const { days, time } = props;
  if(days > time) return 100;
  return Math.round((days / time) * 100);
};

const HealthBadgeSection = ({ days }) => {
  const badges = HEALTH_BADGES
  const badgesByGroup = badges.map((badge) => badge.benefits.map((benefit) => benefit));
  console.log("NEW BADGES", badgesByGroup);


  return (
    <>
      <div className="row col-6">
        {badges.map((badge) =>
          badge.benefits.map((benefit) => {
            return (
              <div key={new Date().getTime() + Math.random()}>
                  <Badge
                    title={benefit.title}
                    description={benefit.description}
                    svg={benefit.svg}
                    percentage={calculatePercentage({ days, time: badge.time })}
                  />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default HealthBadgeSection;
