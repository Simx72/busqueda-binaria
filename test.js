const { BuscadorNumber, BuscadorString } = require('./index');


/**
 * Lista de numeros
 */
let n = new BuscadorNumber(makeFibonacciArray(20)),
    /**
     * Busqueda que esta dentro de la lista
     */
    qn = 144,
    /**
     * Busqueda incorrecta (que no esta en la lista)
     */
    qni = 200;

/**
 * makeFibonacciArray
 * 
 * Crea una lista de números siguiendo la secuencia de fibonacci
 * 
 * @param {number} length - el largo de la lista
 * @returns lista
 */
function makeFibonacciArray(length) {
    let n1 = 0, n2 = 1, nextTerm, arr = [];
    for (let i = 1; i < length; i++) {
        arr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return arr;
}

console.log('Busqueda en lista de numeros')
// console.dir({ n, q });
console.log('Busqueda lineal existente')
console.dir(n.lineal(qn))
console.log('Busqueda binaria existente')
console.dir(n.binaria(qn))
console.log('Busqueda lineal inexistente')
console.dir(n.lineal(qni))
console.log('Busqueda binaria inexistente')
console.dir(n.binaria(qni));

let s = new BuscadorString(['Noah','Emma','Jacob','Sophia','Mason',
'Olivia','Liam','Isabella','William','Ava','Ethan'
,'Mia','Michael','Emily','Alexander','Abigail','James',
'Madison','Daniel','Elizabeth','Elijah','Charlotte',
'Aiden','Chloe','Jayden','Ella','Benjamin','Amelia',
'Matthew','Avery','Logan','Sofia','David','Evelyn',
'Joseph','Harper','Anthony','Addison','Jackson','Grace',
'Lucas','Natalie','Joshua','Victoria','Andrew','Lily',
'Gabriel','Aubrey','Samuel','Lillian','Christopher',
'Zoey','John','Hannah','Dylan','Brooklyn','Ryan',
'Layla','Isaac','Samantha','Carter','Zoe','Luke',
'Leah','Nathan','Riley','Caleb','Scarlett','Owen',
'Anna','Christian','Savannah','Henry','Camila','Oliver',
'Audrey','Wyatt','Allison','Jonathan','Gabriella',
'Landon','Hailey','Jack','Sarah','Sebastian','Claire',
'Hunter','Aaliyah','Isaiah','Kaylee','Julian','Navaeh',
'Levi','Aria','Aaron','Alexis','Eli','Alexa','Brayden',
'Arianna']),
qs = "Daniel",
qsi = 'Alex';


console.log('Busqueda en lista de numeros')
// console.dir({ n, q });
console.log('Busqueda lineal existente')
console.dir(s.lineal(qs))
console.log('Busqueda binaria existente')
console.dir(s.binaria(qs))
console.log('Busqueda lineal inexistente')
console.dir(s.lineal(qsi))
console.log('Busqueda binaria inexistente')
console.dir(s.binaria(qsi));