import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        <article className="special-card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-content">
            <h3>Greek Salad <span className="price">$12.99</span></h3>
            <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </article>
        <article className="special-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-content">
            <h3>Bruschetta <span className="price">$5.99</span></h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </article>
        <article className="special-card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-content">
            <h3>Lemon Dessert <span className="price">$5.00</span></h3>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
