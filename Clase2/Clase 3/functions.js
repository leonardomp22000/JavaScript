
//-------------------- Ejercicio 1 -------------------------------
// ORDENACION POR METODO DE LA BURBUJA 
// Objetivo: Identificar el numero mayor de los introducidos
/*
function comparar(a, b, c){
  let temp 
  if (a > b) temp = a
  else temp = b

  if (temp > c) temp = temp
  else temp = c 
  return temp
}

*/


    // Ternarios
    /* Los ternarios reemplaza el funcionamiento de los if else
    */ 
/*
    function comparar(a, b, c){
      let temp
      a > b ? temp = a: temp = b 

      temp > c ? temp : temp = c
      
      return temp

    }

    console.log(comparar(56, 234, 2))
*/


//------------------Ejercicio2------------------------------------
// Comparar si los tres 

/*
function comparar(a, b, c){
  if (a == b && a ==c) return 'Los numeros son iguales'
    
  
  if (a > b) temp = a
  else temp =b

}
console.log(comparar(5, 5 ,5))

*/
//-------------------------RECURSIVIDAD----------------------------------------------
//Se manda a llamar la funcion ella misma haciendo con esto un bucle "Forzado"

/*
let timesCounter = 0
let str = '' 

function nChar (char, times){
  str = str + char

  timesCounter++
  if (timesCounter >= times){
    console.log('se acabo')
    return str
  }

  nChar(timesCounter, times)
  return str
}
console.log(nChar('A', 5))

*/

//-------------------------ARROW FUNCTION------------------------------------
// Estas pueden ser unciones anonimas
//Las funciones normales siempre deben regresar algo return y no es aconsejable poner un console.log

/*
function nombreFunction(parametros){

  return 'Normal function'
}
console.log(nombreFunction())

// Ambas funcones son lo mismo, pero su escritura es diferente
const arrowFunction = (parametros) =>{
  return 'Arrow function'
}

//Todo lo que esta despues de la flecha es un return
const arrowFunction2 = (parametros) => 'Arrow function'

console.log(arrowFunction())
*/
//---------------------TAREA CON ARROW FUNCTIONS-----------------------------------------------------
// Ejercicio #1
// Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».

const numeroMayor = (num1, num2, num3) =>{
  if (num1 == num2 && num2 == num3)  return 'Son iguales'
  if (num1 >= num2 && num1>=num3 )  return num1 
  if (num2>= num1 && num2>= num3) return num2
  if (num3>= num1 && num3>= num2) return num3
}
console.log(numeroMayor(7, 9, 10))


// Ejercicio #2
// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
const esVocal = (letra)=>{
  if(letra == 'a' || letra =='A' || letra == 'e' || letra =='E' || letra == 'i' || letra == 'I' || letra == 'o' || letra =='O' || letra == 'u' || letra == 'U' ){
    return true
  }
  return false
}
console.log(esVocal('A'))

// Ejercicio #3
// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n.
// Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

const generar_caracteres = (letra, numero)=>{
  let cadena = ''
  for(i=1; i<=numero; i++){
    cadena += letra
  }
  return cadena
}
console.log(generar_caracteres('x', 10))




    