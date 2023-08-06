// Get the container element with id 'container'
const container = document.querySelector('#container');

// Create a new div element to hold the content
const content = document.createElement('div');

// Get the body element to set padding and margin
const body = document.querySelector('body');
body.style.padding = '0px';
body.style.margin = '0px';

// Set the class and id attributes for the content div
content.classList.add('content');
content.setAttribute('id', 'theDiv');

container.style.width = '300px';
container.style.height = '300px';
container.style.margin = '0px';
container.style.padding = '0px';

// Add text content to the content div
content.textContent = 'This is the glorious text-content!';

// Set additional inline styles for the content div
content.setAttribute('style', 'color: blue; background: red;');
content.style.width = '100px';
content.style.height = '100px';


// Create another div to hold the content section
const contentsection = document.createElement('div');

// Set the class attribute for the content section div
contentsection.classList.add('contentsection');

// Add HTML content to the content section div
contentsection.innerHTML = '<span>Hello World</span>';


const newsection = document.createElement('newsection');
newsection.textContent = "To be continued...";
newsection.style.margin = '0px';
newsection.style.padding = '0px';
newsection.style.backgroundColor = "purple";
container.append(newsection);

// Append the content div as a child of the content section div
container.appendChild(content);

// Append the content section div as a child of the container div
content.appendChild(contentsection);

const p = document.createElement('p');
p.textContent = "Hey, I'm red!";
p.style.color = "red";
container.appendChild(p);
const h3 = document.createElement('h3');
h3.textContent = "I'm blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const newdiv = document.createElement('div');
newdiv.style.width = '500px';
newdiv.style.height = '500px';
newdiv.style.border = "black 2px solid";
newdiv.style.backgroundColor = "pink";
document.body.appendChild(newdiv)
const newh1 = document.createElement('h1');
newh1.textContent = "I'm in a div";
newdiv.appendChild(newh1)
const newP = document.createElement('p');
newP.textContent = "ME TOO!";
newdiv.appendChild(newP);
const buttonsDiv = document.querySelector('.buttons');
buttonsDiv.style.display = 'flex';


btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });