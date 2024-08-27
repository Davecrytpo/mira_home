import PropTypes from "prop-types";
import React, { useState } from "react"; 
import "./PageBody.css";

const PageBody = ({ className = "" }) => {
  const [bookingMessage, setBookingMessage] = useState(""); 

  
  const handleBooking = () => {
    setBookingMessage("Home successfully booked"); 
  };

  return (
    <section className={`page-body ${className}`}>
      <div className="content-layout">
        <div className="content-wrapper">
          <img
            className="main-content-icon"
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className="image-gallery">
            <img
              className="image-grid-icon"
              loading="lazy"
              alt=""
              src="/frame-46@2x.png"
            />
            <img
              className="image-grid-icon1"
              loading="lazy"
              alt=""
              src="/frame-47@2x.png"
            />
            <img
              className="image-grid-icon2"
              loading="lazy"
              alt=""
              src="/frame-48@2x.png"
            />
            <img
              className="image-grid-icon3"
              loading="lazy"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className="image-grid">
              <img
                className="gallery-image-icon"
                alt=""
                src="/gallery-image@2x.png"
              />
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="listing-info1">
          <div className="listing-details">
            <div className="listing-header">
              <div className="listing-title1">
                <div className="location-info">
                  <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                  <div className="bridlepath-ontario-canada">
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className="heart-icon1"
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className="listing-features">
                <div className="rating1">
                  <div className="rating-value">5.0</div>
                  <img
                    className="rating-star-icon"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="review-count">
                  <div className="reviews">200 Reviews</div>
                </div>
              </div>
            </div>
            <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
          <div className="booking-details-parent">
            <div className="booking-details">
              <div className="price-info">
                <b className="price-value">$500</b>
                <div className="nightly-rate">
                  <div className="night1">/night</div>
                </div>
              </div>
              <div className="booking-c-t-a">
                <div className="booking-button">
                  <div className="icontrend">
                    <div className="icon-parent">
                      <img className="icon1" alt="" src="/icon.svg" />
                      <div className="trend-background" />
                    </div>
                  </div>
                  <div className="booking-recommendation">
                    <div className="best-time-to">Best time to Book</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-flights-button2">
              <div className="button3" onClick={handleBooking}>Book this home</div> {/* Add onClick handler */}
            </div>
          </div>
          <div className="host-info">
            <a className="hosted-by">Hosted by:</a>
            <div className="host-details">
              <img
                className="host-picture-icon"
                loading="lazy"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className="host-name">
                <div className="michelle-ward">Mira`s pathfinder</div>
                <div className="joined-in-may">Joined in August 2021</div>
              </div>
              <div className="host-badge">
                <img className="badge-icon" alt="" src="/vector-2.svg" />
                <div className="superhost1">pathfinder</div>
              </div>
            </div>
          </div>
          {/* Display the booking message */}
          {bookingMessage && <div className="booking-message">{bookingMessage}</div>}
        </div>
      </div>
    </section>
  );
};

PageBody.propTypes = {
  className: PropTypes.string,
};

export default PageBody;
