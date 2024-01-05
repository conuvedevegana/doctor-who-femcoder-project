'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Carousel.module.css';


const slides = [
  {
    title: 'Allons-y',
    image: '/assets/img/carroussel/carrusel-1.webp',
    buttonText: 'Ver ahora',
    link: 'https://www.doctorwho.tv/',
  },
  {
    title: 'The Gigggle',
    image: '/assets/img/carroussel/carrusel-2.jpg',
    buttonText: 'Ver ahora',
    link: 'https://www.doctorwho.tv/',
  },
  {
    title: 'Prueba3',
    image: '/assets/img/carroussel/carrusel-1.webp',
    buttonText: 'Ver ahora',
    link: 'https://www.doctorwho.tv/',
  },
  {
    title: 'Prueba4',
    image: '/assets/img/carroussel/carrusel-2.jpg',
    buttonText: 'Ver ahora',
    link: 'https://www.doctorwho.tv/',
  },
];


const Carousel = () => {
  const settings = {
    dots: false,
    /* infinite: true, */
    speed: 999999999999,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

/*   const slides = [
    {
      title: 'Allons-y',
      image: '/assets/img/carroussel/carrusel-1.webp',
      buttonText: 'Ver ahora',
      link: 'https://www.doctorwho.tv/',
    },
    {
      title: 'The Gigggle',
      image: '/assets/img/carroussel/carrusel-2.jpg',
      buttonText: 'Ver ahora',
      link: 'https://www.doctorwho.tv/',
    },
  ];
 */
  return (

    <Slider {...settings}>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <button className={styles.carousel_btn}>{slide.buttonText}</button>
            </a>
          </div>
        )
      })}
    </Slider>
  );
};

export default Carousel;