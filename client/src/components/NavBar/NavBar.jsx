import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {

    return (
        <div className={style.mainContainer}>
            <Link to="/home"><strong>HOME</strong></Link>            
            <Link to="/create"><strong>Create your pokemon!</strong></Link> 
            <Link to="/about"><strong>ABOUT</strong></Link>
        </div>
    )
}

export default NavBar;