const list = document.querySelectorAll('.list');
var atual = 5;
var passado = 5;
var lang = "en";
var nome = "abt";


function activeLink(){
    atual = this.id;
    atual = parseInt(atual) + 5;
    if(atual==7){
        window.open("https://github.com/GuPoroca", "_blank");
        atual=5;
        return;
    }
    if(atual==9){
        if(lang=="en"){
            lang="pt";
            $('[lang]').hide();
            $('[lang="pt"]').show();
        }else if(lang=="pt"){
            lang="en";
            $('[lang]').hide();
            $('[lang="en"]').show(); 
            }
        if($(window).width() <= 600 && lang == "pt"){
            $(".nomept").html("Gustavo Poroca      Engenheiro da Computação");
            }
        return;
    }
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    $("[id="+passado+"]").css("opacity", "0");
    $("[id="+passado+"]").css("display", "none");
    passado = atual;
    $("[id="+atual+"]").css("opacity", "1");
    $("[id="+atual+"]").css("display", "flex");
    if(lang=="en"){
        $('[lang]').hide();
        $('[lang="en"]').show();
    }else if(lang=="pt"){
        $('[lang]').hide();
        $('[lang="pt"]').show(); 
        }

    if($(window).width() <= 600 && lang == "pt"){
        
        $(".nomept").html("Gustavo Poroca      Engenheiro da Computação");
    }
}

function foo(){
    $("p").css("opacity", "0");
    $("p").css("display", "none");
    $('[id=5]').css("opacity", "1");
    $('[id=5]').css("display", "flex");
    $('[lang]').hide(); // hide all lang attributes on start.
    $('[lang="en"]').show(); // show just english text
}



list.forEach((item) =>
item.addEventListener('click',activeLink));

