/*début scripts pour scroll*/
function scroll(lieux) {
    lieux.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
    });
}

//debut fléche de la page d'accueil vers nav
var fleche=document.querySelector("#fleche-content");
var nav=document.querySelector("#nav");
var apropos=document.querySelector("#apropos");
if (window.innerWidth <= 768){
    fleche.addEventListener("click",function(){ scroll(apropos) });
}else{
    fleche.addEventListener("click",function(){ scroll(nav) });
}
//fin fléche de la page d'accueil vers nav

//debut scroll vers page d'accueil
var liAccueil=document.querySelector("#li-accueil");
var accueil=document.querySelector("#accueil");
liAccueil.addEventListener("click",function(){ scroll(accueil) });
//fin scroll vers page d'accueil

//debut scroll vers page competences
var liCompetences=document.querySelector("#li-competences");
var competences=document.querySelector("#competences");
liCompetences.addEventListener("click",function(){ scroll(competences) });
//debut scroll vers page competences

//debut scroll vers page experiences
var liExperiences=document.querySelector("#li-experiences");
var experiences=document.querySelector("#experiences");
liExperiences.addEventListener("click",function(){ scroll(experiences) });
//fin scroll vers page experiences

//debut scroll vers page formation
var liFormation=document.querySelector("#li-formation");
var formation=document.querySelector("#formation");
liFormation.addEventListener("click",function(){ scroll(formation) });
//fin scroll vers page formation

//debut scroll vers page contact
var liContact=document.querySelector("#li-contact");
var contact=document.querySelector("#contact");
liContact.addEventListener("click",function(){ scroll(contact) });
//fin scroll vers page contact
/*fin scripts pour scroll*/
