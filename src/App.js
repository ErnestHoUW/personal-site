import React from 'react';
import Header from './Components/Header/Header';
import { useController } from 'react-scroll-parallax';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
    const { parallaxController } = useController();

    //updates everytime it resizes or else it gets glitchy
    React.useEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, [parallaxController]);

    return (
        <div id="entire-page">
            <Header />
            <AboutMe />
        </div>
    );
}


export default App;