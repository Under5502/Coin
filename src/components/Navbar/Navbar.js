import "./Navbar.scss";
import SearchIcon from "../../assets/Search.png";
import bellIcon from "../../assets/bell.png";
import menuIcon from "../../assets/menunav.png";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="Search-nav">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search..."
          />
          <img src={SearchIcon} alt="" className="img-search" />
        </div>
        <div className="navbar-right">
          <div className="member-nav">
            <span className="span-member">10.5842 $hark</span>
          </div>
          <div className="logo-nav">
            {" "}
            <img src={bellIcon} alt="" />
          </div>
          <div className="user-nav">
            <img
              className="img-user"
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/484281270_2148878502233950_8159823629092238793_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=08PEcaJYIGYQ7kNvgE-Fe2N&_nc_oc=AdlPnKwtZGHXdeOudnpnIBgh-ArYlVJtnv3I_Cx_bZ-wuoiGpukQVrCU-nBmFVxBI8Q&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=WzMh9_pxyk9c7iTX-KjEEw&oh=00_AYFpK6AFMxsRZSMjLzX8ciDjeyV2aCiDRBLYc2iiEkHpRw&oe=67E198F9"
              alt=""
            />
          </div>
          <div className="menu-nav">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
