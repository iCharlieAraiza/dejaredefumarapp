import React from "react";
import { getAllHealthBadges } from "../../utils/healthUtils";
import { Badge } from "./Badge";

const calculatePercentage = (props: { days: number; time: number }) => {
  const { days, time } = props;
  if(days > time) return 100;
  return Math.round((days / time) * 100);
};

const HealthBadgeSection = ({ days }) => {
  const badges = getAllHealthBadges({ reverse: true });
  return (
    <>
      <div className="row col-6">
        {badges.reverse().map((badge) =>
          badge.benefits.map((benefit) => {
            return (
              <div>
                  <Badge
                    title={benefit.title}
                    key={benefit.title}
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
