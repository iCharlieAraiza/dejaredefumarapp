import MainLayout from "../layout/MainLayout";

import { useLoginWithGoogle } from "../hooks/authHooks";
import { Link } from "react-router-dom";

const Homepage = ({ session }) => {
  const [user, loading] = session;
  console.log(session);

  const [loginWithGoogle] = useLoginWithGoogle();

  return (
    <MainLayout>
      <div className="separator"></div>
      <div className="container">
        {loading && <h1>Loading...</h1>}
        <h1>Bienvenido a la versión pre alfa de la app de Dejare De Fumar</h1>
        <p>Si ya iniciaste sesión, puedes acceder a las siguientes secciones:</p>
        <ul>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/edit">Actualizar información</Link></li>
        </ul>
        <p>Si todavía no tienes cuenta o no inicias sesión, <Link to="/login">inicia sesión</Link> o <Link to="/signup">regístrate</Link></p>
      </div>
      <div className="ph-item">
        <div className="ph-col-2">
          <div className="ph-avatar">
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
