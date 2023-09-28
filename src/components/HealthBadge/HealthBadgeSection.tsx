import { FIXED_HEALTH } from "../../utils/healthUtils";
import { Badge } from "./Badge";
import { useEffect } from "react";

const calculatePercentage = (props: { days: number; time: number }) => {
  const { days, time } = props;
  if(days > time) return 100;
  return Math.round((days / time) * 100);
};

const HealthBadgeSection = ({ days }) => {  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
