var persona1 = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}
var persona2 = {
	nombre: 'Martin',
	apellido: 'Juncos',
}
var persona3 = {
	nombre: 'Clau',
	apellido: 'Zini',
}
var logNombre = function(arg1, arg2){
	console.log(arg1 +' '+ this.nombre + ' ' + this.apellido + ' ' + arg2);
}
 
logNombre.bind(persona1, 'Hola', ', Cómo estas?')();
logNombre.call(persona2, 'Hola', ', Cómo estas?');
logNombre.apply(persona3, ['Hola', ', Cómo estas?']);




