/*
             0    1     2
arreglos -> [1, 'Hola', 3]
arreglo[1] -> 'Hola'

objetos -> {a:1, b:'Hola', c:true}
objeto.b  --  objeto['b'] -> 'Hola'

listas ->   nodo1---> nodo2---> nodo3
*/










/*------------------------------------*/

/*
function Node(data) {
    this.data = data;
    this.next = null;
}
function List() {
    this._length = 0;
    this.head = null;
}
List.prototype.add = function(data) {
    var node = new Node(data),// 
    current = this.head; // 
    if (current === null) {
        this.head = node;
        this._length++;
        return node;
    }
    while (current.next !== null) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
}; 
List.prototype.getAll = function(){
	current = this.head //empezamos en la cabeza
	if(current === null){
		console.log('La lista esta vacia!')
		return
	}
	while(current){
		console.log(current.data); 'Martin', 'Clau', 'Leo' 
		current = current.next;
	}
	return
};

*/





/*------------------------------------*/
















//                 0       1      2     3                 4              5 
var hashTable = [undef, undef, undef, {Fer:['Fer', 'buzo']},  {Jime:['Jime', 'saco'], Clau: ['Clau', 'bolso'] }, undef ];

// arr1 = ['Fer', 'buzo'] -> set(arr1[0], arr1);
// arr2 = ['Clau', 'bolso'] -> set(arr2[0], arr2);
// arr3 = ['Jime', 'saco'] -> set(arr3[0], arr3);

function hash(posicion){ //     
    // var posicion = fer    
    return posicion.length; // 3
}
function set(clave, valor){ // 
    //var clave = fer
    //var valor = ['Fer', 'buzo']
    var index = hash(clave) // 3
    //hashTable[index] = valor;
    if(hashTable[index] === undef){
        hashTable[index] = {};
    }
    hashTable[index][clave] = valor;
}







// function Arbol(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }
// let subArbol = new Arbol(20)
// Arbol.prototype.add = function(valor){
//     if(valor > this.value){
//         if(this.right !== null){
//             this.right.add(valor)
//         }else{
//             this.right = new Arbol(valor)
//         }
//     }
//     if(valor < this.value){
//         if(this.left !== null){
//             this.left.add(valor)
//         }else{
//             this.left = new Arbol(valor)
//         }
//     }
// }


	// N pasos -> length array
// var max = array[0]; // 1
// for( var i = 0; i <= array.lenght; i++){ // N veces
// 	if( array[i] > max)	{ // 1 paso
// 		max = array[i]; // 1 paso
// 	}
// }
// console.log(max); // 1 pasos

// // 1 + N * 2 + 1 ==> 2 + 2N ==> O(N)

	
// for( var i = 0, i <= array.lenght; i++){ // N veces
//     for( var j = 0, j <= array.lenght; j++){ // N veces
//       if(array[i] === array[j]){ // 1 paso
//         return true; // 1 paso
//       }
//      }
//   };   ///    N * N * 2  ==>  2 * N**N ==> 0(N**2)

  	
// function sumArray(array, n) {
//     var fin = array.length - 1;
//     var ini = 0;
//     while (ini < fin) {
//       var suma = array[ini] + array[fin];
//       if( suma === n) return true;
//       if( suma > n) fin = fin - 1;
//       if( suma < n) ini = ini + 1;
//     }
//     return false;
//   };                       ///     O(N)