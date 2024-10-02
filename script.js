"use strict";

const slider = document.querySelector("#pageviews");
const viewsOutput = document.querySelector(".views");

const price = document.querySelector(".price");
const discount = document.querySelector("#discount");

const values = [10000, 50000, 100000, 500000, 1000000];

console.log(slider.value);

slider.addEventListener("input", (e) => {
  viewsOutput.textContent = values[e.target.value];
  console.log(slider.value);
});

console.log(slider);

// slider.oninput();

slider.addEventListener("input", (e) => {
  if (e.target.value == 4) {
    price.textContent = "$36.00 per month";
  } else if (e.target.value > 3) {
    price.textContent = "$24.00 per month";
  } else if (e.target.value > 2) {
    price.textContent = "$16.00 per month";
  } else if (e.target.value > 1) {
    price.textContent = "$12.00 per month";
  } else {
    price.textContent = "$8.00 per month";
  }
});

discount.addEventListener("click", (e) => {
  if (discount.checked) {
    alert("Hello!");
  }
});
