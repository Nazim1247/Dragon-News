import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex items-center gap-2">
            <div>
                <img src={userIcon} alt="" />
            </div>
            <button className="btn btn-neutral btn-sm px-6 rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;