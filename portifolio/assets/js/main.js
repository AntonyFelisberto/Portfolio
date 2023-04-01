const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelector(".nav_link")

window.onload = function(){
    let divItens = document.querySelector("#certificados")

    fetch("../../json/dadosImages.json").then((response)=>{
        response.json().then((dados) =>{
            dados.certificados.map((certificados)=>{
                divItens.innerHTML+="<div class='item'><img class='box-filme' alt='' srcset='' src='"+certificados.nome+"'/></div>"
            })
        })
    })

    navLink.forEach(n=> n.addEventListener("click",linkAction))
}

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


function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

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

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})