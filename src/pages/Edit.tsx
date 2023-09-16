import { useContext, useState } from "react";

import MainLayout from "../layout/MainLayout";
import EditForm from "../components/EditForm";

import {Tabs} from '../components/Tabs'
import CheckDone from "../components/CheckDone";

import { GlobalContext } from "../context/GlobalContext";

export const Edit = () => {
  const [tabValue, setTabValue] = useState(1)
  const {profile} = useContext(GlobalContext)
  const [currentProfile, loading] = profile

  console.log("EDIT PAGE:", profile);

  return (
    <MainLayout>
      <div className="separator"></div>
      <div className="container">
        <div className="main__two-column">
          <div className="column-1 col-left">
            <h1>Actualiza tu información</h1>
            <p>Para calcular tus avances y tener un mejor seguimiento, agrega la siguiente información</p>
          </div>
          <div className="column-2">
            <Tabs 
              value={tabValue} 
              onChange={(e) => setTabValue(e)}
              items={[{value:1, label:"1. Configuración"}, {value:2, label:"2. Actualizar", disabled: true}]} />
              {loading && <h1>Loading...</h1>}
              {((currentProfile.username && !loading) && tabValue !== 2) && <EditForm profile ={currentProfile} callback = {() => setTabValue(2)} /> }
              {tabValue === 2 && <CheckDone />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
