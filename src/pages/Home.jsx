import ApplicationSteps from "../components/home/ApplicationSteps";
import Banner from "../components/home/Banner";
import RegistrationTimer from "../components/home/RegistrationTimer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <RegistrationTimer />
      <ApplicationSteps />
    </div>
  );
};

export default Home;
