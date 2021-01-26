//function pour afficher les elements

var burger = document.querySelector("#burger");
var nav = document.querySelector("#nav");

function afficherElement(element){
    if(element.style.display == "none"){
        element.style.display = "block";
    }else {
        if(element.style.display == "block") {
            element.style.display = "none";
        }
    }
}





if (window.innerWidth <= 768){
    nav.style.display = 'none';
    burger.addEventListener("click",function () { afficherElement(nav) } );
}
