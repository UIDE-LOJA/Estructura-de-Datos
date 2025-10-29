// Algoritmo 2: Acceso Directo a Array
// Obtiene un elemento en una posición específica

function obtenerElemento(lista, posicion) {
    if (posicion >= 0 && posicion < lista.length) {
        return lista[posicion];
    }
    return null; // Posición inválida
}

// Ejemplo de uso:
const colores = ["rojo", "azul", "verde", "amarillo", "morado"];
const color = obtenerElemento(colores, 2);
console.log("Color en posición 2:", color); // Resultado: "verde"

// PREGUNTA PARA ANÁLISIS:
// ¿Cuántas operaciones hace este algoritmo?
// ¿Importa el tamaño de la lista?
// ¿Cuál es su complejidad Big-O?