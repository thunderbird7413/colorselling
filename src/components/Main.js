import React from "react";
import { useState } from "react";
import "./Main.css";
import Card from "./Card.js";
import imagey from "./yellow.png";
import imageo from "./orange.png";
import imagep from "./pink.png";
import imageg from "./green.png";
export default function Main() {
  const colors = [
    {
      id: 1,
      name: "Yellow Color",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZNtfWNyu84TwRj8szvKQAy_Dxa0HlZhtEg&s",
    },
    {
      id: 2,
      name: "Pink Color",
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/m/40295606-2_2-house-of-festivals-uv-shade-organic-herbal-holi-colourgulal-pink-no-harmful-chemicals.jpg",
    },
    {
      id: 3,
      name: "Red Color",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIw4V3Um5aGcJ8cNdyEnye41-V4zi8SNRJOg&s",
    },
    {
      id: 4,
      name: "Blue Color",
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/xl/40295614-2_2-house-of-festivals-glitter-organic-herbal-holi-colourgulal-blue-no-harmful-chemicals.jpg",
    },
  ];
  // State to hold the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle color selection
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  // Get details of the selected color
  const selectedColorDetails = selectedColor
    ? colors.find((color) => color.name === selectedColor)
    : null;

  return (
    <div className="outerBox">
      <div className="left">
        <div className="filters" style={{ borderBottom: "1.5px solid gray" }}>
          <h1>Filters</h1>
        </div>
        <div
          className="categories"
          style={{ borderBottom: "1.5px solid gray", marginTop: "18px" }}
        >
          <h3 style={{ marginBottom: "14px" }}>CATEGORIES</h3>
          <p>
            <i class="fa-solid fa-less-than"></i> Colors
          </p>
          <p>
            <i class="fa-solid fa-less-than"></i>Festive Decor and Gifting
          </p>
          <p>
            <i class="fa-solid fa-less-than"></i>Festive Decor
          </p>
        </div>
        <div className="assured" style={{ marginTop: "18px" }}>
          <h2>
            Assured <i class="fa-solid fa-certificate"></i>
          </h2>
        </div>
        <div>
          <div
            class="accordion"
            id="accordionExample"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            <div class="accordion- selectedColorDetails">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  CUSTOMER RATINGS
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">
                    4 <i class="fa-solid fa-star"></i> & above
                  </label>
                  <br></br>
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">
                    3 <i class="fa-solid fa-star"></i> & above
                  </label>
                  <br></br>
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">
                    2 <i class="fa-solid fa-star"></i> & above
                  </label>
                  <br></br>
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">
                    1 <i class="fa-solid fa-star"></i> & above
                  </label>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="accordion- selectedColorDetails">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  TYPE
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">Paste</label>
                  <br></br>
                  <input type="checkbox" id="ratings" />
                  <label for="vehicle1">Powder</label>
                  <br></br>
                </div>
              </div>
            </div>
            <div class="accordion- selectedColorDetails">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  COLOR
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <select value={selectedColor} onChange={handleColorChange}>
                    {/* <option value="">Select a color</option> */}
                    {colors.map((color) => (
                      <option value={color.name}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="WEIGHT" style={{ marginTop: "18px" }}>
            <h3>WEIGHT</h3>
            <div className="options">
              <input type="checkbox" />
              <label htmlFor="weight">
                <h5>100 gm </h5>
              </label>
              <br />
              <input type="checkbox" />
              <label htmlFor="weight">
                <h5>200 gm</h5>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="container">
          {/* Render selected color detail card if any, otherwise render all color detail cards */}
          {selectedColorDetails ? 
          (<Card key={ selectedColorDetails.name} name={ selectedColorDetails.name} imageUrl={ selectedColorDetails.imageUrl} />)

          : (
            colors.map((item) => (
              <Card key={ item.name} name={ item.name} imageUrl={ item.imageUrl} />
            ))
          )}

        </div>
      </div>
    </div>
  );
}
