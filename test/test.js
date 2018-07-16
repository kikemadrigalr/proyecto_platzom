//requiriendo el modulo
const expect = require('chai').expect
//atributo expect esta en chai

const platzom = require('..').default

//describir test 
//lo que deben hacery lo que deben devolver
//ser descriptiv con los test por si algo falla, saber en cual falló
describe('#platzom', function(){

	it('Si la palabra termina en "ar" se le quitan esos dos caracteres', function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con "z" se le añade "pe al final', function(){
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion', function(){
		const translation = platzom("Abecedario")
		const translation2 = platzom("Transformacion")

		expect(translation).to.equal("Abece-dario")
		expect(translation2).to.equal("Transfo-rmacion")
	})

	it('Si la palabra original es un palindromo, ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function(){
		const translation = platzom("arepera")
		const translation2 = platzom("sometemos")

		expect(translation).to.equal("ArEpErA")
		expect(translation2).to.equal("SoMeTeMoS")
	})
})