const notas = [10,6,8,5.5,10]
notas.pop()//remove o último elemento do array(lista)
console.log(notas)

const media = (notas[0] + notas[1] + notas[2]+ notas[3])/notas.length
let mediaarrendondado = Math.round(mediaarrendondado)
console.log(` a média é ${mediaarrendondado}`)