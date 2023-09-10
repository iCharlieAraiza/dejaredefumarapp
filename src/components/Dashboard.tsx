import { calculateDays } from "../utils/calculatorUtils";
import dayjs from "dayjs";

export const Dashboard = ({profile}) => {
  console.log(profile)
  const days = calculateDays(profile.date_quit, dayjs().format("YYYY-MM-DD"));
  const price = profile.cigarrates.price ? profile.cigarrates.price : 0;
  const cigarretesBox = profile.cigarrates.total ? profile.cigarrates.total : 20;
  const cigarretesPerDay = profile.cigarrates.cigarrates_per_day ? profile.cigarrates.cigarrates_per_day : 0;

  const cigarretesPerDayPrice = ((price * cigarretesPerDay) / cigarretesBox) * days

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
          <div className="dashboard__value">{ days } días</div>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Siguiente objetivo</div>
          <div className="dashboard__value">33/100</div>
        </div>
      </div>

      <div className="row col-3">
        <div className="dashboard__group">
          <div className="dashboard__label">Dinero ahorrado</div>
          <div className="dashboard__value">{cigarretesPerDayPrice}€</div>
          <p>Nada mal ¿no?</p>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Cigarrillos no fumados</div>
          <div className="dashboard__value">{cigarretesPerDay * days}</div>
          <p>¡Sigue así!</p>
        </div>
        <div className="dashboard__group">
          <div className="dashboard__label">Vida recuperada</div>
          <div className="dashboard__value">{cigarretesPerDay * days * 11} minutos</div>
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
