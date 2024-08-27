import StayCard from "./StayCard";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`similar-stays-section-wrapper ${className}`}>
      <div className="similar-stays-section">
        <div className="header2">
          <h3 className="similar-stays">Similar stays</h3>
          <a className="button7">View all</a>
        </div>
        <div className="stays-container">
          <StayCard
            brightwoodsEstate="Missisuaga Aistream"
            bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          />
          <StayCard
            brightwoodsEstate="Urban Loft"
            bridlepathOntarioCanada="Urban Loft"
          />
          <StayCard
            brightwoodsEstate="Forestville Cottages"
            bridlepathOntarioCanada="Simcoe, Ontario Canada"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
