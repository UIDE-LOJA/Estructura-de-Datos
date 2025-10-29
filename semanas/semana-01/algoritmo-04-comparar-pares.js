// Algoritmo 4: Comparar Todos los Pares
// Compara cada elemento con todos los demás elementos

function compararPares(lista) {
    let comparaciones = 0;
    
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            comparaciones++;
            console.log(`Comparando ${lista[i]} con ${lista[j]}`);
        }
    }
    
    return comparaciones;
}

// Ejemplo de uso:
const datos = [1, 2, 3, 4];
const totalComparaciones = compararPares(datos);
console.log("Total de comparaciones:", totalComparaciones);

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántos bucles anidados hay?
// ¿Cuántas comparaciones se hacen para n elementos?
// ¿Cuál es la complejidad Big-O?