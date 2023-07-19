let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

machineResult = machineActive ? "Machine is turned on." : "Machine is turned off.";
pwdResult = machineActive && pwd === 'cheese' ? "Logged in successfully" : "Login attempt not successful";

const section = document.querySelector('.preview');
section.innerHTML = '';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);