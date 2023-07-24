document.addEventListener('DOMContentLoaded', () => {
    const lastletter = prompt("User, prompt a text, and I will return the last letter.");
    function getLastLetter() {
        const lastchar = lastletter.charAt(lastletter.length - 1);
        alert(lastchar);
    }
    getLastLetter();
});