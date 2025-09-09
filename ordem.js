let valorUm = parseInt(prompt("Digite o primeiro valor"));
let valorDois = parseInt(prompt("Digite o segundo valor"));
let valorTres = parseInt(prompt("Digite o terceiro valor"));

if(valorUm >valorDois && valorDois > valorTres){
    console.log(valorUm, "/", valorDois, "/", valorTres);

}else if(valorUm > valorDois && valorDois < valorTres){
    console.log(valorUm, "/", valorTres, "/" , valorDois);

}else if (valorDois > valorTres && valorTres > valorUm){
   console.log(valorDois, "/", valorTres, "/", valorUm);

}else if (valorDois> valorTres && valorTres < valorUm){
    console.log(valorDois, "/", valorUm, "/", valorTres);

}else if (valorTres> valorDois && valorDois> valorUm){
    console.log(valorTres, "/", valorDois, "/", valorUm);
    
}else {
console.log(valorTres, "/", valorUm, "/", valorDois);

}