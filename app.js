// Movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Elements to make 3D
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving mouse event
container.addEventListener('mousemove', (e) => {
  let xAxis = ((window.innerWidth / 2 - e.pageX) / 20) * -1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  console.log(`rotateY(${xAxis}deg)`);
});

container.addEventListener('mouseenter', (e) => {

  //Popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
  purchase.style.transform = 'translateZ(150px)';
  description.style.transform = 'translateZ(150px)';
  sizes.style.transform = 'translateZ(150px)';

  //Timeout to make animation smoother
  setTimeout(function(){ 
    card.style.transition = "all 0.1s ease";
  }, 200);
});

// Reset all animations
container.addEventListener('mouseleave', (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.2s ease";

  // Popback
  title.style.transform = 'translateZ(0)';
  sneaker.style.transform = 'translateZ(0)';
  purchase.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
  sizes.style.transform = 'translateZ(0)';
});




