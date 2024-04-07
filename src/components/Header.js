import React from 'react'
import { LuContainer } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <div className='header'>
        <div className='header_logo'>
            <LuContainer className='icon_con'/>
            <h1>ContainerStation</h1>
        </div>
        <div className='center-container'>
            <div className='navigation'>
                <ul className='spisok'>
                    <li><a href="#" className='text_li' target='_blank'>Главная</a></li>
                    <li><a href="#" className='text_li' target='_blank'>Контакты</a></li>
                    <li><a href="#" className='text_li' target='_blank'>Услуги</a></li>
                    <li><a href="#" className='text_li' target='_blank'>Вакансии</a></li>
                </ul>
            </div>
        </div>
        <div className='profile'>
            <MdAccountCircle className='icon_acc'/>
            <a href="#" className='text' target='_blank'>Личный кабинет</a>
        </div>
    </div>
  )
}