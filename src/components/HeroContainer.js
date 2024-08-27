import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import accommodations from './accommodationsData'; // Importing the data
import './HeroContainer.css';

const HeroContainer = ({ className = '' }) => {
  const [selectedAccommodation, setSelectedAccommodation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [availability, setAvailability] = useState('');

  const handleAccommodationChange = (e) => {
    setSelectedAccommodation(e.target.value);
  };

  const checkAvailability = () => {
    if (selectedAccommodation && startDate && endDate && guestCount <= 3) {
      const isAvailable = true; // This is where the actual availability logic goes
      setAvailability(isAvailable ? 'Home Available' : 'Not Available');
    } else {
      setAvailability('Please fill in all fields correctly.');
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
            <div className="autocompletebasic">
              <select
                className="text"
                value={selectedAccommodation}
                onChange={handleAccommodationChange}
              >
                <option value="">Select Accommodation</option>
                {accommodations.map((acc, index) => (
                  <option key={index} value={acc.listingTitle}>
                    {acc.listingTitle}
                  </option>
                ))}
              </select>
              <img className="iconhome" alt="Home Icon" src="/iconhome.svg" />
            </div>
            <div className="grouped">
              <div className="date-picker-container">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Check-in"
                  className="text date-picker"
                />
              </div>
              <div className="date-picker-container">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="Check-out"
                  className="text date-picker"
                />
              </div>
              <div className="guest-input">
                <input
                  className="label1"
                  type="number"
                  min="1"
                  max="3"
                  placeholder="Guests"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                />
                <img className="iconuser" alt="User Icon" src="/iconuser.svg" />
              </div>
            </div>
            <div className="search-button" onClick={checkAvailability}>
              <img className="iconsearch" alt="Search Icon" src="/iconsearch.svg" />
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
