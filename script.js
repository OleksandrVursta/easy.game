gsap.from(".container", {  y: 150, duration: 1, opacity: -1});
gsap.from(".h1", {x: 150, duration: 2, opacity: 0})
gsap.from(".p", {x: -200, duration: 3, opacity: 0})
gsap.from(".btn", {y: 700, duration: 4, opacity: 0, rotation: 4600})
gsap.to(".btn", { duration: 0.2, rotation: -15}, "+=0.5")
gsap.to(".btn", { duration: 1, rotation: 0}, "+=0.2")

const audio = document.getElementById("sound");
const btn = document.querySelector(".btn")
const block = document.querySelector(".block")
const blocktxt = document.querySelector(".blocktxt")
const picture = document.querySelector(".rofl")
const width = window.innerWidth - 200;
const height = window.innerHeight - 200;

let moving = true;

  btn.addEventListener('click', () => {
    block.style.display = "block";
    moveRandomly();
  });

  block.addEventListener('click', () => {
    moving = false;
    gsap.killTweensOf(block);
    blocktxt.innerHTML = '🥳В тебе вийшло!🥳'
    blocktxt.style.marginLeft = "0";
    setTimeout(() => {
      picture.style.display = "block";
      audio.play();
  }, 1000);
  });

  function getRandomPosition() {
    return {
      x: Math.random() * width,
      y: Math.random() * height
    };
  }

  function moveRandomly() {
    if (!moving) return;

    const { x, y } = getRandomPosition();
    gsap.to(block, {x,y,duration: 0.5,ease: "power1.inOut", onComplete: moveRandomly});
  }
 