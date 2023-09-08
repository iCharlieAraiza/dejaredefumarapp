import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";


const EditForm = ({profile}) => {
  const email = useInput(profile.username, "email");
  const age = useInput(profile.age, "text");
  const price = useInput(profile.cigarrates.price, "text");
  const cigarratesPerDay = useInput(profile.cigarrates.cigarrates_per_day, "number");
  const dateQuit = useInput(profile.date_quit, "date");
  const total = useInput(profile.cigarrates.total, "number");



  console.log(profile.cigarrates.cigarrates_per_day)
    
  if(!profile.username) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
          />
        </div>
        <div className="input-group">
          <label htmlFor="">¿Cuál es tu edad?</label>
          <input
            className="w-input"
            {...age}
            min={1}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">¿Qué día dejaste de fumar?</label>
          <input type="date" className="w-input" />
        </div>
      </div>
      <h4>Información</h4>
      <div className="form-row form-row-2-col">

        <div className="input-group">
          <label htmlFor="">¿Cuántos cigarrillos fumabas al día?</label>
          <input {...cigarratesPerDay} className="w-input" min={0}/>
        </div>

        <div className="input-group">
          <label htmlFor="">¿Cuánto te costaba cada cajetilla?</label>
          <input {...price} className="w-input" />
        </div>
      </div>
      <div className="form-row form-row-2-col">
        <div className="input-group">
          <label htmlFor="">¿Cuántos cigarrillos tienen las cajetillas?</label>
          <input {...total} className="w-input" />
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