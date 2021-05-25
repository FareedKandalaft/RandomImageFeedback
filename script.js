const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';


const rows = 10;

for (let i = 0; i < (rows * 3); i++) {
  const img = document.createElement('img');

  const x = 300 + Math.floor(Math.random() * 10);
  const y = 300 + Math.floor(Math.random() * 10);
  let srcu = `${unsplashURL + x}x${y}`;
  img.src = srcu;
  container.appendChild(img);
// console.log(srcu);    
}
