let browser = ['Edge','Chrome','Firefox','Safari','Opera']
let CheckSupportBrowsers = prompt("Please prompt your browser, so we can check if we support it!")
if(CheckSupportBrowsers=='Edge'){
alert("You've got the edge, and we support it!");
}else if(CheckSupportBrowsers == 'Chrome' || CheckSupportBrowsers == 'Firefox' || CheckSupportBrowsers == 'Safari' || CheckSupportBrowsers == 'Opera'){
    alert("Yeah, we support this browser as well!")
}else{
    alert("We hope that this page looks fine! Unfortunately we do not support it.")
}