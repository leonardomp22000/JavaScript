/*console.log('Hola otra vez')
let suma = 2 + 2
console.log(suma)
//alert(suma) Alerta que se lanza al inicio de la pagina

//TODO Esto es lo que hay que hacer

console.error('Error', 'codigo ')
*/


//--------------FUNCIONES--------------------------
//const quieroSumar = sumar2Numeros(7, 7)
// function sumar2Numeros(a, b){
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     console.error('Alguno de los parametros no es un numero')
//     return
//   }

//   let resultado = a+b
//   return resultado

// }

// console.log(sumar2Numeros(4,5))

//

/*
function saludo (name){
  if (typeof name != 'string'){
    console.error('Este no es un nombre')
    return
  }

  return `Hola ${name}`

}
//console.log(saludo('Sofia'))

const saludoDia = saludo('Sofia')

console.log(`El dia de saludo hoy es: ${saludoDia}`)

*/

//---------------------TAREA-----------------------------------------------------
// Ejercicio #1
// Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».

function numeroMayor(num1, num2, num3){
  if (num1 == num2 && num2 == num3) return 'Son iguales'
  if (num1 >= num2 && num1>=num3 ) return num1
  if (num2>= num1 && num2>= num3) return num2
  if (num3>= num1 && num3>= num2) return num3
}
console.log(numeroMayor(6, 7, 5))


// Ejercicio #2
// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
function esVocal(letra){
  if(letra == 'a' || letra =='A' || letra == 'e' || letra =='E' || letra == 'i' || letra == 'I' || letra == 'o' || letra =='O' || letra == 'u' || letra == 'U' ){
    return true
  }
  return false
}
console.log(esVocal('E'))

// Ejercicio #3
// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n.
// Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

function generar_caracteres(letra, numero){
  let cadena = ''
  for(i=1; i<=numero; i++){
    cadena += letra
  }
  return cadena
}
console.log(generar_caracteres('x', 5))







