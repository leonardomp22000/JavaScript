class Animal {
    constructor(especie) {
        this.especie = especie
    }
}

class PersonaPrototype {
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
        this.caminar = ()=> {
            console.log(`${this.nombre} esta caminando...`)
        }
    }
}



const personaPrototype_1 = new PersonaPrototype('samuel', 'hombre', 'humano')
const personaPrototype_2 = new PersonaPrototype('Angel', 'hombre')
const personaPrototype_3 = new PersonaPrototype('Jesica', 'hombre')
personaPrototype_2.caminar()


 const personaObject = (nombre, genero) => {
     const props = {
         nombre,
         genero,
         caminar: () =>{
             console.log(`${this.nombre} esta caminando...`)
         }
     }
     return props
 }

const personaObject_1 = personaObject('Antonio', 'hombre')
personaObject_1.caminar()



//------------------------- TAREA----------------------------------
// Revisar expresiones regulares
// regexr.com ---------> Pagina de documentacion para armar expresiones regulares

// console.log('Hola esto es un string'.replace(/\s/g,''))


// ----------------------CICLOS------------------------------------
// La recursividad es una forma de hacer ciclos.

/*
let counter = 0
while(counter <= 4){
  console.log('contador while', counter)
  counter++
}
*/


/*
for(let i=0; i<=4; i++){
  console.log('contador for', i)
}
*/


const letters = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
/*

--------------------------Variante de for que imprime el indice-----------
for (letter in letters){  // letters puede ser reemplazado con un objeto
  console.log('for in', letter)
}
*/


/*

--------------------------Variante de for que imprime el elemento guardado-----------
for (letter of letters){  // Solo funciona con arrays, no con objetos
  console.log('for-of ', letter)
}
*/



const mascota = {
  raza: 'labrador',
  color: 'chocolate'
}

//Object.keys(mascota)  // Esto es el equivalente a tener un array

// Ya que se vuelve un
//Object.keys(mascota).forEach((propiedad)=> console.log(propiedad))


/*for (propiedad of Object.keys(mascota)){
  console.log('for of: ', propiedad, mascota[propiedad])
}
*/

Object.entries(mascota).forEach((p) => console.log(p))

// Como hacer con Next Js // TODO



