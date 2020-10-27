import React from 'react';
import { Parallax } from 'react-scroll-parallax'
import './Subtitle.scss'

function Subtitle() {
    const text = 'ERNEST HO'.split('');
    return (
        <div className="text-div">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet"></link>
            <span className="text-span">
                {text.map((letter, i) => (
                    <Parallax
                        key={`text-${i}`}
                        x={[0, 300 * (i - 4.5)]}
                        y={[-100,100]}
                        className="text"
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
        </div>
    );
}

export default Subtitle;