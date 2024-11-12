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