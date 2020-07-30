import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link    } from 'react-router-dom';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DermatoMed"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
