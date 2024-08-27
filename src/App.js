import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PropertyDetails from './pages/PropertyDetails';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import AboutUs from './pages/AboutUs';
import VerificationPage from './pages/VerificationPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { action } = location;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (location.pathname) {
      case "/":
        title = "Homepage";
        metaDescription = "Welcome to the Homepage.";
        break;
      case "/property-details":
        title = "Property Details";
        metaDescription = "Details about the property.";
        break;
      case "/sign-up-page":
        title = "Sign Up";
        metaDescription = "Create a new account.";
        break;
      case "/sign-in-page":
        title = "Sign In";
        metaDescription = "Sign in to your account.";
        break;
      case "/about-us":
        title = "About Us";
        metaDescription = "Learn more about Mira's Pathfinders.";
        break;
      case "/verify":
        title = "Email Verification";
        metaDescription = "Verify your email address to activate your account.";
        break;
      default:
        title = "Mira's Pathfinders";
        metaDescription = "Welcome to Mira's Pathfinders.";
        break;
    }

    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) metaTag.content = metaDescription;

  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/verify" element={<VerificationPage />} />
    </Routes>
  );
}

export default App;