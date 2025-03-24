import "./Body.scss";
import Doge from "../../assets/DOGE.png";
import BTC from "../../assets/BTC.png";
import Ton from "../../assets/TON.png";
import Elip from "../../assets/Ellipse.png";

function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <div className="body-main">
          <div className="body-top">
            <div className="logo">
              <img src={Doge} alt="" className="img-doge" />
            </div>
            <span className="span-top">DOGE</span>
            <div className="time">6h ago</div>
          </div>
          <div className="body-bottom">
            <span className="sp-bottom">
              <span>Lorem Ipsum</span>  is simply dummy text of the printing{" "}
              <br /> and typesetting industry
            </span>
          </div>
        </div>
        <div className="body-main">
          <div className="body-top">
            <div className="logo">
              <img src={Ton} alt="" className="img-doge" />
            </div>
            <span className="span-top">Ton Volume</span>
            <div className="time">6h ago</div>
          </div>
          <div className="body-bottom">
            <span className="sp-bottom">
              <span>Lorem Ipsum</span>  is simply dummy text of the printing{" "}
              <br /> and typesetting industry
            </span>
          </div>
        </div>
        <div className="body-main">
          <div className="body-top">
            <div className="logo">
              <img src={Elip} alt="" className="img-doge" />
            </div>
            <span className="span-top">Top Whales</span>
            <div className="time">6h ago</div>
          </div>
          <div className="body-bottom">
            <span className="sp-bottom">
              <span>Lorem Ipsum</span>  is simply dummy text of the printing{" "}
              <br /> and typesetting industry
            </span>
          </div>
        </div>
        <div className="body-main">
          <div className="body-top">
            <div className="logo">
              <img src={BTC} alt="" className="img-doge" />
            </div>
            <span className="span-top">BTC Volume</span>
            <div className="time">6h ago</div>
          </div>
          <div className="body-bottom">
            <span className="sp-bottom">
              <span>Lorem Ipsum</span>  is simply dummy text of the printing{" "}
              <br /> and typesetting industry
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
