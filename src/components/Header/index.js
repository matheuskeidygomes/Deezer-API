import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo/logo.png';


export default function Header() {

    return <>

        <HeaderArea>

            <header className="container">

                <div className="logo">

                    <Link to="/">

                        <img src={Logo} alt="logo" />

                    </Link>

                </div>

                <nav>

                    <ul>

                        <li>
                            <Link to="/"> Home </Link>
                        </li>

                        <li>
                            <Link to="/favorites"> Favorites </Link>
                        </li>


                    </ul>

                </nav>

            </header>

        </HeaderArea>

    </>

};