import React from 'react';
import Subtitle from './Subtitle';
import Logo from './Logo'
import Caret from '../Caret/Caret'
import './Styles/Header.scss'

function Header() {

    return (
        <section className="header">
            <Logo />
            <Subtitle />
            <Caret
            />
        </section>
    );
}

export default Header