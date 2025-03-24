import "./DashBoard.scss";
import Arrow from "../../assets/Arrow.png";
import Alarm from "../../assets/Alarm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function DashBoard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="title-dashboard">
          <span className="sp-title">My DashBoard</span>
        </div>
        <div className="signal-dashboard">
          <div className="signal-dashboard-l">
            <div className="signal-title">
              <span className="span-signal">Signal</span>
              <div className="chain">
                <span className="all-chain">All</span>
                <span className="all-chain-1">Chain</span>
                <img src={Arrow} alt="" className="back-img" />
              </div>
            </div>
          </div>
          <div className="signal-dashboard-r">
            <div className="create-l">
              <img className="img-create" src={Alarm} alt="" />
              <span className="title-create-l">Create</span>
              <span className="title-create-l1">Aleart</span>
            </div>
            <div className="create-r">
              <span className="title-create-r">Create</span>
              <span className="title-create-r1">Aleart</span>
              <FontAwesomeIcon icon={faArrowRight} className="img-back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
