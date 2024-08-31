import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    // Input validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send verification email request to backend
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/send-verification-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email address to the backend
      });

      const data = await response.json();
      if (response.ok) {
        alert("Sign-up successful! Please check your email for a verification link.");
        // Clear the input fields
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        // Redirect to the sign-in page
        navigate("/sign-in-page");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <Header
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections">
        <div className="login-form-container">
          <div className="form">
            <div className="form-text">
              <h2 className="create-account">Create Account</h2>
            </div>
            <form className="form1" onSubmit={handleSignUp}>
              <div className="input-container">
                <img src="/iconaccount.svg" alt="" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="input-container">
                <img src="/iconpassword.svg" alt="" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input-container">
                <img src="/iconpassword.svg" alt="" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field"
                  placeholder="Confirm password"
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="button">Sign up</button>
            </form>
            <div
              className="i-already-have-container"
              onClick={onIAlreadyHaveClick}
            >
              <span>I already have an account. </span>
              <span className="login">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-content-wrapper">
        <div className="footer-content">
          <div className="localhost-inc-all-rights-res-parent">
            <div className="localhost-inc-all">
              © 2024 Mira's Pathfinders, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">Terms & Conditions</div>
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
