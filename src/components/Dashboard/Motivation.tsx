import { useState, useEffect, useContext } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { GlobalContext } from "../../context/GlobalContext";

const Motivation = ({ value }) => {
  const { updateWhitoutLoading } = useContext(GlobalContext);
  const [formValue, setFormValue] = useState(value);
  const [refValue, setRefValue] = useState(value);
  const motivationUpdate = useDebounce(formValue, 2000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refValue != motivationUpdate) {
      setLoading(false);
      console.log("MOTIVATION UPDATE", motivationUpdate);
      setRefValue(motivationUpdate);
      updateMotivation();
    }
    return () => {};
  }, [motivationUpdate]);

  const updateMotivation = async () => {
    try {
      await updateWhitoutLoading({ motivation: motivationUpdate });
    } catch (e) {
      console.log(e);
    }
  };

  const handler = (e) => {
    if (formValue !== e.target.innerHTML) {
      //Whatever you put here will act just like an onChange event
      setFormValue(e.target.textContent);
      setLoading(true);
    }
  };
  return (
    <>
      <div className="motivation-form__section">
        <div className="dashboard__label">
          💭 Tu motivación {loading && <span style={{"float":"right"}}>Cargando…</span>}
        </div>
        <div className="motivation-form__container">
          <div
            contentEditable="true"
            suppressContentEditableWarning={true}
            className="motivation-form"
            onKeyUp={handler}
          >
            {value}
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
