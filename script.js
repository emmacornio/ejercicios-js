const ejercicio1 = [
	3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
	19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
	{
		nombre: "Gabriel",
		edad: 22,
		esFamiliar: false,
	},
	{
		nombre: "Jaime",
		edad: 15,
		esFamiliar: true,
	},
	{
		nombre: "María",
		edad: 18,
		esFamiliar: true,
	},
	{
		nombre: "Angel",
		edad: 19,
		esFamiliar: true,
	},
	{
		nombre: "Fer",
		edad: 18,
		esFamiliar: true,
	},
	{
		nombre: "Rachel",
		edad: 30,
		esFamiliar: true,
	},
];

let sonPrimos = (arreglo = Array) => {
	arreglo.forEach((numero) => {
		for (let i = 2; i <= numero; i++) {
			if (numero % i == 0 && numero != i) {
				break;
			} else if (numero % i == 0) {
				console.log(`${numero} es primo`);
			}
		}
	});
};

let sonAdmitidos = (arreglo = Array) => {
	arreglo.forEach((persona) => {
		if (persona.edad >= 18 && persona.esFamiliar == true) {
			console.log(`${persona.nombre} esta invitade a la fiesta de Ramón`);
		}
	});
};
let fibbonacci = (numero) => {
	let numeros = [];
	let actual = 1;
	let anterior = 0;
	console.log(anterior);
	console.log(actual);
	for (let i = 0; i < numero - 2; i++) {
		let fib = anterior + actual;
		anterior = actual;
		actual = fib;
		numeros.push(fib);
	}
	numeros.forEach((element) => {
		console.log(element);
	});
};
console.log("Ejercicio #1");
console.log("---------------------");
sonPrimos(ejercicio1);
console.log("======================");
console.log("Ejercicio #2");
console.log("----------------------");
sonAdmitidos(ejercicio2);
console.log("====================");
console.log("Primeros 50 numeros de la suceción Fibbonacci");
console.log("--------------------");
fibbonacci(50);
