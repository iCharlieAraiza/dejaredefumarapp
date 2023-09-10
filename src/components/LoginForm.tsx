import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useLoginWithGoogle, useLoginWithEmail} from "../hooks/authHooks";

const LoginForm = () => {
  const [googleLogin, loadingGoogle, errorGoogle] = useLoginWithGoogle();
  const [login, loading, error] = useLoginWithEmail();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(email, password)
  }


  return (
    <form className="sign-form" onSubmit={handleSubmit}>
      {(!loading && error) && <p>Ha ocurrido un error</p>}
      <h2 className="form-title">Inicia sesión</h2>
      <p className="form-description">Ingresa a tu cuenta. Si no tienes una, <Link to="/signup">Regístrate</Link></p>
      <div className="form-row">
        <div className="btn btn-form-social btn-form" onClick={() => googleLogin()}>
          <FcGoogle/>
          Iniciar sesión con Google
        </div>
      </div>
      <div className="form-title-container">
        <p className="form-title__label">con correo electrónico</p>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Email de usuario *</label>
          <input
            type="email"
            className="w-input"
            name="email"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Contraseña *</label>
          <input required type="password" name="password" className="w-input" />
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <button type="submit" className="btn btn-form btn--primary">
            Iniciar sesión
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm