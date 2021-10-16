import React from 'react';
import {ReactComponent as LogoE} from './Images/LogoE.svg';
import {ReactComponent as LogoH} from './Images/LogoH.svg';
import { Parallax } from 'react-scroll-parallax'
import './Styles/Logo.scss'

function Logo() {
    return (
        <div className="LogoContainer">
            <Parallax
                className="LogoE"
                x={[50,-50]}
                y={[-10,10]}
            >  
                <LogoE width="105px" height="150px" fill="whitesmoke"/>
            </Parallax>
            <Parallax
                className="LogoH"
                x={[-50,50]}
                y={[-10,10]}
            >
                <LogoH width="105px" height="150px" fill="whitesmoke"/>
            </Parallax>
        </div>
    );
}

export default Logo;