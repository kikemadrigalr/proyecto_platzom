#Platzom 

Platzom es un idioma inventado para el curso de Fundamentos de JavaScript de [PLatzi](https://platzi.com),
El mejor lugar de Educación OnLine

##Descripción del Idioma

###cambiar palabras dependiendo de las reglas definidas
-1. Si la palabra termina en "ar" se le quitan esos dos caracteres.
-2.Si la palabra inicia con "z" se le añade "pe al final".
-3. Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion.
-4. Si la palabra original es un palindromo, ninguna regla anterio cuenta y se devuelve 
//la misma palabra intercalando mayusculas y minusculas.

##Instalación

```
npm install platzom
```

##Uso

```
import platzom from 'platzom'

platzom("Programar")  //Program
platzom("Zorro")  //Zorrope
platzom("Zarpe")  //Zorppe
platzom("abecedario")  //abece-dario
platzom("sometemos")  //SoMeTeMoS
```

##Creditos
-[Sacha Lifszyc](https://twitter.com/@slifzyc)
-[Carlos MAdrigal](https://twitter.com/@kikemadrigalr)

##Licencia
[MIT](https://opensource.org/licenses/MIT)