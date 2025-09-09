let peso = parseInt(prompt("Infome o seu peso"));
let altura = parseInt(prompt("Informe a sua altura"));
let imc = (peso * 100) / (altura *altura);

if(imc <18,5){
    console.log("Abaixo do Peso")

}else if (imc >= 18,5 && imc <=25 ){
    console.log("Peso Normal")

}else if(imc > 25 && imc <=30){

    console.log("Acima do peso")
} else{

    console.log("Obeso")
}
