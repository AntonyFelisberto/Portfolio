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