"use strict";

const BALLOON_SIZE = 130;
const BALLOON_COUNT = 30;

const BALLOON_COLOR = [
  "rgba(242, 107, 66, 0.9)",
  "rgba(61, 137, 253, 0.9)",
  "rgba(204, 86, 255, 0.9)",
  "rgba(194, 244, 67, 0.9)",
  "rgba(254, 224, 58, 0.9)",
  "rgba(242, 45, 81, 0.9)",
];

const field = document.querySelector(".balloon_field");
const fieldRect = field.getBoundingClientRect();

const house = document.querySelector(".house");

field.addEventListener("click", onItemClick);
house.addEventListener("click", onHouseClick);

// 풍선을 추가한 뒤 field에 추가
function init() {
  addItem("balloon", BALLOON_COUNT);
}

// balloon click
function onItemClick(event) {
  const target = event.target;
  if (target.matches(".balloon")) {
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
    const random = Math.floor(Math.random() * (6 - 1) + 1);
    const item = document.createElement("div");

    item.setAttribute("class", className);
    item.style.position = "absolute";
    item.style.backgroundColor = BALLOON_COLOR[random];

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
