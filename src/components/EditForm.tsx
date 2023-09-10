import { useContext } from "react";
import { useInput } from "../hooks/useInput";
import dayjs from "dayjs";

import { GlobalContext } from "../context/GlobalContext";


const EditForm = ({profile}) => {
  const {updateProfileService} = useContext(GlobalContext)

  const displayName = useInput(profile.display_name, "text");
  const email = useInput(profile.username, "email");
  const age = useInput(profile.age, "text");
  const price = useInput(profile.cigarrates.price, "text");
  const cigarratesPerDay = useInput(profile.cigarrates.cigarrates_per_day, "number");
  const dateQuit = useInput(profile.date_quit ? profile.date_quit : dayjs().format("YYYY-MM-DD"), "date");
  const total = useInput(profile.cigarrates.total, "number");


  console.log(dateQuit.value)
    
  if(!profile.username) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const resp = {
      age: age.value,
      date_quit: dateQuit.value,
      cigarrates: {
        total: total.value,
        price: price.value,
        cigarrates_per_day: cigarratesPerDay.value
      }
    }

    updateProfileService(resp)


    console.log("SUBMIT")
  }

  return (
    <form className="general-form" onSubmit={handleSubmit}>
      <h4>Datos de cuenta</h4>
      <div className="form-row form-row-2-col">
        <div className="input-group">
          <label htmlFor="">Email de usuario</label>
          <input
            placeholder="nombre@correo.com"
            className="w-input"
            {...email}
            disabled
          />
        </div>
        <div className="input-group">
          <label htmlFor="">¿Cómo te llamas?</label>
          <input
            placeholder="Tu nombre"
            className="w-input"
            {...displayName}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">¿Cuál es tu edad?</label>
          <input
            className="w-input"
            placeholder={"Edad en años"}
            {...age}
            min={0}
            pattern="[0-9]*"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">¿Qué día dejaste de fumar?</label>
          <input {...dateQuit} className="w-input" />
        </div>
      </div>
      <h4>Información general</h4>
      <div className="form-row form-row-2-col">

        <div className="input-group">
          <label htmlFor="">¿Cuántos cigarrillos fumabas al día?</label>
          <input {...cigarratesPerDay} className="w-input" min={0}/>
        </div>

        <div className="input-group">
          <label htmlFor="">¿Cuánto te costaba cada cajetilla?</label>
          <input {...price} className="w-input" pattern="^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d+)?$"/>
        </div>
      </div>
      <div className="form-row form-row-2-col">
        <div className="input-group">
          <label htmlFor="">¿Cuántos cigarrillos tienen las cajetillas?</label>
          <input {...total} className="w-input" pattern="[0-9]*"/>
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;