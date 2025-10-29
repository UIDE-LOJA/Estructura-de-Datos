// Algoritmo 5: Encontrar el Mínimo
// Encuentra el elemento más pequeño en una lista

function encontrarMinimo(numeros) {
    let minimo = numeros[0];
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    
    return minimo;
}

// Ejemplo de uso:
const temperaturas = [25, 18, 30, 12, 28, 15];
const tempMinima = encontrarMinimo(temperaturas);
console.log("Temperatura mínima:", tempMinima); // Resultado: 12

// PREGUNTA PARA ANÁLISIS:
// ¿Es similar al algoritmo de buscar máximo?
// ¿Cuántas operaciones hace?
// ¿Cuál es su complejidad Big-O?