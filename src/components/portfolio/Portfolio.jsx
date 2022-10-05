import React from 'react';
import './portfolio.css';
import UI from '../../assets/ui.webp';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className="portfolio__item">
          <div className='portfolio__item-image'>
            <img src={UI} alt="" />
          </div>
          <h3>Critic App</h3>
         <div className='portfolio__item-cta'>
           <a href="https://github.com/Suleiman-Momoniat/critic-master" className='btn' target="_blank" rel="noreferrer">Github</a>
           <a href="https://dribbble.com/Suleiman-Momoniat" className='btn btn-primary' target="_blank" rel="noreferrer">Github</a>
         </div>
        </article>
        <article className="portfolio__item">
          <div className='portfolio__item-image'>
            <img src={UI} alt="" />
          </div>
          <h3>Crypto Summary</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Suleiman-Momoniat/crypto-summary" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/Suleiman-Momoniat" className='btn btn-primary' target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio