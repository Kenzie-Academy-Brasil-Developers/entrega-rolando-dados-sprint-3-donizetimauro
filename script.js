const dados1x = document.getElementById("umxdado");
const dados2x = document.getElementById("doisxdado");
const dados2xkx = document.getElementById("doisxkxdados");

//rolando um dado:
function rolarDado(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    return dado1;
}
//rolando dois dados:
function rolarDoisDados(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let somaDoisDados = dado1 +dado2;
    return "Primeiro dado: "+dado1+", Segundo dado:"+dado2+", e a soma dos dois: "+somaDoisDados;
}
//rolando dois dados mil vezes:
function rolandoDoisDados(){
    let numero1 = Math.floor(Math.random() * 6) + 1;
    let numero2 = Math.floor(Math.random() * 6) + 1;
    let somaDados = numero1+numero2
    return somaDados;
}
function rolandoDoisDadosMil(){
    let arrayDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rolagemAtual = 0
    for(let i = 0; i <1000; i++){
        rolagemAtual = rolandoDoisDados();
        if(rolagemAtual==2){
            arrayDados[0] = arrayDados[0]+1;
        }else if(rolagemAtual==3){
            arrayDados[1] = arrayDados[1]+1;
        }else if(rolagemAtual==4){
            arrayDados[2] = arrayDados[2]+1;
        }else if(rolagemAtual==5){
            arrayDados[3] = arrayDados[3]+1;
        }else if(rolagemAtual==6){
            arrayDados[4] = arrayDados[4]+1;
        }else if(rolagemAtual==7){
            arrayDados[5] = arrayDados[5]+1;
        }else if(rolagemAtual==8){
            arrayDados[6] = arrayDados[6]+1;
        }else if(rolagemAtual==9){
            arrayDados[7] = arrayDados[7]+1;
        }else if(rolagemAtual==10){
            arrayDados[8] = arrayDados[8]+1;
        }else if(rolagemAtual==11){
            arrayDados[9] = arrayDados[9]+1;
        }else{
            arrayDados[10] = arrayDados[10]+1;
        }
    }
    let contagem = "2:"+arrayDados[0]+", 3:"+arrayDados[1]+", 4:"+arrayDados[2]+", 5:"+arrayDados[3]
    +", 6:"+arrayDados[4]+", 7:"+arrayDados[5]+", 8:"+arrayDados[6]+". 9:"+arrayDados[7]
    +", 10: "+arrayDados[8]+", 11:"+arrayDados[9]+", 12:"+arrayDados[10];
    return contagem; 
}

//botões da tela inicial
document.getElementById("umxdado").addEventListener("click", function() {
    document.getElementById("umdadin").innerHTML = rolarDado();
});
document.getElementById("doisxdado").addEventListener("click", function() {
    document.getElementById("doisdadin").innerHTML = rolarDoisDados();
});
document.getElementById("doisxkxdados").addEventListener("click", function() {
    document.getElementById("mildadin").innerHTML = rolandoDoisDadosMil();
});



