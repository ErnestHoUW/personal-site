import React from 'react';
import Subtitle from './Subtitle';
import Logo from './Logo'

function Header() {
    return (
        <div>
            {/*<Background />*/}
            <section style={{backgroundColor: "#231F20", width: "100vw", height: "100vh"}}>
            <Logo />
            <Subtitle />
            </section>
        </div>
    );
}

export default Header