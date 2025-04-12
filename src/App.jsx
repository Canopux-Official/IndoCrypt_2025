import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Schedule from "./pages/Schedule";
import Speaker from "./pages/Speaker";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Venue from "./components/Venue";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
