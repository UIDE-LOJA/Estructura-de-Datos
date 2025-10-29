// Algoritmo 7: Operación Constante
// Imprime solo el primer y último elemento

function imprimirPrimeroYUltimo(lista) {
    if (lista.length === 0) {
        console.log("Lista vacía");
        return;
    }
    
    console.log("Primer elemento:", lista[0]);
    console.log("Último elemento:", lista[lista.length - 1]);
}

// Ejemplo de uso:
const ciudades = ["Quito", "Guayaquil", "Cuenca", "Ambato", "Loja"];
imprimirPrimeroYUltimo(ciudades);
// Resultado: 
// Primer elemento: Quito
// Último elemento: Loja

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántas operaciones hace sin importar el tamaño?
// ¿Qué pasa si la lista tiene 10 o 1000 elementos?
// ¿Cuál es su complejidad Big-O?