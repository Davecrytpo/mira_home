import PropTypes from "prop-types";
import "./ReviewCard.css";

const ReviewCard = ({
  className = "",
  avatars,
  johnnyCash,
  june2023,
  review,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={`reviewcard ${className}`}>
      <div className="review-card-container">
        <div className="reviewer-info">
          <img className="avatars-icon" loading="lazy" alt="" src={avatars} />
          <div className="details">
            <div className="johnny-cash">{johnnyCash}</div>
            <div className="june-2023">{june2023}</div>
          </div>
        </div>
        <div className="content">
          <div className="review">{review}</div>
          <img className="rating-icon" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  avatars: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  review: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,
};

export default ReviewCard;
