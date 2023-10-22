import style from './Landing.module.css';
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import { Link } from "react-router-dom";

const Landing = () => {

    const dispatch = useDispatch();
    dispatch(getPokemons());       

    return (
        <div className={style.mainContainer}>
            <Link to="/home" className={style.mainLink}><h1>GO TO POKEMON WORLD!</h1></Link>
        </div>        
    )
}

export default Landing;