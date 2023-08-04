"use strict";

const BALLOON_COLOR = [
  "radial-gradient(circle, rgba(254,231,158,1) 0%, rgba(255,213,111,0.9038209033613446) 44%, rgba(255,199,90,1) 100%)",
  "radial-gradient(circle, rgba(254,158,199,1) 0%, rgba(255,81,159,0.9038209033613446) 44%, rgba(255,46,140,1) 100%)",
  "radial-gradient(circle, rgba(111,202,255,1) 0%, rgba(81,171,255,0.9038209033613446) 44%, rgba(90,150,255,1) 100%)",
  "radial-gradient(circle, rgba(234,158,254,1) 0%, rgba(238,111,255,0.9038209033613446) 44%, rgba(210,90,255,1) 100%)",
  "radial-gradient(circle, rgba(203,254,158,1) 0%, rgba(159,255,81,0.9038209033613446) 44%, rgba(126,255,46,1) 100%)",
];
const BALLOON_RADIUS = ["10%", "20%", "30%", "40%", "50%"];
const BALLOON_ANIMATION = [
  "balloons 2s ease-in-out infinite",
  "balloons 3s ease-in-out infinite",
  "balloons 4s ease-in-out infinite",
  "balloons 5s ease-in-out infinite",
  "balloons 6s ease-in-out infinite",
];
const BALLOON_SIZE = 100;
const BALLOON_COUNT = 100;

const field = document.querySelector(".balloon_field");
const fieldRect = field.getBoundingClientRect();
field.addEventListener("click", onItemClick);

const house = document.querySelector(".house");
house.addEventListener("click", onHouseClick);

const heart = document.querySelector(".heart");
heart.addEventListener("click", onItemClick);

function init() {
  console.log(fieldRect);
  addItem("balloon", BALLOON_COUNT);
}

function onItemClick(event) {
  const target = event.target;
  if (target.matches(".balloon")) {
    target.remove();
  } else if (target.matches(".heart")) {
    target.remove();
  }
}

function onHouseClick() {
  addItem("balloon", 1);
}

function addItem(className, count) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - BALLOON_SIZE;
  const y2 = fieldRect.height - BALLOON_SIZE;

  for (let i = 0; i < count; i++) {
    const random = Math.floor(Math.random() * 5);

    const item = document.createElement("div");
    item.setAttribute("class", className);
    item.style.background = BALLOON_COLOR[random];
    item.style.borderRadius = BALLOON_RADIUS[random];
    item.style.animation = BALLOON_ANIMATION[random];

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;

    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

init();
