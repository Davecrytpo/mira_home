import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      // Check if the user's email is verified
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/check-email-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password for verification check
      });

      const data = await response.json();
      if (response.ok) {
        if (data.message === 'Sign in successful') {
          alert("Welcome Onboard!");
          // Navigate to the Property Details page upon successful sign-in
          navigate("/property-details");
        } else {
          setError(data.message);
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="sign-in-page">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections1">
        <div className="login-form-container1">
          <div className="form2">
            <div className="form-text1">
              <h2 className="sign-in">Sign in</h2>
            </div>
            <div className="form-group">
              <div className="form3">
                <form className="form4" onSubmit={onSignIn}>
                  <div className="form-fields1">
                    <div className="email1">
                      <input
                        type="email"
                        className="email-address1"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <img
                        className="iconaccount1"
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className="password2">
                      <input
                        type="password"
                        className="password3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <img
                        className="iconpassword2"
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <div className="search-flights-button1">
                    <button type="submit" className="button1">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="frame-child" />
              <div
                className="dont-have-an-container"
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className="sign-up">Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-content1">
            <div className="localhost-inc-all1">
              © 2023 Mira's Pathfinders, Inc. All Rights Reserved
            </div>
            <div className="legal-links">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
