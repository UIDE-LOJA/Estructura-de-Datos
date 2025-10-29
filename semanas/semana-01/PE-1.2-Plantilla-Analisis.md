# PE-1.2: Análisis de Complejidad Big-O
**Estudiante:** [Tu Nombre]  
**Fecha:** [Fecha]  
**Tiempo:** 35 minutos

---

## Instrucciones
Analiza cada uno de los 6 algoritmos JavaScript proporcionados siguiendo el método aprendido en clase. Para cada algoritmo, completa la siguiente tabla:

---

## Algoritmo 1: Búsqueda Lineal (EJEMPLO RESUELTO)

**Código:**
```javascript
function busquedaLineal(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}
```

**Análisis:**
- **Función:** Busca un elemento específico en una lista
- **Conteo de operaciones:**
  - Bucle for: se ejecuta hasta n veces
  - Comparación if: 1 por iteración
  - Return: 1 operación
- **Peor caso:** Elemento no está en la lista → n comparaciones + 1 return
- **Fórmula:** n + 1 operaciones
- **Simplificación:** n + 1 ≈ n
- **Complejidad Temporal:** O(n)
- **Complejidad Espacial:** O(1)
- **Justificación:** En el peor caso debe revisar todos los elementos, por lo tanto es lineal O(n).

---

## Algoritmo 2: [Nombre del algoritmo]

**Código:**
```javascript
[Copia aquí el código del algoritmo 2]
```

**Análisis:**
- **Función:** [Describe qué hace el algoritmo]
- **Conteo de operaciones:**
  - [Lista las operaciones principales]
- **Peor caso:** [Describe el escenario del peor caso]
- **Fórmula:** [Escribe la fórmula matemática]
- **Simplificación:** [Simplifica la fórmula]
- **Complejidad Temporal:** [O(?)]
- **Complejidad Espacial:** [O(?)]
- **Justificación:** [Explica en 1-2 líneas por qué tiene esa complejidad]

---

## Algoritmo 3: [Nombre del algoritmo]

**Código:**
```javascript
[Copia aquí el código del algoritmo 3]
```

**Análisis:**
- **Función:** [Describe qué hace el algoritmo]
- **Conteo de operaciones:**
  - [Lista las operaciones principales]
- **Peor caso:** [Describe el escenario del peor caso]
- **Fórmula:** [Escribe la fórmula matemática]
- **Simplificación:** [Simplifica la fórmula]
- **Complejidad Temporal:** [O(?)]
- **Complejidad Espacial:** [O(?)]
- **Justificación:** [Explica en 1-2 líneas por qué tiene esa complejidad]

---

## Algoritmo 4: [Nombre del algoritmo]

**Código:**
```javascript
[Copia aquí el código del algoritmo 4]
```

**Análisis:**
- **Función:** [Describe qué hace el algoritmo]
- **Conteo de operaciones:**
  - [Lista las operaciones principales]
- **Peor caso:** [Describe el escenario del peor caso]
- **Fórmula:** [Escribe la fórmula matemática]
- **Simplificación:** [Simplifica la fórmula]
- **Complejidad Temporal:** [O(?)]
- **Complejidad Espacial:** [O(?)]
- **Justificación:** [Explica en 1-2 líneas por qué tiene esa complejidad]

---

## Algoritmo 5: [Nombre del algoritmo]

**Código:**
```javascript
[Copia aquí el código del algoritmo 5]
```

**Análisis:**
- **Función:** [Describe qué hace el algoritmo]
- **Conteo de operaciones:**
  - [Lista las operaciones principales]
- **Peor caso:** [Describe el escenario del peor caso]
- **Fórmula:** [Escribe la fórmula matemática]
- **Simplificación:** [Simplifica la fórmula]
- **Complejidad Temporal:** [O(?)]
- **Complejidad Espacial:** [O(?)]
- **Justificación:** [Explica en 1-2 líneas por qué tiene esa complejidad]

---

## Algoritmo 6: [Nombre del algoritmo]

**Código:**
```javascript
[Copia aquí el código del algoritmo 6]
```

**Análisis:**
- **Función:** [Describe qué hace el algoritmo]
- **Conteo de operaciones:**
  - [Lista las operaciones principales]
- **Peor caso:** [Describe el escenario del peor caso]
- **Fórmula:** [Escribe la fórmula matemática]
- **Simplificación:** [Simplifica la fórmula]
- **Complejidad Temporal:** [O(?)]
- **Complejidad Espacial:** [O(?)]
- **Justificación:** [Explica en 1-2 líneas por qué tiene esa complejidad]

---

## Resumen Comparativo

| Algoritmo | Función | Complejidad Temporal | Complejidad Espacial | Mejor para |
|-----------|---------|---------------------|---------------------|------------|
| 1. Búsqueda Lineal | Buscar elemento | O(n) | O(1) | Listas pequeñas o no ordenadas |
| 2. [Nombre] | [Función] | O(?) | O(?) | [Cuándo usarlo] |
| 3. [Nombre] | [Función] | O(?) | O(?) | [Cuándo usarlo] |
| 4. [Nombre] | [Función] | O(?) | O(?) | [Cuándo usarlo] |
| 5. [Nombre] | [Función] | O(?) | O(?) | [Cuándo usarlo] |
| 6. [Nombre] | [Función] | O(?) | O(?) | [Cuándo usarlo] |

---

## Conclusión Personal
[Escribe 2-3 líneas sobre qué aprendiste del análisis Big-O]

---

**Nota:** Recuerda seguir el método aprendido en clase:
1. Identificar las operaciones principales
2. Contar cuántas veces se ejecutan
3. Encontrar la fórmula matemática
4. Simplificar ignorando constantes y coeficientes
5. Clasificar según Big-O