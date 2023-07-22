const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function chooseName(names,para){
const randomIndex = Math.floor(Math.random() * names.length);
const randomName = names[randomIndex]
para.textContent = randomName;
}
chooseName(names,para);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);