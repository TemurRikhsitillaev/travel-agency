import FirstPage from "./component/first-page/first-page.component";
import Partnership from "./component/partnership/partnership.component";
import Recommendation from "./component/recommendation/recommendation.component";
import AboutUs from "./component/about-us/about-us.component";
import HolidayPackages from "./component/holiday-packages/holiday-packages.component";
import BestChoice from "./component/best-choice/best-choice.component";
import Footer from "./component/footer/footer.component";
import CompanyRights from "./component/company-rights/company-rights.component";

const App = () => {
  return (
    <>
      <FirstPage />
      <Partnership />
      <Recommendation />
      <AboutUs />
      <HolidayPackages />
      <BestChoice />
      <Footer />
      <CompanyRights />
    </>
  );
};

export default App;
