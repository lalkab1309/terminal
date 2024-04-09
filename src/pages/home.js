import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import Main_1 from '../Components/Main_1'
import Main_2 from '../Components/Main_2'
import Main2_1 from '../Components/Main2_1'

function Home() {

    const { pathname } = useLocation();

    useEffect(() => {
        document.title = 'Контейнерный терминал';
        window.scrollTo(0, 0);
      }, [pathname]);

    return (
        <div className='wrapper'>
            <Header />
            <Main_1 />
            <Main2_1 />
            <Main_2 />
        </div>
    )
}

export default Home