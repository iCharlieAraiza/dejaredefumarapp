import { HEALTH_BADGES, FIXED_HEALTH } from "../../utils/healthUtils";
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
        {FIXED_HEALTH.map((badge) => {
          return (
            <div key={badge.title + new Date().getTime() + Math.random()}>
                <Badge
                  title={badge.title}
                  description={badge.description}
                  svg={badge.svg}
                  percentage={calculatePercentage({ days, time: badge.time })}
                />
            </div>
          )
        }) }
      </div>
    </>
  );
};

export default HealthBadgeSection;
