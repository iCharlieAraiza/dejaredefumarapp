import { useContext, useState } from "react";

import MainLayout from "../layout/MainLayout";
import EditForm from "../components/EditForm";

import {Tabs} from '../components/Tabs'

import { GlobalContext } from "../context/GlobalContext";

export const Edit = () => {
  const [tabValue, setTabValue] = useState(1)
  const {profile} = useContext(GlobalContext)

  return (
    <MainLayout>
      <div className="container">
        <div className="main__two-column">
          <div className="column-1">
            <h1>Editar datos</h1>
          </div>
          <div className="column-2">
            <Tabs 
              value={tabValue} 
              onChange={(e) => setTabValue(e)}
              items={[{value:1, label:"1. Configuración"}, {value:2, label:"2. Actualizar", disabled: true}]} />
              {profile.username && <EditForm profile ={profile} /> }
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
