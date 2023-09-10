import LoginForm from "../components/LoginForm";
import MainLayout from "../layout/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <div className="container">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default Login;
