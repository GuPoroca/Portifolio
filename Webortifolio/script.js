const list = document.querySelectorAll('.list');
const parag = document.querySelectorAll('.parag');
var atual = 0;
var passado = 0;
var nome = "abt";


function activeLink(){
    atual = this.id;
    if(atual==2){
        window.open("https://github.com/GuPoroca", "_blank");
        atual=0;
        return;
    }
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(passado).style.opacity = 0;
    document.getElementById(passado).className = nome;
    passado = atual;
    document.getElementById(atual).style.opacity = 1
    nome = document.getElementById(atual).className;
    document.getElementById(atual).className += " active";
    
}

function foo(){
    document.getElementById(0).style.opacity = 1;
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

