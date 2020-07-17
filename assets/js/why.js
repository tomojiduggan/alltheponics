

document.addEventListener("mousemove", e=>{
    if($("#hydro-btn").is(":hover")){
        $("#arrow").css("clip-path", "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)")
        $("#arrow").css("transform", "translateY(-7.5vw) scale(1)")
        $("#left").css("background-color", "rgb(0, 119, 182)")
    }
    else if($("#aero-btn").is(":hover")){
        $("#arrow").css("clip-path", "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)")
        $("#right").css("background-color", "rgb(0, 119, 182)")
        $("#arrow").css("transform", "translateY(-7.5vw) scale(1)")
    }
    else if($("#aqua-btn").is(":hover")){
        $("#arrow").css("clip-path", "polygon(30% 0, 70% 0, 70% 60%, 100% 60%, 50% 100%, 0 60%, 30% 60%)")
        $("#down").css("background-color", "rgb(0, 119, 182)")
        $("#arrow").css("transform", "translateY(-7.5vw) scale(1)")
    }
    else{
        $("#arrow").css("clip-path", "polygon(0% 0%, 0% 50%, 0% 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0%)")
        $("#left").css("background-color", "rgb(0, 180, 216)")
        $("#right").css("background-color", "rgb(0, 180, 216)")
        $("#down").css("background-color", "rgb(72, 202, 228)")
        $("#arrow").css("transform", "translateY(-7.5vw) scale(0.7)")

    }
})

const hydro = () => {
    $("#hydro").css("left", "0%")
}
const aero = () => {
    $("#aero").css("left", "0%")
}
const aqua = () => {
    $("#aqua").css("top", "0%")
}
const back = () => {
    $("#hydro").css("left", "-100%")
    $("#aero").css("left", "100%")
    $("#aqua").css("top", "100%")
}