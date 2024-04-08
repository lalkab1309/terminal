import React, { useEffect }  from 'react'
import { useLocation } from 'react-router-dom';
import Main_con from './components/Main_con'
import Header from './components/Header'

function Contacts() {

    const { pathname } = useLocation();

    useEffect(() => {
        document.title = 'Контакты';
        window.scrollTo(0, 0);
      }, [pathname]);
  
    return (
      <div>
        <Header />
        <Main_con />
      </div>
    );
  }
  
  export default Contacts; 