
function ejemplo1(){
    return "Bienvenido";
}


class SerVivo {
    caminar(nombre) {
        nombre = nombre !== undefined ? nombre : "sin nombre";
        return `Ahora está caminando: ${nombre}`;
    }
}

class Persona extends SerVivo {

    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    moverse() {
        return this.caminar(this.nombre);
    }

}


const findIndexExample = (buscar, arr) => {
    const result = arr.findIndex(el => el === buscar);
    console.log(`buscando "${buscar}" en [${arr}]: ${result}`)
}

const everyExample = (arr) => {
    const result = arr.every(el => el !== undefined);
    console.log(`¿Todos los elementos de [${arr}] están definidos?: ${result}`)
}

const someExample = (arr) => {
    const result = arr.some(el => el === undefined || el === null)
    console.log(`¿Tengo nulos y no definidos en [${arr}]?: ${result}`)
}

const filterExample = (arr) => {
    const result = arr.filter(el => el > 0)
    console.log(`Los elementos de [${arr}] mayores a 0 son: ${result}`)
}

const mapExample = (arr) => {
    const result = arr.map(el => Math.round(Math.sqrt(el) * 1000 + Number.EPSILON) / 1000)
    console.log(`Las raíces cuadradas de cada [${arr}] son: ${result}`)
}


const output_data = ejemplo1();
console.log(output_data);

const not_human = new SerVivo();
console.log("\n** Un ser vivo sin nombre **");
console.log(not_human.caminar());

console.log("\n** Una persona **");
const human = new Persona("Juanito");
console.log(human.moverse());

const arr = [
    "estas", "son", "las", "palabras", "más" ,"difíciles"
]
findIndexExample("más", arr);

const arr2 = [
    1, 2, null, undefined, 4, 5
]
const arr3 = [
    1, 2, 3, 4, 5
]
everyExample(arr2);
everyExample(arr3);

someExample(arr2);
someExample(arr3);


const arr4 = [
    1, -2, 4, 100, -200, 10, 35, 8
]
filterExample(arr4)

const arr5 = [2, 4, 3, 6, 8, 234, 345, 23523]
mapExample(arr5);