// Algoritmo 8: Duplicar Todos los Elementos
// Crea una nueva lista con cada elemento duplicado

function duplicarElementos(numeros) {
    let resultado = [];
    
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2);
    }
    
    return resultado;
}

// Ejemplo de uso:
const originales = [1, 2, 3, 4, 5];
const duplicados = duplicarElementos(originales);
console.log("Números originales:", originales);
console.log("Números duplicados:", duplicados); // [2, 4, 6, 8, 10]

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántas veces se ejecuta el bucle?
// ¿Qué operaciones se hacen por elemento?
// ¿Cuál es la complejidad temporal y espacial?