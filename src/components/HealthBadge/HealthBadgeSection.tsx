import { getAllHealthBadges } from "../../utils/healthUtils";
import { Badge } from "./Badge";

const calculatePercentage = (props: { days: number; time: number }) => {
  const { days, time } = props;
  if(days > time) return 100;
  return Math.round((days / time) * 100);
};

const HealthBadgeSection = ({ days }) => {
  const badges = getAllHealthBadges({ reverse: false });
  const badgesByGroup = badges.map((badge) => badge.benefits.map((benefit) => benefit));
  console.log(badgesByGroup);


  return (
    <>
      <div className="row col-6">
        {badges.map((badge) =>
          badge.benefits.map((benefit) => {
            return (
              <div>
                  <Badge
                    title={benefit.title}
                    key={benefit.title + new Date().getTime()}
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
