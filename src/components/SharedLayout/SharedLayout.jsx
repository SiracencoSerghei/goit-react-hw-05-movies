import { NavLink, Outlet } from "react-router-dom";
import Logo from "components/Logo";
import './SharedLayout.css';


const SharedLayout = () => {

    return (<div className="container">
        <header>
            <nav className="nav nav-underline">
                <Logo color="white" bgr="#0d6efd" />
                <NavLink to="/" className="nav-link navlink"> Home </NavLink>
                <NavLink to="/movies" className="nav-link navlink">Movies </NavLink>
            </nav>
        </ header>
        <Outlet className='outlet'/>
    </div>
    )
}
export default SharedLayout;