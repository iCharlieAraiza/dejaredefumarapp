const Badge = ({ children, title, value }) => {
  return (
    <div className="dashboard__group badge__item">
      <div className="aux-icon">
        {children }
      </div>
      <div>
        <div className="dashboard__label">{title}</div>
        <div className="dashboard__value">{value}</div>
        <p className="badge__description">Nada mal ¿no?</p>
      </div>
    </div>
  );
};

export default Badge;
