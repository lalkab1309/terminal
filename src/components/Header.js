import React from 'react'
import { LuContainer } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Header() {

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className='header'>
        <div className='header_logo'>
            <LuContainer className='icon_con'/>
            <h1>ContainerStation</h1>
        </div>
        <div className='center-container'>
            <div className='navigation'>
                <ul className='spisok'>
                    <li><Link to="/" className='text_li' onClick={handleClick}/* target='_blank' */>Главная</Link></li>
                    <li><Link to="/contacts" className='text_li' onClick={handleClick}/* target='_blank' */>Контакты</Link></li>
                    <li><a href="#" className='text_li' /* target='_blank' */>Услуги</a></li>
                    <li><a href="#" className='text_li' /* target='_blank' */>Вакансии</a></li>
                </ul>
            </div>
        </div>
        <div className='profile'>
            <MdAccountCircle className='icon_acc'/>
            <Link to="/login" className='text' onClick={handleClick}>Личный кабинет</Link>
        </div>
    </div>
  )
}