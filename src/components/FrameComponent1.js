import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`review-section-wrapper ${className}`}>
      <div className="review-section">
        <div className="header1">
          <h3 className="reviews1">Reviews</h3>
          {/* <a className="button6">View all</a> */}
        </div>
        <div className="reviews-container">
          <ReviewCard
            avatars="/ellipse-12@2x.png"
            johnnyCash="Emmanuel "
            june2023="May 2024"
            review="5.0"
            michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
          />
          <ReviewCard
            avatars="/ellipse-12-1@2x.png"
            johnnyCash="James Simon"
            june2023="June 2023"
            review="4.5"
            michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          />
          <ReviewCard
            avatars="/ellipse-12-2@2x.png"
            johnnyCash="Fave Jacob"
            june2023="December 2023"
            review="4.8"
            michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
