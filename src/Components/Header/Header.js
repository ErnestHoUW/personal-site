import React from 'react';
import Subtitle from './Subtitle';
import Logo from './Logo'

function Header() {
    return (
        <div>
            {/*the background for the header is just a styled section*/}
            <section style={{backgroundColor: "#231F20", width: "100vw", height: "100vh"}}>
            <Logo />
            <Subtitle />
            </section>
        </div>
    );
}

export default Header