import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AmenitiesSection.css";

const AmenitiesSection = ({
  className = "",
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
}) => {
  const amenitiesSection1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`amenitiessection1 ${className}`}
      style={amenitiesSection1Style}
    >
      <div className="mdilake-parent">
        <img className="mdilake-icon" loading="lazy" alt="" src={mdilake} />
        <div className="lakeside">{lakeside}</div>
      </div>
      <div className="tablertools-kitchen-2-parent">
        <img
          className="tablertools-kitchen-2-icon"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className="kitchen">{kitchen}</div>
      </div>
      <div className="material-symbolsnest-cam-iq-o-parent">
        <img
          className="material-symbolsnest-cam-iq-o-icon"
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className="security-cameras-on">{securityCamerasOnProperty}</div>
      </div>
      <div className="ionwifi-parent">
        <img className="ionwifi-icon" loading="lazy" alt="" src={ionwifi} />
        <div className="wifi">{wifi}</div>
      </div>
    </div>
  );
};

AmenitiesSection.propTypes = {
  className: PropTypes.string,
  mdilake: PropTypes.string,
  lakeside: PropTypes.string,
  tablertoolsKitchen2: PropTypes.string,
  kitchen: PropTypes.string,
  materialSymbolsnestCamIqO: PropTypes.string,
  securityCamerasOnProperty: PropTypes.string,
  ionwifi: PropTypes.string,
  wifi: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default AmenitiesSection;
