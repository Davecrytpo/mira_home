import PropTypes from "prop-types";
import "./DetailsCard.css";

const DetailsCard = ({
  className = "",
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={`detailscard ${className}`}>
      <img className="detailscard-child" loading="lazy" alt="" src={frame65} />
      <div className="dedicated-workspace-parent">
        <div className="dedicated-workspace">{dedicatedWorkspace}</div>
        <div className="a-private-room">{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  className: PropTypes.string,
  frame65: PropTypes.string,
  dedicatedWorkspace: PropTypes.string,
  aPrivateRoomEquippedWithW: PropTypes.string,
};

export default DetailsCard;
