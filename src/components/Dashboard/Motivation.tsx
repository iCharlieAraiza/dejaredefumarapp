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
    const form = document.querySelector(".motivation-form");
    if (form) {
      const sel = window.getSelection();
      sel.removeAllRanges();
    }
  }
  , [value]);

  useEffect(() => {
    console.log("MOTIVATION UPDATE", motivationUpdate);
    console.log("REF VALUE", refValue);

    if (refValue != motivationUpdate) {
      setLoading(false);
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
    console.log(e.target.textContent);
    setFormValue(e.target.textContent);
    setLoading(true);
  };
  return (
    <>
      <div className="motivation-form__section">
        <div className="dashboard__label motivation__label">
          💭 Tu motivación {loading && <span style={{"float":"right"}}>Cargando…</span>}
        </div>
        <div className="motivation-form__container">
          <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="motivation-form"
            onBlur={handler}
          >
            { value }
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
