import MainLayout from "../layout/MainLayout";

import { useLoginWithGoogle } from "../hooks/authHooks";
import { Link } from "react-router-dom";

const Homepage = ({ session }) => {
  const [user, loading] = session;
  console.log(session);

  const [loginWithGoogle] = useLoginWithGoogle();

  return (
    <MainLayout>
      <div className="container">
        <Link to="/profile">Profile</Link>
        {loading && <h1>Loading...</h1>}
        <h1>Homepage</h1>
        {!user && (
          <button onClick={() => loginWithGoogle()}>Login with Google</button>
        )}
      </div>
      <div className="ph-item">
        <div className="ph-col-2">
          <div className="ph-avatar">
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
