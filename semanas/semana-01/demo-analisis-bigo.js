// Demo simple: Cómo contar operaciones para Big-O
// Algoritmo: Buscar el máximo en una lista

function buscarMaximoConAnalisis(lista) {
    console.log("=== ANÁLISIS BIG-O PASO A PASO ===");
    console.log("Lista:", lista);
    console.log("Tamaño (n):", lista.length);
    console.log("");
    
    let operaciones = 0;
    
    // PASO 1: Inicialización (1 operación)
    console.log("PASO 1: Inicialización");
    let maximo = lista[0];
    operaciones = operaciones + 1;
    console.log("  let maximo = lista[0] → 1 operación");
    console.log("  Total operaciones:", operaciones);
    console.log("");
    
    // PASO 2: Bucle (n-1 operaciones)
    console.log("PASO 2: Bucle for");
    console.log("  Se ejecuta", lista.length - 1, "veces (n-1)");
    
    for (let i = 1; i < lista.length; i++) {
        // Cada iteración cuenta como 1 operación (la comparación)
        operaciones = operaciones + 1;
        console.log(`  Iteración ${i}: Comparar ${lista[i]} > ${maximo} → +1 operación`);
        
        if (lista[i] > maximo) {
            maximo = lista[i];
            console.log(`    Nuevo máximo: ${maximo}`);
        }
    }
    
    console.log("  Total después del bucle:", operaciones);
    console.log("");
    
    // PASO 3: Return (1 operación)
    console.log("PASO 3: Return");
    operaciones = operaciones + 1;
    console.log("  return maximo → 1 operación");
    console.log("  Total final:", operaciones);
    console.log("");
    
    // ANÁLISIS FINAL
    console.log("=== ANÁLISIS FINAL ===");
    const n = lista.length;
    console.log("Fórmula: 1 + (n-1) + 1 = n + 1");
    console.log(`Para n=${n}: ${n} + 1 = ${n + 1}`);
    console.log("Operaciones reales:", operaciones);
    console.log("");
    console.log("Simplificación Big-O:");
    console.log("  n + 1 ≈ n (ignoramos constantes)");
    console.log("  RESULTADO: O(n)");
    
    return maximo;
}

// Función simple para usar en la presentación
function buscarMaximo(lista) {
    let maximo = lista[0];
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
    }
    
    return maximo;
}

// Ejemplos simples para probar
function ejecutarEjemplos() {
    console.log("EJEMPLOS DE ANÁLISIS BIG-O");
    console.log("=".repeat(40));
    
    const ejemplos = [
        [3, 7, 2, 9, 1, 5],
        [10, 5, 8],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ];
    
    ejemplos.forEach((lista, index) => {
        console.log(`\n--- EJEMPLO ${index + 1} ---`);
        const resultado = buscarMaximoConAnalisis(lista);
        console.log(`Máximo encontrado: ${resultado}`);
        console.log("");
    });
}

// Cargar demo
if (typeof window === 'undefined') {
    // Node.js
    ejecutarEjemplos();
} else {
    // Navegador
    console.log("Demo Big-O cargado. Ejecuta ejecutarEjemplos() para ver ejemplos.");
}