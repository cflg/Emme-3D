import { MdNotifications, MdSettings } from "react-icons/md";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Emme3D</span>
        </div>
        <div className="topright">
          <div className="topbaricons">
            <MdNotifications />
            <span className="numberNotifications">2</span>
          </div>
          <div className="topbaricons">
            <MdSettings />
          </div>
          <img
            src="https://yt3.ggpht.com/ytc/AMLnZu88nBmIH1JWt390yVlr16gnrYcnIPX5fP8B5MsoUw=s900-c-k-c0x00ffffff-no-rj"
            alt="admin"
            className="adminavatar"
          />
        </div>
      </div>
    </div>
  );
}
