const tarjeta = {
    tamano: 'chico',
    color: 'azul',
    propietario: 'Samuel', 
    saldo: -500,
    forma: 'rectangular',
    emisor: 'Blue block',
    textura: 'lisa', 
    material: 'plastico', 
    'se-Usa-En':  'Tiendas', 
    contenido:{
        logotipo: 'logo.png',
        titulo: 'Certificado.....'
    }, 
    pagar: () => console.log('Estoy pagando'),
    cancelarPago: () =>{
        console.log('Cancelar Pago')
        return 'La cantidad que se cancelo fue 123'

    } 


}
//tarjeta.pagar()
//console.log(tarjeta.cancelarPago())


//----------------------------EXPLODE----------------------------------------
// Si se ponen 3 puntos y se pone el nombre del objeto es lo mismo que si compiara
// todas las propiedades en la nueva constante
const mockTarjeta = {
    ...tarjeta, 
    emisor: 'Samuel Bank',
    dondeSeUsa: tarjeta['se-Usa-En'], 
    
}

//console.log(mockTarjeta)
/*
if (console.log(mockTarjeta.alto) == undefined){
    console.log('Es indefinido')
}
*/
//mockTarjeta.alto  == undefined ? console.log('Es indefinido') : console.log(mockTarjeta.alto)

console.log(mockTarjeta.alto ? mockTarjeta.alto: 'El valor no existe')
//console.log(!mockTarjeta.alto ? 'El valor no existe' : mockTarjeta.alto)
console.log(mockTarjeta.alto)

// El signo de pregunta en el objeto pregunta por la propiedad del objeto 
// && Significa la condicion if que esta escrita a la izquierda 
console.log(!mockTarjeta?.alto && 'El valor no existe') // Es una manera de poner una condicion if


console.log(mockTarjeta?.alto ?? 'El valor no existe')

console.log(mockTarjeta?.propietario == 'Samuel' ?? 'El valor no existe')
if(mockTarjeta?.propietario == 'Samuel' ?? false){
    console.log('Hola')
}
