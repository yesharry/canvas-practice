"use strict";

const BALLOON_W_SIZE = 100;
const BALLOON_H_SIZE = 120;
const BALLOON_COUNT = 70;

const field = document.querySelector(".balloon_field");
const fieldRect = field.getBoundingClientRect();

field.addEventListener("click", onItemClick);

// 풍선을 추가한 뒤 field에 추가
function init() {
  // field의 rect을 출력해보자
  console.log(fieldRect);
  addItem("balloon", BALLOON_COUNT, "./images/balloon");
}

// balloon click
function onItemClick(event) {
  const target = event.target;
  if (target.matches(".balloon")) {
    target.remove();
  }
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - BALLOON_W_SIZE;
  const y2 = fieldRect.height - BALLOON_H_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    const random = Math.floor(Math.random() * (6 - 1) + 1);
    // 풍선 색상 랜덤 주기 위한 변수

    item.setAttribute("class", className);
    item.setAttribute("src", `${imgPath + random}.png`);
    item.style.position = "absolute";
    // count 개수 만큼 item 추가하기

    const x = randomNumber(x1, x2);
    // x의 위치는 x1 ~ x2까지 아무 랜덤한 숫자를 받아오기
    const y = randomNumber(y1, y2);
    // y도 마찬가지로 y1 ~ y2까지 랜덤한 숫자 받아오기
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

init();
