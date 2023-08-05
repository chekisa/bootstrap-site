let imgDelete = document.querySelector("#about .container-fluid");
window.addEventListener("resize",function(){
    if(window.innerWidth<768){
        imgDelete.classList.remove("vh-100")
    }
    else{
        imgDelete.classList.add("vh-100")
    }
})