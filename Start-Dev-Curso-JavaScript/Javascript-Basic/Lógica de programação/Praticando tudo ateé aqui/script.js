
//Nome do aluno - nota 1 - nota 2 -m~edia - apronado - reprovado


var nomes =["Alexandro", "Beatriz", "Davi", "Ana"];
var notasA =[7.0, 8.0, 7.5, 9.5];
var notasB =[7.0, 7.5, 7.0, 7.5];


function media(n1, n2){
    return(n1 + n2) / 2;
}

function passou(media){

    

}

for(var index in nomes) {  

    var nota1 = notasA[index];
    var nota2 = notasB[index];
 
    console.log(nomes[index] + 
        " - " + 
        nota1 + 
        " - " +
        nota2 +
        " - " +
        media(nota1, nota2 ));

       
}


