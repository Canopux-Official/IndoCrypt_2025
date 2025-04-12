import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
