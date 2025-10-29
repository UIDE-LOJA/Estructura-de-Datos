// Algoritmo 9: Suma de Matriz (Bucles Anidados)
// Suma todos los elementos de una matriz 2D

function sumarMatriz(matriz) {
    let suma = 0;
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j];
        }
    }
    
    return suma;
}

// Ejemplo de uso:
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const total = sumarMatriz(matriz);
console.log("Suma total de la matriz:", total); // Resultado: 45

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántos bucles anidados hay?
// Si la matriz es n x n, ¿cuántas operaciones?
// ¿Cuál es la complejidad Big-O?