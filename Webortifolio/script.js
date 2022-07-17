const list = document.querySelectorAll('.list');
const parag = document.querySelectorAll('.parag');
var atual = 0;
var passado = 5;


function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(atual).style.opacity = 0;
    atual = this.id;
    document.getElementById(atual).style.opacity = 1;
    passado = atual;
}

function foo(){
    document.getElementById(0).style.opacity = 1;
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

