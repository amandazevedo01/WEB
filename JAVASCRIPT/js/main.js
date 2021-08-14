/*
var nome = "Amanda Azevedo";
var idade = 20
var idade2 = 10
var frase = "Japao é melhor time do mundo"
//alert(nome + "tem" + idade + "anos");
//alert(idade+idade2)
console.log(nome);
console.log(idade);
//console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase() );

alert(frase.replace("Japao", "Brasil"));
*/

/*
listas/array
var lista = ["maca","pera","usva"] //uma lista
lista.push("melao") //adiciona
lista.pop() //apaga a ultima
console.log(lista.toString())//transforma a lista em strings
console.log(lista.join("-")) //junta as strings
console.log(lista)
*/
/*dicionario
var fruta  = {nome:"maca",cor:"vermelho"}
console.log(fruta.nome);
*/
/*dicionario de frutas
var frutas  = [{nome:"maca",cor:"vermelho"},{nome:"banana",cor:"amarela"}]
console.log(frutas.nome);
alert(frutas[1].nome)
*/

/*lacos
var idade = prompt("qual sua idade?")
if(idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
}*/
/* WHILE
var count = 0;
while (count<5){
    console.log(count);
    count= count+1

}*/
/* USANDO FOR
var count;
for(count=0;count <= 5; count++){
    alert(count);
}; */
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours(   ))*/
/*

function soma(n1,n2){
    return n1+n2;
}
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else(validar =false)
    return validar
}
var idade = prompt('qual sua idade?');
console.log(validaIdade(idade));
//function setReplace(frase,nome,novo_nome){
 //   return frase.replace(nome,novo_nome)
//}
//alert(soma(5,2));
//alert(setReplace("vai japao","japao","brasil"));
*/
/* CLICANDO NO BOTAO 
function cliclou(){
    document.getElementById("valeu").innerHTML = "<b>Valeu</b>";
    //console.log(document.getElementById("valeu"))
    //alert("valeu");
}

function redirecionar(){
    window.open("https://github.com/amandazevedo01");
    //window.location.href = "https://github.com/amandazevedo01"; joga na mesma pagia=na
}
function trocar(){
    document.getElementById("mousemouve").innerHTML = "Obrigado pelo mouse";
    //alert("trocar texto")
}
function voltar(){
    document.getElementById("mousemouve").innerHTML = "Passe o mouve aqui";

}*/

//usando a funcao em varios botoes
function cliclou(){
    document.getElementById("valeu").innerHTML = "<b>Valeu</b>";
    //console.log(document.getElementById("valeu"))
    //alert("valeu");
}
function redirecionar(){
    window.open("https://github.com/amandazevedo01");
    //window.location.href = "https://github.com/amandazevedo01"; joga na mesma pagia=na
}
function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse"
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouve aqui"}
function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
} 