let numeroA = parseInt(prompt("Digite o primeiro número"));
let numeroB = parseInt(prompt("Digite o segundo número"));
let numeroC = 0;

if(numeroA === numeroB){
    numeroC = numeroA + numeroB
    console.log("Números iguas. O resultado é: ", numeroC);

}else {
        numeroC = numeroA * numeroB;
        console.log("Números diferentes. O resultado é ", numeroC)
}