import heroImage from '../assets/hero.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="cta-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Restaurant interior" />
      </div>
    </section>
  );
}

export default Hero;
