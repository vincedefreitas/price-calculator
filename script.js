"use strict";

const slider = document.querySelector("#pageviews");
const viewsOutput = document.querySelector(".views");
const calendar = document.querySelector(".calendar");

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
    calendar.textContent = "per year";
    return price * 0.75 * 12;
  } else {
    calendar.textContent = "per month";
    return price;
  }
}

function setPrice(output, price) {
  let newPrice = checkDiscount(price);
  output.textContent = `$${newPrice}.00`;
}

slider.addEventListener("input", (e) => {
  viewsOutput.textContent = views[e.target.value];

  if (e.target.value == 4) {
    setPrice(priceOutput, prices[slider.value]);
  } else if (e.target.value == 3) {
    setPrice(priceOutput, prices[slider.value]);
  } else if (e.target.value == 2) {
    setPrice(priceOutput, prices[slider.value]);
  } else if (e.target.value == 1) {
    setPrice(priceOutput, prices[slider.value]);
  } else {
    setPrice(priceOutput, prices[slider.value]);
  }
});

toggle.addEventListener("click", () => {
  setPrice(priceOutput, prices[slider.value]);
});
