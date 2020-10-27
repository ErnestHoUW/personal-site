import React from 'react';
import Header from './Components/Header/Header';
import { useController } from 'react-scroll-parallax'
function App() {
    const { parallaxController } = useController();

    React.useEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, [parallaxController]);

    return (
        <div>
            <Header />
        </div>
    );
}


export default App;