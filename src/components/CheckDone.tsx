import { Link } from "react-router-dom"

const CheckDone = () => {
  return (
    <div>
      <h3>¡Listo! Has editato tu perfil</h3>
      <p>Tu información se ha actualizado correctamente. Ahota puede ver <Link to="/profile">tu perfil</Link></p>
    </div>
  )
}

export default CheckDone