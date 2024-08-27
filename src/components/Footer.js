import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="navigation-container">
        <div className="navigation-container-inner">
          <div className="support-links-parent">
            <div className="support-links">
              <div className="support">Support</div>
              <div className="help-centre">Help Centre</div>
              <a className="aircover">AirCover</a>
              <div className="combating-discrimination">
                Combating discrimination
              </div>
              <div className="supporting-people-with">
                Supporting people with disabilities
              </div>
              <div className="cencellation-options">Cencellation options</div>
              <div className="report-neighbourhood-concern">
                Report neighbourhood concern
              </div>
            </div>
            <div className="hosting-parent">
              <div className="hosting">Hosting</div>
              <div className="local-home">Local home</div>
              <div className="cover-for-hosts">Cover for hosts</div>
              <div className="hosting-resources">Hosting resources</div>
              <div className="community-forum">Community forum</div>
              <div className="hosting-responsibly">Hosting responsibly</div>
            </div>
            <div className="localhost-parent">
              <div className="localhost">Mira`s pathfinders</div>
              <div className="newsroom">Newsroom</div>
              <div className="new-features">New Features</div>
              <a className="careers">Careers</a>
              <div className="investres">Investres</div>
              <a className="gift-cards">Gift cards</a>
            </div>
          </div>
        </div>
      </div>
      <div className="legal-container">
        <div className="legal-container-inner">
          <div className="localhost-inc-all-rights-res-group">
            <div className="localhost-inc-all2">
              © 2024 Mira`s pathfinders, Inc. All Rights Reserved
            </div>
            <div className="links-container">
              <div className="privacy-policy2">Privacy Policy</div>
              <div className="terms-conditions2">{`Terms & Conditions`}</div>
              <div className="contact-us2">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
