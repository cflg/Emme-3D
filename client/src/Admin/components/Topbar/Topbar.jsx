import { MdNotifications, MdSettings } from "react-icons/md"
import { Link } from "react-router-dom"
import "./Topbar.css"

export default function Topbar() {
    return (
        <div>
            <div className="topbaradminmarcos">
                <div className="topbarWrapper">
                    <div className="topleft">
<<<<<<< HEAD
                        <span className="logo">
                            <Link className="linkHomeAdmin" to={"/home"}>
                                Emme3D
                            </Link>
                        </span>
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
=======
                        <Link className="link" to="/">
                            <span className="logo">Emme3D</span>
                        </Link>
>>>>>>> c22c8370d15e22b869a89b0aec5cfc4e52834530
                    </div>
                </div>
            </div>
        </div>
    )
}
