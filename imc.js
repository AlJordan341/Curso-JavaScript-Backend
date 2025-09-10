let peso = parseFloat(prompt("Infome o seu peso"));
let altura = parseFloat(prompt("Informe a sua altura"));
let alturaCM = altura/100;

let imc = peso / (alturaCM *alturaCM);

if(imc <18.5){
    console.log("Abaixo do Peso")

}else if (imc >= 18.5 && imc <=25 ){
    console.log("Peso Normal")

}else if(imc > 25 && imc <=30){

    console.log("Acima do peso")
} else{

    console.log("Obeso")
}
