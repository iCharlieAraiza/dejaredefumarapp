import SignupForm from "../components/SignupForm";
import MainLayout from "../layout/MainLayout";


const SignUp = () => {
  return (
    <MainLayout>
      <div className="container">
        <SignupForm />
      </div>
    </MainLayout>

  );
};

export default SignUp;
