import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import KYC from "./Pages/KYCv";
import KycRegister from "./Pages/kycRegister";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Pages/RegisterPage";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component wrapping Navbar, Routes, and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/kycRegister" element={<KycRegister />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forget" element={<Forget />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
