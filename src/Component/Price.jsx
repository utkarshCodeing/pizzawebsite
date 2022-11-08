import React from 'react'
import img1 from '../img/pizza1.png'
import img2 from '../img/pizza2.png'
import img3 from '../img/pizza3.png'
import img4 from '../img/pizza4.png'
import img5 from '../img/pizza5.png'
import img6 from '../img/pizza6.png'
const Price = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img1} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$50.00</p>
              
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img2} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img3} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img4} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img5} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img6} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price;