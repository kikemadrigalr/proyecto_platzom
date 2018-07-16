'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
//trabajar sobre cadenas de texto string 
//las operaciones sobre los strings no alteran los strings originales,
//deben almacenarse en variables nuevas

//cambiar palabras dependiendo de las reglas definidas
//1. si la palabra termina en "ar" se le quitan esos dos caracteres
//2.si la palabra inicia con "z" se le añade "pe al final"
//3. si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion
//4. si la palabra original es un palindromo, ninguna regla anterio cuenta y se devuelve 
//la misma palabra intercalando mayusculas y minusculas

function platzom(str) {
	var traslation = str;

	//condicion 1
	if (str.toLowerCase().endsWith('ar')) {
		traslation = str.slice(0, -2);
	}

	//condicion 2

	if (str.toLowerCase().startsWith('z')) {
		traslation = traslation + 'pe'; // +='pe'
	}

	//condicion 3
	var length = traslation.length;
	if (length >= 10) {
		var firstHalf = traslation.slice(0, Math.round(length / 2)); //Toma la plabra desde 0 hasta la mitad
		var secondHalf = traslation.slice(Math.round(length / 2)); ////Toma la plabra desde la mitad al final
		traslation = firstHalf + '-' + secondHalf;
	}

	//condicion 4
	//hay que escribir una funcion para leer la palabra alreves porque no existe ese metodo

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var traslation = '';
		var capitalize = true;

		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traslation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return traslation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return traslation;
}