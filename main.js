const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
// 2d 그래픽 context 가져오기

const houseImg = new Image(); // 이미지 객체 생성
houseImg.src = "house.png"; // 이미지 파일 경로
houseImg.onload = () => {
  animate();
};
// 집 이미지가 로딩되면 애니메이션 시작!

const balloons = [];
const balloonColors = [
  "#FF3933",
  "#FFA833",
  "#FFD733",
  "#29AF4F",
  "#147BFF",
  "#C614FF",
];

class Balloon {
  // 풍선의 속성과 메서드를 정의한 클래스
  constructor(x, y) {
    // 풍선의 초기 속성 설정
    this.x = x; // 풍선이 떠다닐 x축
    this.y = y; // 풍선이 떠다닐 y축
    this.radius = Math.random() * 50 + 10; // 랜덤 크기
    this.color =
      balloonColors[Math.floor(Math.random() * balloonColors.length)];
    // 랜덤 색상
    this.angle = Math.random() * Math.PI * 2; // 각도?
    this.amplitude = Math.random() * 20 + 10; // 파동(출렁이는 애니메이션)
    this.frequency = Math.random() * 0.02 + 0.01; // 빈도
  }

  update() {
    this.angle += this.frequency;
    this.y = canvas.height / 5 + Math.sin(this.angle) * this.amplitude;
    this.x += Math.cos(this.angle) * 0.5;

    this.draw();
  } // 풍선의 위치와 draw 업데이트

  draw() {
    // 풍선과 집을 연결하는 끈과 풍선 그리기
    context.beginPath(); // 경로 열기
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color; // 풍선 색상
    context.fill();
    context.closePath(); // 경로 닫기

    context.beginPath();
    context.moveTo(this.x, this.y); // 시작점 -> 풍선 위치
    context.lineTo(canvas.width / 2, canvas.height - 50); // 풍선 위치부터 집까지 연결
    context.strokeStyle = this.color; // 연결된 끈 색상
    context.stroke();
    context.closePath();
  }
}

function initBalloons() {
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = canvas.height / 2 + Math.random() * 100;
    balloons.push(new Balloon(x, y));
  }
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(
    houseImg,
    canvas.width / 2 - 85,
    canvas.height - 200,
    200,
    200
  );

  for (let i = 0; i < balloons.length; i++) {
    balloons[i].update();
  }

  requestAnimationFrame(animate); // 프레임을 요청하여 애니메이트 지속
}

initBalloons();
