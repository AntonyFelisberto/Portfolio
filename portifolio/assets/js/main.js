window.onload = function(){
    let divItens = document.querySelector("#certificados")

    fetch("../../json/dadosImages.json").then((response)=>{
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

function toggleSkills(elem){
    const skillsContent = document.getElementsByClassName('skills_content')

    let itemClass = elem.parentNode.className;

    for(i=0;i < skillsContent.length;i++){
        skillsContent[i].className = "skills_content skills_close"
    }

    if(itemClass === "skills_content skills_close"){
        elem.parentNode.className = "skills_content skills_open"
    }
}