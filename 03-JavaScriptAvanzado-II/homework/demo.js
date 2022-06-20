		
var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}
var persona1 = {
	nombre: 'Martin',
	apellido: 'Juncos',
}
var persona2 = {
	nombre: 'Clau',
	apellido: 'Zini',
}

var logNombre = function(arg1, arg2){
	console.log(arg1 +' '+ this.nombre +' '+ this.apellido +' '+ arg2);
}
 
logNombre.bind(persona, 'Hola', ', Cómo estas?')();
logNombre.call(persona, 'Hola', ', Cómo estas?');
logNombre.apply(persona, ['Hola', ', Cómo estas?']);