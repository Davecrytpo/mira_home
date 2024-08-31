import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import accommodations from './accommodationsData'; // Importing the data
import './HeroContainer.css';

const HeroContainer = ({ className = '' }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availability, setAvailability] = useState('');

  const checkAvailability = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        setAvailability('Please select a duration of at least 1 day.');
      } else if (diffDays > 10) {
        setAvailability('We do not accept stays longer than 10 days.');
      } else {
        setAvailability('Your stay is available.');
      }
    } else {
      setAvailability('Please select both check-in and check-out dates.');
    }
  };

  return (
    <div className={`hero-container ${className}`}>
      <div className="hero-container-inner">
        <div className="frame-parent">
          <div className="find-a-host-for-every-journey-parent">
            <b className="find-a-host-container">
              <span>{`Find a `}</span>
              <span className="host">Comfort</span>
              <span> for every journey</span>
            </b>
            <h3 className="discover-the-best">
              Discover the best local rental properties that fit your every travel need.
            </h3>
          </div>
          <div className="form5">
            <div className="date-picker-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Check-in"
                className="text date-picker"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
              />
            </div>
            <div className="date-picker-container">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Check-out"
                className="text date-picker"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
            <div className="search-button" onClick={checkAvailability}>
              <button className="button2">Search</button>
            </div>
          </div>
          {availability && <div className="availability-message">{availability}</div>}
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
