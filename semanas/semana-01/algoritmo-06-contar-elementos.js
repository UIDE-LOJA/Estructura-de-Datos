// Algoritmo 6: Contar Elementos Específicos
// Cuenta cuántas veces aparece un elemento en la lista

function contarElementos(lista, elemento) {
    let contador = 0;
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            contador++;
        }
    }
    
    return contador;
}

// Ejemplo de uso:
const frutas = ["manzana", "pera", "manzana", "uva", "manzana", "pera"];
const cantidadManzanas = contarElementos(frutas, "manzana");
console.log("Cantidad de manzanas:", cantidadManzanas); // Resultado: 3

// PREGUNTA PARA ANÁLISIS:
// ¿Tiene que revisar toda la lista?
// ¿Cuántas operaciones por elemento?
// ¿Cuál es la complejidad temporal?