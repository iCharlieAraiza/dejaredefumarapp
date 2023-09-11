import { Link } from "react-router-dom";

import { calculateDays } from "../../utils/calculatorUtils";
import {
  StarIcon,
  MoneyIcon,
  CigarreteIcon,
  ClockIcon,
  HeartIcon,
} from "./Icons";
import Badge from "./Badge";

import dayjs from "dayjs";

export const Dashboard = ({ profile }) => {
  console.log(profile);
  const days = calculateDays(profile.date_quit, dayjs().format("YYYY-MM-DD"));
  const price = profile.cigarrates.price ? profile.cigarrates.price : 0;
  const cigarretesBox = profile.cigarrates.total
    ? profile.cigarrates.total
    : 20;
  const cigarretesPerDay = profile.cigarrates.cigarrates_per_day
    ? profile.cigarrates.cigarrates_per_day
    : 0;

  const cigarretesPerDayPrice =
    ((price * cigarretesPerDay) / cigarretesBox) * days;

  return (
    <section className="dashboard__container">
      <div className="row dashsboard__top-row">
        <div className="dashboard__group">
          <div className="dashboard__label">
            Nivel:
            <span className="dashboard__level-tag">
              1 <StarIcon />
            </span>
          </div>
        </div>
        <div className="dashboard__group">
          <Link to="/edit" className="dashboard__edit">
            Editar información
          </Link>
        </div>
      </div>

      <div className="row col-6 dashboard__first-section">
        <div className="dashboard__group">
          <div className="dashboard__label">Llevas sin fumar</div>
          <div className="dashboard__value underline-value">
            <span>{days}</span> días
          </div>
          <p className="badge__days--p">
            Recuerda, los primeros 2 meses son escenciales. Después de esto,
            todo es más sencillo
          </p>
        </div>
        <div className="dashboard__group text-right-lg">
          <div className="dashboard__label">Siguiente objetivo</div>
          <div className="dashboard__value dashboard__value--small">33/100</div>
        </div>
      </div>

      <div className="row col-3">
        <Badge
          title="Has ahorrado"
          value={`${Math.round(cigarretesPerDayPrice)}€`}
        >
          <MoneyIcon />
        </Badge>

        <Badge
          title="Cigarrillos sin fumar"
          value={`${cigarretesPerDay * days}`}
        >
          <CigarreteIcon />
        </Badge>

        <Badge
          title="Minutos de vida"
          value={`${cigarretesPerDay * days * 11}`}
        >
          <ClockIcon />
        </Badge>
      </div>

      <div className="badge-section">
        <div className="row">
          <a href="#" className="dashboard__readmore">
            Insignias ganadas →
          </a>
        </div>
        <div className="row col-6">
          <div className="dashboard__group health-badge">
            <div className="aux-icon">
              <HeartIcon />
            </div>
            <div>
              <div className="dashboard__label">Logros de salud</div>
              <div>
                <p className="health-badge__title">
                  Mejora después de 3 semanas
                </p>
                <p>
                  La sangre bombeará mucho mejor hacia el corazón y los músculos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
