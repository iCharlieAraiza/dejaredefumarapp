const HomepageDescription = () => {
  return (
    <>
      <div className="homepage-description">
        <div className="top-app_description">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1437"
            height="38"
            fill="none"
            viewBox="0 0 1437 38"
          >
            <path
              fill="#F2EEE1"
              d="M26.5 18.393H0v19.5h1437v-29.5h-96l-58.5 10c-9 3-35.2 5.2-68-10s-116-6.334-153.5 0l-106 10h-73.5l-75.5-10H623.5l-116.5 19-99-19H275.5l-60.5 10c-27-3.334-91-10-131-10s-55 6.666-57.5 10z"
            ></path>
          </svg>
        </div>
        <div className="whole-container">
          <div className="container">
            <h3 className="homepage__statics-title">
              Más de 100 usuarios han dejado de fumar 230,000 cigarrillos con la
              app
            </h3>
            {/*
          <h3 className="homepage-subtitle__h3">Aquí podrás</h3>
          <ul>
          <li>Calcular ahorros</li>
          <li>Ver cómo a mejorado tu salud</li>
          <li>Tests y guías</li>
          <li>Soporte diario</li>
          <li>Estadísticas</li>
          </ul>
          
          <h3 className="homepage-subtitle__h3">
          Nuestro método está basado en estudios de
          </h3>
          <ul>
          <li>NSH</li>
          <li>Mayo Clinic</li>
          <li>
          CDC
          https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html
          </li>
          </ul>
          
          <h3 className="homepage-subtitle__h3">
          Pasasos para usar Dejaré de fumar
          </h3>
          <ol>
          <li>Regístrate (¡es gratis!)</li>
          <li>Ingresa unos datos básicos</li>
          <li>Se generará un panel de control completo</li>
          </ol>
        */}
          </div>
        </div>
        <div className="container">
          <div className="section-homepage__description">
            <div className="section-homepage__column">
              <h2 className="homepage__subtitle">
                Solo estás a un paso de dejar de fumar
              </h2>
              <p>
                Dejar de fumar no es una tarea sencilla, pero si tomas las
                desición y cuentras con las herramientas adecuadas, tu
                probabilidad de éxito serán enormes.
              </p>
              <p>
                Dejaré De Fumar cuenta con uno de los sistemas más completos que
                te ayudarán en el proceso de dejar de fumar.
              </p>
            </div>
            <div className="section-homepage__column">
              <img
                className="section-homepage__column-img"
                src="https://assets.nhs.uk/campaigns-cms-prod/images/circle-stoptober-yellow.width-640.png"
                alt="Homepage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageDescription;
