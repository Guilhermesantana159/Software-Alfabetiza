//Script do index
function clicariniciar(){
    document.getElementById("formulario").style.opacity = 1;
    document.getElementById("iniciar").style.opacity = 0;
}
function clicarsair(){
    document.getElementById("formulario").style.opacity = 0;
    document.getElementById("iniciar").style.opacity = 1;
    document.getElementById("nome").value = "";
    document.getElementById("turma").value = "";
    document.getElementById("numero").value = "";
}
function clicarcomecar(){
    let x = document.getElementById("nome").value;
    let y = document.getElementById("turma").value;
    let z = document.getElementById("numero").value;
    localStorage.setItem("nome",x);
    localStorage.setItem("turma",y);
    localStorage.setItem("figuras",z);
}
//Script Escolha
var animais=[];
var z = localStorage.getItem("figuras");
var i=0
var z = Number(z);
function botão(){
    if(i==z){
        localStorage.setItem("matriz",animais);
        window.location.href = "principal.html";  
    }else{
        alert("Número de figuras insuficiente!")
    }
}
function desabilitar(){
    if(i==z){
        document.getElementsByTagName("td").removeAttribute("onclick");          
    }
}
function jacare(){
    desabilitar();
    animais.unshift("jacare");
    document.getElementById("jacare").style.borderColor = "red" ;  
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("jacare").removeAttribute("onclick");
}
function vaca(){
    desabilitar();
    animais.unshift("vaca");
    document.getElementById("vaca").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("vaca").removeAttribute("onclick");   
}
function tartaruga(){
    desabilitar();
    animais.unshift("tartaruga");
    document.getElementById("tartaruga").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("tartaruga").removeAttribute("onclick");    
}
function urso(){
    desabilitar();
    animais.unshift("urso");
    document.getElementById("urso").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("urso").removeAttribute("onclick");  
}
function leão(){
    desabilitar();
    animais.unshift("leão");
    document.getElementById("leão").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("leão").removeAttribute("onclick");
}
function coelho(){
    desabilitar();
    animais.unshift("coelho");
    document.getElementById("coelho").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;    
    document.getElementById("coelho").removeAttribute("onclick");
    }
function panda(){
    desabilitar();
    animais.unshift("panda");
    document.getElementById("panda").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("panda").removeAttribute("onclick");      
}
function cachorro(){
    desabilitar();
    animais.unshift("cachorro");
    document.getElementById("cachorro").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("cachorro").removeAttribute("onclick");   
}
function girafa(){
    desabilitar();
    animais.unshift("girafa");
    document.getElementById("girafa").style.borderColor = "red" ;
    i=i+1; 
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("girafa").removeAttribute("onclick");    
}
function golfinho(){
    desabilitar();
    animais.unshift("golfinho"); 
    document.getElementById("golfinho").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("golfinho").removeAttribute("onclick");  
}
function sapo(){
    desabilitar();
    animais.unshift("sapo");
    document.getElementById("sapo").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("sapo").removeAttribute("onclick");   
}
function abelha(){
    desabilitar();
    animais.unshift("abelha"); 
    document.getElementById("abelha").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("abelha").removeAttribute("onclick");  
}
function gato(){
    desabilitar();
    animais.unshift("gato");         
    document.getElementById("gato").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("gato").removeAttribute("onclick");   
}
function porco(){
    desabilitar();
    animais.unshift("porco");   
    document.getElementById("porco").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("porco").removeAttribute("onclick");  
}
     function tucano(){
    desabilitar();
    animais.unshift("tucano");   
    document.getElementById("tucano").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i; 
    document.getElementById("tucano").removeAttribute("onclick");  
}
function elefante(){
    desabilitar();
    animais.unshift("elefante");   
    document.getElementById("elefante").style.borderColor = "red" ;
    i=i+1;
    document.getElementById("selecionadas").innerHTML = i;
    document.getElementById("elefante").removeAttribute("onclick"); 
} 
