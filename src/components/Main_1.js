/* import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

export default function Main_1() {

   const images = [
    "https://hhla-tk.ee/fileadmin/_processed_/0/3/csm_JOI6PUhY_c6c89daa5a.jpeg",
    "https://pso13.ru/sites/default/files/object/112/konteynernyy-terminal-zapad-904.jpg",
    "https://konversta.com/ru/images/projects/bg-terminalspb-small.jpg",
    "https://avatars.mds.yandex.net/get-altay/10648814/2a0000018bd34e7a671e67e49304db8e360c/L_height"
  ];

  const descriptions = [
    "Это наша команда! Мы всегда будем рады видеть новых людей в нашей дружной, сплоченной команде! Welcome!",
    "Это мы",
    "Это вы",
    "Это все вместе"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  };

  const handleClickBack = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  };

  return (
    <div className='main_1'>
      <div className='main_1_zagolovok'>
        <h2>НОВОСТИ</h2>
      </div>
      <div className='block_novosti'>
        <div className='novosti'>
          <img src={images[currentIndex]} alt="image" />
        </div>
        <div className='novosti_text'>
          <p>{descriptions[currentIndex]}</p>
        </div>
        <FaAngleRight onClick={handleClickNext} className='next'/>
        <FaAngleLeft onClick={handleClickBack} className='back'/>
      </div>
    </div>
      
  )
} 
  */

import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export default function Main_1() {

   const images = [
    "https://hhla-tk.ee/fileadmin/_processed_/0/3/csm_JOI6PUhY_c6c89daa5a.jpeg",
    "https://esfccompany.com/upload/iblock/4cc/4cc49ff39b99c8bbc44b651f97568c53.jpg",
    "https://konversta.com/ru/images/projects/bg-terminalspb-small.jpg",
    "https://avatars.mds.yandex.net/get-altay/10648814/2a0000018bd34e7a671e67e49304db8e360c/L_height"
  ];

  const descriptions = [
    "Это наша команда! Мы всегда будем рады видеть новых людей в нашей дружной, сплоченной команде! Welcome!",
    "Санкт-Петербургский контейнерный терминал занял первое место в рейтинге лучших терминалов России по версии авторитетного издания 'Морской бюллетень'.",
    "Контейнерный терминал успешно завершил модернизацию своей инфраструктуры, что позволило значительно увеличить пропускную способность и улучшить качество обслуживания клиентов.",
    "В ближайшем будущем терминал планирует продолжить развитие и внедрять новые технологии, направленные на повышение эффективности и качества обслуживания клиентов. Мы стремимся оставаться лидером рынка и отвечать самым высоким стандартам качества и безопасности."
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  };

  const handleClickBack = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  };

  return (
    <div className='main_1'>
      <div className='main_1_zagolovok'>
        <h2>НОВОСТИ</h2>
      </div>
      <div className='block_novosti'>
        <div className='novosti_slider'>
          {images.map((image, index) => (
            <div className={`novosti_slide ${index === currentIndex ? 'active' : ''}`} key={index}>
              <img src={image} alt="" />
              <div className='novosti_text'>
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <FaAngleRight onClick={handleClickNext} className='next'/>
        <FaAngleLeft onClick={handleClickBack} className='back'/>
      </div>
    </div>
  )
}