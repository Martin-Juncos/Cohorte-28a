'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //-----------------------------------------------------------------------------
  // va comparando de a 2 valores (i con i+1)
  //si el que esta en la posicion i es mas grande que el que esta adelante
  // los intercambia
  // deberia guardarme en una var=aux lo que esta en i antes de pisarlo
  //**optimizacion**
  // si detecta que dio una vuelta y no hizo cambios CORTA
  //  [5,   1,  4,  2,  8]
  //  [5,   1,  4,  2,  8]
  //   i
  //       i+1
  // var aux =  

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //-----------------------------------------------------------------------------
  //tengo que ir 'sacando' (guardando) los valores de mi array y compararlos con los de atras
  // lo suelto --> 'cuando llegue a posicion cero' O 'delante de un valor mas chico'
  //  [5,   1,  4,  2,  8]
  //  [5,   1,  4,  2,  8]
  //        i
  //   j     
  // var aux = 


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // -----------------------------------------------------------------------
  // tengo que ir buscando el valor mas chico de mi array
  // para ubicarlo adelante de todo
  //  [5,   1,  4,  2,  8]
  //  [5,   1,  4,  2,  8]
  //   i 
  //        j 
  //  min
  // var aux = 

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
