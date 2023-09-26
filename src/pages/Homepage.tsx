import MainLayout from "../layout/MainLayout";

import { useLoginWithGoogle } from "../hooks/authHooks";
import Hero from "../components/Hero";
import AppDescription from "../components/AppDescription";

import {LoadingPagePlaceholder} from '../components/Placeholder'

const Homepage = ({ session }) => {
  const [user, loading] = session;

  if (loading) {
    return <LoadingPagePlaceholder />
  }

  return (
    <MainLayout>
      <Hero />
      <AppDescription />
    </MainLayout>
  );
};

export default Homepage;
