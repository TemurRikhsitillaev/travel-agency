import LandingPage from "./component/landing-page/landing-page.component";
import Partners from "./component/partners-page/partners.component";
import Recommendation from "./component/recommendation/recommendation.component";
import Results from "./component/results/results.component";
import HolidayPackages from "./component/holiday-packages/holiday-packages.component";
import BestChoice from "./component/best-choice/best-choice-component";
import Footer from "./component/footer-page/footer.component";
import Rights from "./component/rights/rights.component";

const App = () => {
  return (
    <>
      <LandingPage />
      <Partners />
      <Recommendation />
      <Results />
      <HolidayPackages />
      <BestChoice />
      <Footer />
      <Rights />
    </>
  );
};

export default App;
