

const hydroponicsEnter = () =>{
    document.getElementById("hydroponics-screen").style.left = "0%";
}

const aeroponicsEnter = () => {
    document.getElementById("aeroponics-screen").style.left = "0%";
}
const returnMenu = () => {
    document.getElementById("aeroponics-screen").style.left = "100%";
    document.getElementById("hydroponics-screen").style.left = "-100%";
}
const returnMenu2 = () => {
    document.getElementById("build-hydro").style.left = "-100%"
    document.getElementById("build-aero").style.left = "100%"
}
const returnAll = () => {
    returnMenu();
    returnMenu2();
}
const buildHydro = () => {
    document.getElementById("build-hydro").style.left = "0%";
}
const buildAero = () => {
    document.getElementById("build-aero").style.left = "0%";
}

window.addEventListener("resize", function(){
    location.reload()
})