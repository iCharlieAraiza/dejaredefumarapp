import MainLayout from "../layout/MainLayout";

import { useLoginWithGoogle } from "../hooks/authHooks";
import Hero from "../components/Hero";
import HomepageDescription from "../components/HomepageDescription";

import {LoadingPagePlaceholder} from '../components/Placeholder'

const Homepage = ({ session }) => {
  const [user, loading] = session;

  if (loading) {
    return <LoadingPagePlaceholder />
  }

  return (
    <MainLayout>
      <Hero />
      <HomepageDescription />
    </MainLayout>
  );
};

export default Homepage;
