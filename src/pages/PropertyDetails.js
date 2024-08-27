import Header from "../components/Header";
import PageBody from "../components/PageBody";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <PageBody />
      <section className="listing-summary">
        <div className="listing-details-section">
          <ListingDescription />
          <LocationAmenities />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
