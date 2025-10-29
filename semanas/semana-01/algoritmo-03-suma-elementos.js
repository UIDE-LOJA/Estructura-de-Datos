// Algoritmo 3: Suma de Todos los Elementos
// Calcula la suma total de una lista de números

function sumarElementos(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    
    return suma;
}

// Ejemplo de uso:
const valores = [10, 20, 30, 40, 50];
const total = sumarElementos(valores);
console.log("Suma total:", total); // Resultado: 150

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántas veces se ejecuta el bucle?
// ¿Qué operaciones se hacen en cada iteración?
// ¿Cuál es la complejidad temporal?