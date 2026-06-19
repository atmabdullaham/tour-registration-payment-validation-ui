import EventDetails from "../components/EventDetails";
import Guest from "../components/Guest";
import ApplicationSteps from "../components/home/ApplicationSteps";
import Banner from "../components/home/Banner";
import FAQ from "../components/home/FAQ";
import RegistrationTimer from "../components/home/RegistrationTimer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <RegistrationTimer />
      <ApplicationSteps />
      <Guest />
      {/* <EventDetails /> */}
      <FAQ />
    </div>
  );
};

export default Home;
