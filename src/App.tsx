import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

import Homepage from "./pages/Homepage";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { Profile } from "./pages/Profile";
import { Edit } from "./pages/Edit";

import PrivateRoute from "./routes/PrivateRoute";
import SignUp from "./pages/SignUp";
import NotLoggedRoute from "./routes/NotLoggedRoute";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Health from "./pages/Health";

function App() {
  const { user } = useContext(GlobalContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Ups, element not found</h1>} />
          <Route
            path="signup"
            element={
              <NotLoggedRoute>
                <SignUp />
              </NotLoggedRoute>
            }
          />
          <Route
            path="login"
            element={
              <NotLoggedRoute>
                <Login />
              </NotLoggedRoute>
            }
          />
          <Route path="/" element={<Homepage session={user} />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="edit"
            element={
              <PrivateRoute>
                <Edit />
              </PrivateRoute>
            }
          />

          <Route
            path="health"
            element={
              <PrivateRoute>
                <Health />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
