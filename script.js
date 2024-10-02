"use strict";

const slider = document.querySelector("#pageviews");
const viewsOutput = document.querySelector(".views");
const billing = document.querySelector(".billing");
const priceOutput = document.querySelector(".amount");
const toggle = document.querySelector("#toggle");

const views = [
  "10K PAGEVIEWS",
  "50K PAGEVIEWS",
  "100K PAGEVIEWS",
  "500K PAGEVIEWS",
  "1M PAGEVIEWS",
];
const prices = [8, 12, 16, 24, 36];

function checkDiscount(price) {
  if (toggle.checked) {
    billing.textContent = "per year";
    return price * 0.75 * 12;
  } else {
    billing.textContent = "per month";
    return price;
  }
}

function setPrice(output, price) {
  output.textContent = `$${checkDiscount(price)}.00`;
}

slider.addEventListener("input", () => {
  viewsOutput.textContent = views[slider.value];
  setPrice(priceOutput, prices[slider.value]);
});

toggle.addEventListener("click", () => {
  setPrice(priceOutput, prices[slider.value]);
});
