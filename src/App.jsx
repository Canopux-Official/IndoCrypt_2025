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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speaker/>} />
          <Route path="/faq" element={<FAQ />} />


          {/* travel section */}
          <Route path="/venue" element={<Venue />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/places-of-interest" element={<PlacesOfInterest />} />


          {/* committe section */}
          <Route path="/program-committe" element={<ProgramCommitte />} />
          <Route path="/general-chairs" element={<GeneralChairs />} />
          <Route path="/organizing-committe" element={<OrganizingCommitte />} />
          



          <Route path="/about" element={<About />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/registration" element={<AuthorRegistration />} />
          <Route path="/guidelines" element={<AuthorGuidelines />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
