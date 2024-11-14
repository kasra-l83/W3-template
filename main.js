const modal= document.getElementById("modal");
function open(){
    modal.style.display= "block"
}
function close(){
    modal.style.display= "none"
}
document.getElementById("menu").onclick= function(){
    if(modal.style.display=== "none"){
        open()
    }else close()
}

document.getElementById("close").onclick= function(){
    modal1.style.display= "none"
}
const modal1= document.getElementById("black");
document.getElementById("open").onclick= function(){
    modal1.style.display= "flex";
    modal1.style.justifyContent= "center";
}
function checkwindow(){
    if(window.innerWidth> 600) close()
}
window.addEventListener("resize", function(){
    checkwindow();
})
const modal2= document.getElementById("modal2")
document.getElementById("plus").onclick= function(){
    modal2.style.display= "flex";
}
document.getElementById("close2").onclick= function(){
    modal2.style.display= "none";
}