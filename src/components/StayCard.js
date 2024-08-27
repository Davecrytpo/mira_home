import PropTypes from "prop-types";
import "./StayCard.css";

const StayCard = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
}) => {
  return (
    <div className={`staycard ${className}`}>
      <div className="favorite-icon">
        <div className="vector-parent">
          <img className="vector-icon1" alt="" src="/superhost-icon.svg" />
          <div className="superhost2">Superhost</div>
        </div>
        <div className="wrapper-heart-icon1">
          <img className="heart-icon2" alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className="stay-info">
        <div className="details1">
          <div className="location1">
            <div className="brightwoods-estate">{brightwoodsEstate}</div>
            <div className="bridlepath-ontario-canada1">
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="rating2">
            <div className="stars">4.8</div>
            <img className="count-icon" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="price1">
          <div className="value">
            <div className="night2">$355</div>
            <div className="night3">/night</div>
          </div>
          <img
            className="separator-icon"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className="guests">
            <img className="user-icon" loading="lazy" alt="" src="/user.svg" />
            <div className="guests1">2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StayCard.propTypes = {
  className: PropTypes.string,
  brightwoodsEstate: PropTypes.string,
  bridlepathOntarioCanada: PropTypes.string,
};

export default StayCard;
