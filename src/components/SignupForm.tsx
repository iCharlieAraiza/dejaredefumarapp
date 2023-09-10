import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRegisterWithEmail, useLoginWithGoogle} from "../hooks/authHooks";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [success, setSuccess] = useState(false);
  const [register, loading, error] = useRegisterWithEmail();
  const [googleLogin, loadingGoogle, errorGoogle] = useLoginWithGoogle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;
    console.log(email, password, repeatPassword)

    if (password !== repeatPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }else {
      register(email, password).then((data) => {
        console.log("REGISTERED", data)
        setSuccess(true)
      }).catch((err) => {
        console.log("ERROR", err)
      }
      )
    }
  };

  return (
    <form className="sign-form" onSubmit={handleSubmit}>
      {success && !loading && <p>Se ha registrado de forma adecuada</p>}
      {error && <p>Ha ocurrido un error</p>}
      <h2 className="form-title">Regístrate</h2>
      <p className="form-description">Crea una cuenta en dejaredefumar.com. ¿Ya te registrate? <Link to="/login">Inicia sesión</Link></p>
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
          <label htmlFor="">Repetir contraseña *</label>
          <input type="password" name="repeatPassword" className="w-input" />
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <button type="submit" className="btn btn-form btn--primary">
            Regístrate
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
