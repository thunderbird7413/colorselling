import React from "react";
import { useState } from "react";
import "./Main.css";
import Card from "./Card.js";
export default function Main() {
  const colors = [
    {
      id: 1,
      name: "Yellow Color",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/3250/85e8/0a051c1f63d00de1a724d8a9ccaa7762?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPk4z-CI~Pl1qEQKc-1djNt8Og7ha6D~pGt5GYLe8-vk2pk8-tjtz2FW8TIT7pWYLac5Cit-oaoIXaFROXsRqGfl6sFtxA8ob6BQxcfOz0YOCqrS~ZX2O-M6GjW8hFHxQ4dgruZJgKJJnxj40dpw4ShoHXLpCT4tCmZe1sotzN54nf4ZUMHBG663LHK41ME65GY5QBkzhqyRTiuQccVyTkS7oMsT2MDil7I-OMUm-k~dhWCYOerW~Ys7HMwTS9kSi01yQSt--c~SRzVRPe5ES9fgPrid4fDOxsnmEWZy52hHKUm6QbgpB5BTnw~hILMWZflAVPKsrNLhqh~r-ZKQlw__",
    },
    {
      id: 2,
      name: "Pink Color",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/1213/820a/177e3db25b5fc5b732baf98375567535?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=glgVAxoxR3rfhFp4ARdPC7EmzMhlS6m2f8vjk6wwHzOulF5t1449Hv0AgSRHcPy1mo3fT98idEvSWghFoc7VIO5V165k1cm1XoyKiEXPHlNhQMubRrH79tUKE04-Dc7aLdTaCQ5Tn7UzOXsF79Nu~snUJhuakF7GpgCUoF4I5d7VjAVA0FbcHuAZRiaX968CdDIjO~Y2qSIorSqGil-36Un6eC72rpbe~tqoKWqGNcv5cek89gWxd0GJLoASAAHTT6miPvsDGZRCDAgSbmGIOCCvi5LH0YTsK-yKisVeSu69gXytsNBwexy4EkJpqxzZ53EqBevyt4MyEBlJnBSYIQ__",
    },
    {
      id: 3,
      name: "Orange Color",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/a020/a5c9/5aed2e2a50d7f79db03fd19e53ada250?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qE3DoqJaBiQTfF6Q95UPxkAVFTR1840OrTiFQthMwrN~tsoe3CvMeG8p~zNX7OWDcuBh9hAi~4LNQkoUq0iEIirY2fG1iEXsKGq4oPn8RZs379vONDr-ZxeQFjb380OWldT3C9Z~SOsB9tpRH4rY~PaOdBRktz-j5Q0LgZDOBVZjunjTVEosRCqKF3ICGTLaoT9MODuJ60FjDWV5NFkf8oHR~3B2i16wvGHsBzzvisKEG7xcv178ecwg3-Tbi~UeqI2wCP553jdLyZqPhKVXpbM93IDxaFwltIOlq298WdK0HzDeo9kO2D91e~XbaVjuRtFHYQ0coVGZSYy2yhZnkw__",
    },
    {
      id: 4,
      name: "Green Color",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/3250/85e8/0a051c1f63d00de1a724d8a9ccaa7762?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPk4z-CI~Pl1qEQKc-1djNt8Og7ha6D~pGt5GYLe8-vk2pk8-tjtz2FW8TIT7pWYLac5Cit-oaoIXaFROXsRqGfl6sFtxA8ob6BQxcfOz0YOCqrS~ZX2O-M6GjW8hFHxQ4dgruZJgKJJnxj40dpw4ShoHXLpCT4tCmZe1sotzN54nf4ZUMHBG663LHK41ME65GY5QBkzhqyRTiuQccVyTkS7oMsT2MDil7I-OMUm-k~dhWCYOerW~Ys7HMwTS9kSi01yQSt--c~SRzVRPe5ES9fgPrid4fDOxsnmEWZy52hHKUm6QbgpB5BTnw~hILMWZflAVPKsrNLhqh~r-ZKQlw__",
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
          // (
          //   <div
          //     style={{
          //       border: "1px solid black",
          //       padding: "10px",
          //       marginTop: "20px",
          //     }}
          //   >
          //     <h2>{selectedColorDetails}</h2>
          //     <p>
          //       {colors.find((color) => color.name === selectedColor).details}
          //     </p>
          //   </div>) 
          : (
            colors.map((item) => (
              <Card key={ item.name} name={ item.name} imageUrl={ item.imageUrl} />
            ))
          )}
          {/* {selectedColor ?   (<Card key={ selectedColorDetails.name} name={ selectedColorDetails.name} imageUrl={ selectedColorDetails.imageUrl} />) :
          colors.map(( selectedColorDetails) => {
            return (
              <Card key={ selectedColorDetails.name} name={ selectedColorDetails.name} imageUrl={ selectedColorDetails.imageUrl} />
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
