import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");

    const verifyEmail = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/verify?email=${email}`);
      
      if (response.ok) {
        alert("Email verified! You can now sign in.");
        navigate("/sign-in-page");
      } else {
        alert("Verification failed. Please try again.");
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default VerificationPage;
