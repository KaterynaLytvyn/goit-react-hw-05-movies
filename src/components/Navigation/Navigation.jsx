import { NavLink} from 'react-router-dom';
import s from './Navigation.module.css'

export default function Navigation() {
    return (
            <nav className={s.container}>
                <NavLink to="/" className={({ isActive }) => isActive?s.active_link:s.link }>Home</NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive?s.active_link:s.link}>Movies</NavLink>
            </nav>
    );
  }