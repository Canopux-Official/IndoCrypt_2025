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
import CommitteePage from "./components/CommitteePage";

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
          <Route path="/venue" element={<Venue />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/places-of-interest" element={<PlacesOfInterest />} />
          <Route path="/committee" element={<CommitteePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
