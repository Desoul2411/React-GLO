import React from 'react';
import featureOne from './images/1.svg';
import featureTwo from './images/2.svg';
import featureThree from './images/3.svg';
import featureFour from './images/4.svg';
import './App.css';

import Header from './Components/Header';
import Button from './Components/Button';
import Form from './Components/Form';
import FeatureSliderItem from './Components/FeatureSliderItem';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header phone='+7(962)556-1235'/>
      <main>
        <div className="wrapper">
          <div className="main">
            <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
            <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
                                    вебмастеру сгенерировать несколько абзацев более.
            </div>
            <Button value="Подробнее" className="btn main-btn"/>
          </div>
        </div>
      </main>
      <section className="features">
        <div className="wrapper">
          <div className="features-wrapper">
            <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
            <div className="features-subhead">О нас</div>
            <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                              сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                              оратору отточить.
            </div>
            <div className="features-slider">
              <div className="features-slider_items">
                <FeatureSliderItem featureName = 'Первое целевое преимущество' featureImage={featureOne}/>
                <FeatureSliderItem featureName = 'Второе целевое преимущество' featureImage={featureTwo}/>
                <FeatureSliderItem featureName = 'Третье целевое преимущество' featureImage={featureThree}/>
                <FeatureSliderItem featureName = 'Четвёртое целевое преимущество' featureImage={featureFour}/>
              </div>
              <button className="features-slider-arrow features-slider-prev">
                <svg width="9" height="16"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                  </path>
                </svg>
              </button>
              <button className="features-slider-arrow features-slider-next">
                <svg width="9"
                    height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="wrapper">
          <div className="contact-wrapper">
            <h2 className="contact-title">Остались вопросы?</h2>
            <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
            <Form/>
            <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
            </div>
          </div>
        </div>
      </section>
      <Footer phone='+7(962)556-1235'/>
    </div>
  );
}

export default App;
