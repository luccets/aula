// alterando palavras
let txt = "Estão chegando as provas"
document.write(txt.replace("provas","avaliações<br><br> "))

// apresentando casas decimais

let num= 126.5525
document.write(num.toFixed(0))
document.write("<br><br>")

let num1 = 126.5525
document.write(num1.toPrecision(4))
document.write("<br><br>")

//caixa alert
// alert("O mundo está calmo aqui")

// caixa de confirmação 

// let teste=confirm("Você é um aluno?")
// document.write("O resultado é: ",teste)

// caixa de prompt 
let texto =prompt("Digite seu nome")
document.write("O seu nome é: ",texto)
document.write("<br><br>")

//estrutura convencional - if

if( 10 > 7){
    document.write("10 é maior que 7")
    document.write("<br><br>")

}else{
    document.write("10 não é maior que 7")
    document.write("<br><br>")
}
let valor= 10
if(valor > 7){
    document.write("Valor é maior que 7")
    document.write("<br><br>")

}else{
    document.write("Valor não é maior que 7")
    document.write("<br><br>")
}

let idade= 20

if (idade <=12){
    document.write("Você é uma criança")
    document.write("<br><br>")
    
}else if(idade<=17){
    document.write("você é um adolescente")
    document.write("<br><br>")

}else if(idade<=40){
    document.write("Você é um adulto")
    document.write("<br><br>")

}else{
    document.write("Você é um idoso")
    document.write("<br><br>")   
}

//&& "e" 
let valor1 =15
if(valor1<10 && valor1 >20){
    document.write("Valor válido")
}else{
    document.write("Valor invalido")
}

// || "ou"
let valor2= 15
if (valor2 >10 || valor2 >20){
    document.write("O valor é valido")
}else{
    document.write("O valor é invalido")
}


