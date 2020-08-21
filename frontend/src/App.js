import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => { 
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Tangail Saree</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Tangail Tant Saree</a>
        </li>

        <li>
          <a href="index.html">Tangail Jamdani Saree</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Half Silk</a>
              </div>
              <div className="product-brand">Arong</div>
              <div className="product-price">TK 1200</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
