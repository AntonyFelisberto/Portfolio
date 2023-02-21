window.onload = function(){
    let divItens = document.querySelector("#certificados")

    fetch("dadosImages.json").then((response)=>{
        response.json().then((dados) =>{
            dados.certificados.map((certificados)=>{
                divItens.innerHTML+="<img src='"+certificados.nome+"'/>"
            })
        })
    })
}

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelector(".nav_link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n=> n.addEventListener("click",linkAction))