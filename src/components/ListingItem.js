import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ListingItem.css";

const ListingItem = ({
  className = "",
  listingImage,
  heartIcon,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  onListingItemContainerClick,
}) => {
  const navigate = useNavigate();

  const onListingItemContainerClick1 = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div
      className={`listing-item ${className}`}
      onClick={onListingItemContainerClick}
    >
      <img className="listing-image-icon" alt="" src={listingImage} />
      <div className="superhost-tag">
        <img className="superhost-icon" alt="" src="/superhost-icon.svg" />
        <div className="superhost">Mira`s pathfinder</div>
      </div>
      <div className="wrapper-heart-icon">
        <img className="heart-icon" loading="lazy" alt="" src={heartIcon} />
      </div>
      <div className="item-details">
        <div className="listing-info">
          <div className="listing-cont">
            <div className="listing-title">{listingTitle}</div>
            <div className="listing-subtitle">{listingSubtitle}</div>
          </div>
          <div className="rating-cont">
            <div className="rating">{rating}</div>
            <img
              className="star-icon"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="price-per-night">
            <div className="price">{price}</div>
            <div className="night">/night</div>
          </div>
          {showBestTime && (
            <div className="best-time">
              <img
                className="trend-icon"
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className="price-chart">Price chart</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  className: PropTypes.string,
  listingImage: PropTypes.string,
  heartIcon: PropTypes.string,
  listingTitle: PropTypes.string,
  listingSubtitle: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  showBestTime: PropTypes.bool,

  /** Action props */
  onListingItemContainerClick: PropTypes.func,
};

export default ListingItem;
