document.addEventListener('DOMContentLoaded', () =>{
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');
    const section = document.querySelector('section');
    // Add your code here
    section.innerHTML = ' ';
    section.appendChild(para);

    
    function random(max,min){
     return Math.floor(Math.random()* (max-min)+min);
    }
    function chooseName(names){
    const randomIndex = random(0,names.length);
    console.log(randomIndex)
    para.textContent = names[randomIndex];
    }
    chooseName(names);
    // Don't edit the code below here!

})