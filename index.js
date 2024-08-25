const childContainers = document.getElementById("child");

let OfferData = [
  {
    id: 1,
    buy: 1,
    get: 2,
    price: "18.00",
    Popular: false,
    off: "30%",
    minprice: "10.00",
    SizeAndColor: [
      {
        size: "",
        colour: "",
      },
      {
        size: "",
        colour: "",
      },
    ],
  },
  {
    id: 2,
    buy: 2,
    get: 4,
    price: "24.00",
    Popular: true,
    off: "30%",
    minprice: "10.00",
    SizeAndColor: [
      {
        size: "",
        colour: "",
      },
      {
        size: "",
        colour: "",
      },
    ],
  },
  {
    id: 3,
    buy: 3,
    get: 6,
    price: "36.00",
    Popular: false,
    off: "10%",
    minprice: "10.00",
    SizeAndColor: [
      {
        size: "",
        colour: "",
      },
      {
        size: "",
        colour: "",
      },
    ],
  },
];

let WriteHtml = "";

const ActiveData = (index) => {
  childContainers.innerHTML = "";
  LoadData(index);
};

const LoadData = (ActiveIndex = 1) => {
  OfferData.map((item) => {
    let listhtml = "";
    item.SizeAndColor.map((subitem, index) => {
      listhtml += ` <div class="text-box-container">
                    <div class="has-container">#${index + 1}</div>
                    <input list="Size" value="${
                      subitem.size
                    }" name="Size" class="text-box-first" >
                    <input list="Colour" class="text-box" value="${
                      subitem.colour
                    }" name="Colour">
                  </div>`;
    });
    WriteHtml =
      ActiveIndex === item.id
        ? `<div onClick="ActiveData(${
            item.id
          })" class="container-box expend-class">
                <div>
                  <div class="white-part">
                    <div class="red-dot-container">
                      <input class="red-dot" ${
                        ActiveIndex == item.id && "checked"
                      } type="radio" id="" />
                    </div>
                    <div class="offer-text-container">
                      <div>
                        <div class="text-with-offer">
                        <h6 class="buy-offer-text">Buy ${item.buy} Get ${
            item.get
          }</h6>
                          <div class="offer-pink-container">
                            <span> ${item.off} </span>
                          </div>
                        </div>
                        <div class="delete-text-container">
                        <div class="price-text">&#36;${item.price} USD</div>
                          <del class="delete-text">$10.00 USD </del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="colorandsize">
                  <div class="color-size-container">
                    <div class="size">Size</div>
                    <div>Colour</div>
                  </div>
                  ${listhtml}
                  </div>
              </div>`
        : `<div onClick="ActiveData(${item.id})" class="container-box"  key=${
            item.id
          }>
                <div class="red-box ${
                  ActiveIndex == item.id ? "hide-container" : ""
                }">
                  <div>
                    <div class="rea-box-text">${item.off}</div>
                    <div class="rea-box-text">Off</div>
                  </div>
                  <svg
                    width="2"
                    height="72"
                    viewBox="0 0 2 72"
                    fill="none"
                    class="white-dots"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1C1 28.7272 1 71 1 71"
                      stroke="url(#paint0_linear_1_18)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="4 4"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_18"
                        x1="1.5"
                        y1="29"
                        x2="1"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F7F8FF" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
    
                <div class="white-part">
                  <div class="red-dot-container">
                    <input class="red-dot" ${
                      ActiveIndex == item.id && "checked"
                    } type="radio" id="" />
                  </div>
                  <div class="offer-text-container">
                    <div>
                      <div>
                        <h6 class="buy-offer-text">Buy ${item.buy} Get ${
            item.get
          }</h6>
                      </div>
                      <div class="price-text">&#36;${item.price} USD</div>
                    </div>
                    ${
                      item.Popular
                        ? `<div class="most-popular">Most Popular</div>`
                        : ""
                    }
                  </div>
                </div>
              </div>`;
    childContainers.innerHTML += WriteHtml;
  });
};
