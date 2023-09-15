let pilling = document.getElementById('pilling');
let maska = document.getElementById('maska');
let masaz = document.getElementById('masaz');
let regulacja = document.getElementById('regulacja');
let submitbutton = document.getElementById('submit');
let cena = document.getElementById('cena');

let arr = ["pilling","maska","masaz","regulacja"];

arr.forEach((item) => {
    const itemName = document.getElementById(item);
    itemName.addEventListener('change', () => {
        if(itemName && itemName.checked){
            itemName.classList.add("checked");
            itemName.classList.remove("unchecked");
        }else if(itemName){
            itemName.classList.add("unchecked");
            itemName.classList.remove("checked");
        }

    })
})

submitbutton.addEventListener('click', () => {
    cena.textContent = "Cena Zabiegow: "
    let prices = {
        pilling: parseFloat(45),
        maska: parseFloat(30),
        masaz: parseFloat(20),
        regulacja: parseFloat(5),
    }

    let totalCena = parseFloat(0);
    arr.forEach(item => {
        const itemName = document.getElementById(item);
        if(itemName.classList.contains('checked')){
            totalCena += parseFloat(prices[item]);
            cena.textContent = "Cena Zabiegow: " + totalCena;
        }
    })

});