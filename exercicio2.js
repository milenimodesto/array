const numeros =[6.1, 8.2, 2.3 ,6.4 ,9.5 ,2.6 ]
let soma = 0;
let media;
for(let valor of numeros){
    soma = soma + valor

}
media = Math.round(soma/numeros.length)
console.log(media)