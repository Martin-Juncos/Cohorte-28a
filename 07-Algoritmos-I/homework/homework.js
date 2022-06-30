'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // arr [1]
  // divisor = 2
  // 180 | 2
  // 90  | 2
  // 45  | 3
  // 15  | 3
  // 5   | 5
  // 1
  var arr = [1];
  var div = 2;
  while(num !== 1){
    if(num % div === 0){
      arr.push(div);
      num = num / div;
    }else{
      div++;
    }
  }
  return arr;
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
  // si detecta que dio una vuelta y no hizo cambios CORTA
  //  [5,   1,  4,  2,  8]
  //  [1,   2,  4,  5,  8]
  //                 i
  //                    i+1
  // var aux = 4
  var flag = true;
  while(flag){
    flag = false;
    for (let i = 0; i < array.length -1; i++) {
      if(array[i] > array[i+1]){
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true;
      }      
    }
  } 
  return array;
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
  //  [1,  2,  4,  5,  8]
  //                   i
  //    j     
  // var aux = 8
  for (let i = 1; i < array.length; i++) {
    var j = i-1;
    var aux = array[i];
    while(j >= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--
    }
    array[j+1] = aux;    
  }
  return array;
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
  //  [1,   2,  4,  5,  8]
  //                 i 
  //                    j 
  //                min
  // var aux =4
  for (let i = 0; i < array.length -1; i++) {
    var min = i;
    for (let j = i+1; j < array.length; j++) {
      if(array[j] < array[min]){
        min = j;
      }      
    }
    var aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
