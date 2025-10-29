// Algoritmo 10: Búsqueda Binaria (Avanzado)
// Busca un elemento en una lista ORDENADA dividiendo por la mitad

function busquedaBinaria(listaOrdenada, elemento) {
    let inicio = 0;
    let fin = listaOrdenada.length - 1;
    
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        
        if (listaOrdenada[medio] === elemento) {
            return medio; // Encontrado
        }
        
        if (listaOrdenada[medio] < elemento) {
            inicio = medio + 1; // Buscar en la mitad derecha
        } else {
            fin = medio - 1; // Buscar en la mitad izquierda
        }
    }
    
    return -1; // No encontrado
}

// Ejemplo de uso:
const numerosOrdenados = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const posicion = busquedaBinaria(numerosOrdenados, 7);
console.log("Posición del elemento 7:", posicion); // Resultado: 3

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántas veces se puede dividir n por 2?
// ¿Es más eficiente que la búsqueda lineal?
// ¿Cuál es su complejidad Big-O?