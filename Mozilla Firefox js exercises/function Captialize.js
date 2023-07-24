document.addEventListener('DOMContentLoaded', () => {
    const capitalizedtext = prompt("Uzytkowniku, podaj swoj tekst, a ja sie zajme przekonwertowaniem go w prawidlowy sposob.");
    function capitalize() {
        const setcapitalize = capitalizedtext.charAt(0).toUpperCase() + capitalizedtext.slice(1).toLowerCase();
        console.log(setcapitalize);
    }
    capitalize();
});