export const Badge = (props: {
  title: string;
  description: string;
  svg;
  percentage: number;
}) => {
  const { title, description, svg, percentage } = props;
  return (
    <div>
      <div className="dashboard__group health-badge" style={{opacity: percentage>= 100 ? 1 : 0.4 }}>
        <div className="aux-icon">{svg}</div>
        <div style={{ width: "100%" }}>
          <div className="dashboard__label">Logros de salud</div>
          <div>
            <p className="health-badge__title">{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {percentage && <BadgeBarPercentage percentage={percentage} />}
    </div>
  );
};

const BadgeBarPercentage = (props: { percentage: number }) => {
  const { percentage } = props;

  const calculateColor = (percentage: number) => {
    if (percentage >= 100) return "#ffffff";
    if (percentage > 50) return "#fdcb6e";
    return "#ff7675";
  };

  return (
    <div className="health-badge__progress">
      <div className="progress-bar__container">
        <div className="health-badge__progress-bar"
          style={{ width: `${percentage}%`, backgroundColor: calculateColor(percentage) }}
        ></div>
      </div>
      <div className="health-badge__sr-only"> {percentage >= 100 ? '100% 🏆' : percentage + '%'}</div>
    </div>
  );
};
