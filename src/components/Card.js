import React from "react";
import "./Card.css";
export default function Card({ imageUrl, name }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {name}
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </h5>
          <p className="card-text">
            <div className="price">
              Price
            </div>
            <div className="value">
              <div className="first-value">100gm- Rs40</div>
              <div className="second-value">200gm- Rs70</div>
            </div>
          </p>
          <div className="button">
          <a href="/" className="btn btn-primary">
            Buy Now
          </a>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
