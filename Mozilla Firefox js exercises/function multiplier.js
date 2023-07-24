document.addEventListener('DOMContentLoaded', () => {
    let getnumber = prompt("Prompt a number you want to multiply with");
    getnumber = parseInt(getnumber);
    let getsecondnumber = prompt("Prompt a number you want to be multiplied with the first one");
    getsecondnumber = parseInt(getsecondnumber);
    function multiplier() {
        suma = getnumber * getsecondnumber;
        alert(suma);
    }
    multiplier();
});