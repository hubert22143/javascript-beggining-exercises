let season = 'summer';
let response;

if (season === 'summer') {
  response = "It's summer!";
} else if (season === 'winter') {
  response = "It's winter!";
} else {
  response = "We don't know what season it is.";
}

const section = document.querySelector('.preview');
section.innerHTML = '';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);