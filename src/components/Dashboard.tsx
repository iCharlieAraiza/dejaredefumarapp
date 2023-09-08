import React from "react";

export const Dashboard = ({profile}) => {
    
  return (
    <section>
      <div className="row">
        <div className="dashboard__group">
          <div className="dashboard__label">Nivel</div>
        </div>
      </div>

      <div className="row col-6">
        <div className="dashboard__group">
          <div className="dashboard__label">Llevas sin fumar</div>
          <div className="dashboard__value">0 días</div>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Siguiente objetivo</div>
          <div className="dashboard__value">33/100</div>
        </div>
      </div>

      <div className="row col-3">
        <div className="dashboard__group">
          <div className="dashboard__label">Dinero ahorrado</div>
          <div className="dashboard__value">0€</div>
          <p>Nada mal ¿no?</p>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Cigarrillos no fumados</div>
          <div className="dashboard__value">0</div>
          <p>¡Sigue así!</p>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Vida recuperada</div>
          <div className="dashboard__value">0 días</div>
        </div>
      </div>

      <div className="row">
        <a href="#">
          Insignias ganadas
        </a>
      </div>
      <div className="row col-6">
        <div className="dashboard__group">
          <div className="dashboard__label">Logros de salud</div>
          <div className="dashboard__value">
            <p>Mejora después de 3 semanas</p>
            <p>
            La sangre bombeará mucho mejor hacia el corazón y los músculos 
            </p>
          </div>
          </div>
      </div>
    </section>
  );
};
