//Estructura basada en el archivo de Campus
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

//Esta función es útil cuando el arreglo esta ordenado
function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
    
        if(arr[inicio].charAt(0)===arr[siguiente].charAt(0)){  // Si coinciden, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }else{                                                 //En caso de que no lo encuentre aumenta en un valor los punteros
            inicio++;
            siguiente++;
        }
    }
    return null; // Si no se encuentra ningún par.
}
console.log(`La primer pareja del arreglo [${invitados}] mediante la función encontrarPareja es:`)
console.log(encontrarPareja(invitados));// Resultado: ["Carlos", "Cecilia"]

const miembros = ["Beto", "Carlos", "Daniel", "Diana", "Diego", "Eduardo"];

console.log(`La primer pareja del arreglo [${miembros}] mediante la función encontrarPareja es:`)
console.log(encontrarPareja(miembros));

//La siguiente estructura es útil cuando el arreglo no esta ordenado
function encontrarFamiliar(arr){
    for(let i=0; i <arr.length;i++){ //Este ciclo no se ejecutará hasta que el ciclo con j recorra el arreglo
        for(let j =i+1; j<arr.length;j++){ //Este ciclo va a recorrer a cada uno de los elementos del arreglo
            if(arr[i].charAt(0) === arr[j].charAt(0)){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
const familia =["Alejandro", "Gonzalo", "Adrian", "Beto", "Miguel","Rosa","Fernada","María"];

console.log(`La primer pareja del arreglo [${familia}] mediante una función llamada encontrarFamiliar es:`);

console.log(encontrarFamiliar(familia));
