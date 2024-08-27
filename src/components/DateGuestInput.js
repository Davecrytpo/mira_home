import PropTypes from "prop-types";
import "./DateGuestInput.css";

const DateGuestInput = ({ className = "", label }) => {
  return (
    <div className={`date-guest-input ${className}`}>
      <div className="label">{label}</div>
      <div className="icon">
        <img
          className="calendartodayfilled-icon"
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

DateGuestInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default DateGuestInput;
