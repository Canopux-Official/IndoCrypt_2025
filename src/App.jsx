import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Schedule from "./pages/Schedule";
import Speaker from "./pages/Speaker";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Venue from "./components/Venue";
import AccommodationPage from "./components/AccommodationPage";
import VisaPage from "./components/VisaPage";
import PlacesOfInterest from "./components/PlacesOfInterest";
import ProgramCommitte from "./components/ProgramCommitte";
import About from "./pages/About";
import CallForPapers from "./components/CallForPapers"
import PaperSubmission from "./components/PaperSubmission";
import AuthorRegistration from "./components/AuthorRegistration";
import AuthorGuidelines from "./components/AuthorGuidelines";
import GeneralChairs from "./components/GeneralChairs";
import OrganizingCommitte from "./components/OrganizingCommitte";
import AdvisoryCommitte from "./components/AdvisoryCommitte";
import RegisterPage from "./components/RegisterPage";
import Program from "./components/Program";
import PastIndocrypt from "./components/PastIndocrypt";
import Partners from "./components/Partners";
import FinanceAndAdvisoryCommitte from "./components/FinanceCommitte";
import PublicityChair from "./components/PublicityChair";
import IndustryChair from "./components/IndustryChair";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/utils/ScrollToTop";
import Sponsors from "./pages/Sponsors";
import RegistrationForIndianStudents from "./components/RegistrationForIndianStudents";
import RegistrationForForeignParticipants from "./components/RegistrationForForeignParticipants";
import CodeOfConduct from "./components/CodeOfConduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />


          {/* schedule section */}
          <Route path="/schedule" element={<Schedule />} />


          {/* speakers section */}
          <Route path="/speakers" element={<Speaker />} />



          {/* travel section */}
          <Route path="/venue" element={<Venue />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/places-of-interest" element={<PlacesOfInterest />} />


          {/* committe section */}
          <Route path="/program-committe" element={<ProgramCommitte />} />
          <Route path="/general-chairs" element={<GeneralChairs />} />
          <Route path="/organizing-committe" element={<OrganizingCommitte />} />
          <Route path="/advisory-committe" element={<AdvisoryCommitte />} />
          {/* <Route path="/technical-committe" element={<TechnicalProgramCommitte />} /> */}
          <Route path="/finance-committe" element={<FinanceAndAdvisoryCommitte />} />
          <Route path="/publicity-chair" element={<PublicityChair />} />
          <Route path="/industry-chair" element={<IndustryChair />} />



          {/* general section */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />


          {/* Authors*/}
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/registration" element={<AuthorRegistration />} />
          <Route path="/guidelines" element={<AuthorGuidelines />} />


          {/* program page */}
          <Route path="/program" element={<Program />} />
          <Route path="/past-indocrypt" element={<PastIndocrypt />} />

          {/* Sponsors page */}
          <Route path="/sponsors" element={<Sponsors />} />

          {/* User Registration Page */}
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/register-for-indian-participants" element={<RegistrationForIndianStudents />} />
          <Route path="/register-for-foreign-participants" element={<RegistrationForForeignParticipants />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />


          {/* Not found route */}
          <Route path="*" element={<NotFound />} />

          


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
