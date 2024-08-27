import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className="homepage">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="stays-section">
        <SearchSectionHeader />
        <section className="homes">
          <ListingItem
            listingImage="/listing-image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$300"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$210"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$180"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            heartIcon="/heart-icon-3.svg"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$230"
            showBestTime
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$350"
            showBestTime
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$400"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$150"
            showBestTime
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            heartIcon="/heart-icon-3.svg"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$235"
            showBestTime
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$205"
            showBestTime
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            heartIcon="/heart-icon-3.svg"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$215"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$205"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$275"
            showBestTime
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$300"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            heartIcon="/heart-icon-3.svg"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$220"
            showBestTime={false}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
