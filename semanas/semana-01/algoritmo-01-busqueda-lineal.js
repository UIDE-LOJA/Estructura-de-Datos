// Algoritmo 1: Búsqueda Lineal
// Busca un elemento específico en una lista

function busquedaLineal(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna la posición donde encontró el elemento
        }
    }
    return -1; // No encontrado
}

// Ejemplo de uso:
const numeros = [5, 2, 8, 1, 9, 3];
const resultado = busquedaLineal(numeros, 8);
console.log("Posición del elemento 8:", resultado); // Resultado: 2

// PREGUNTA PARA ANÁLISIS:
// ¿Cuál es la complejidad temporal de este algoritmo?
// ¿Cuántas operaciones hace en el peor caso?
// ¿Qué pasa si la lista tiene n elementos?