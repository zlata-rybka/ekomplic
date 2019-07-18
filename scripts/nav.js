function media(){
    if(window.innerWidth<900){ document.getElementById("navigace").classList.add("mala");}
    else{document.getElementById("navigace").classList.remove("mala");}
    if(window.innerWidth<900){ document.getElementById("banner").classList.add("mala");}
    else{document.getElementById("banner").classList.remove("mala");}
}