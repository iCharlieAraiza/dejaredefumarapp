import { set } from "firebase/database";
import { useState } from "react";

const Motivation = ({value=""}) => {
  const [formValue, setFormValue] = useState(value);
  const handler = (e) => {
    console.log(formValue);
    setFormValue(e.target.innerText);
  }
  return (
    <>
      <div className="motivation-form__section">
        <div className="dashboard__label">💭 Tu motivación</div>
        <div className="motivation-form__container">
          <div contentEditable="true" suppressContentEditableWarning={true}  className="motivation-form" onKeyDown={handler}>
            <p>{value}</p>
          </div>

          {formValue == "" && (
            <p className="motivation-placeholder">
              Escribe tus motivaciones para dejar de fumar. Por ejemplo:
              "Mejorar mi salud…", "Ahorrar para ir a la playa ⛱️"
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Motivation;
