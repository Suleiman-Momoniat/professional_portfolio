import React from "react";
import "./portfolio.css";
import ainteriordesigner_screenshot from "../../assets/ainteriordesigner_screenshot.png";
import cryptosummary_screenshot from "../../assets/cryptosummary_screenshot.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ainteriordesigner_screenshot} alt="" />
          </div>
          <div className="portfolio__item-cta">
            <h3>AInterior Designer</h3>
          </div>
          <div className="portfolio__item-cta">
            {/* <a
              href="https://github.com/Suleiman-Momoniat/critic-master"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a> */}
            <a
              href="https://ainteriordesigner.org/"
              className="btn btn-primary btn-send-msg"
              target="_blank"
              rel="noreferrer"
            >
              Go to site
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={cryptosummary_screenshot} alt="" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Crypto Summary</h3>
          </div>
          <div className="portfolio__item-cta">
            {/* <a
              href="https://github.com/Suleiman-Momoniat/crypto-summary"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a> */}
            <a
              href="https://cryptosummary.web.app"
              className="btn btn-primary btn-send-msg"
              target="_blank"
              rel="noreferrer"
            >
              Go to site
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
