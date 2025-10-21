Compendio Exhaustivo: Notación Big-O, Tipos de Datos Abstractos (TDA) y Representación en Memoria
I. Introducción a la Notación Big-O (O Grande)
La complejidad algorítmica es un concepto fundamental en el análisis de algoritmos, diseñado para pronosticar el rendimiento de un algoritmo en relación con el tamaño de los datos de entrada. La notación Big-O (o O grande) es la forma estandarizada de expresar esta complejidad.
Definición y Propósito
La notación Big-O es una representación matemática que describe cómo crece la complejidad de un algoritmo en función del tamaño de la entrada, que generalmente se denota como "n". El propósito principal de esta notación es proveer una visión clara de cómo se comportará el algoritmo en el "peor de los casos", es decir, en el escenario que exige la mayor cantidad de operaciones.
Según Héctor de León (s.f.), la complejidad algorítmica es un tema que los programadores deben abordar en su vida laboral cuando necesitan optimizar códigos:
"La complejidad temporal es la complejidad computacional es decir la cantidad de tiempo que va a llevar tu algoritmo en ejecutarse Y cómo la cantidad de información que este algoritmo reciba puede afectar a su ejecución futura esto es importante para todo programador y para esto pues no no necesitamos inventar medidas ya hay una medida llamada la notación o grande la cual dependiendo las circunstancias va a tener un comportamiento...".
La notación Big-O mide la eficiencia y el rendimiento de un algoritmo utilizando la complejidad de tiempo y espacio, aunque no indica qué tan rápido es el tiempo de ejecución de un algoritmo en términos absolutos. Es crucial para garantizar que el código sea escalable y eficiente.
Tipos de Complejidad (Asintótica)
Existen varios tipos principales de complejidades que se miden con la notación Big-O, incluyendo:
• Constante: O(1)
• Lineal: O(n) (El tiempo de ejecución crecerá proporcionalmente al tamaño de la entrada).
• Logarítmica: O(nlogn)
• Cuadrática: O(n 
2
 ) (Un aumento en la entrada resultará en un crecimiento cuadrático en el tiempo).
• Exponencial: O(2 
n
 )
• Factorial: O(n!)
El gráfico de complejidad de Big-O es una notación asintótica utilizada para expresar el rendimiento de un algoritmo en función del tamaño de entrada.
II. Visión General del Tipo de Dato Abstracto (TDA)
El Tipo de Dato Abstracto (TDA) (en inglés, ADT por Abstract Data Type) es un modelo matemático que se define en términos de un conjunto de datos u objetos al cual se le asocian una serie de operaciones. El concepto de TAD se centra en la abstracción de datos.
Definición y Abstracción
Un TDA es un modelo. Los apuntes de Campos (2022) indican que:
La diferencia estriba en el énfasis que se pretende dar en las páginas que siguen a la especificación formal de los tipos (de ahí la expresión “tipos abstractos de datos”) como herramienta fundamental para el diseño modular de programas, en lugar de limitarse a presentar las estructuras de datos necesarias para representar los valores de los tipos definidos.
El objetivo de definir un TDA es establecer sin ambigüedades el conjunto de valores y el efecto de cada operación permitida. Señas y Martig (2005) explican que la definición de un TDA se determina por:
"el modelo matemático que lo sustenta y por un conjunto de operaciones que se definen sobre el mencionado modelo. [...] La definición de un TDA debe ser clara y precisa, ya que por un lado está el implementador del TDA quien tomará dicha descripción como base y la seguirá fielmente, y por otro lado está el usuario del TDA que lo usará teniendo en cuenta también lo que indica la definición".
El TDA provee una interfaz que permite realizar las operaciones permitidas, abstraiéndose de la manera en que dichas operaciones están implementadas. Es decir, se define el comportamiento del TAD, pero no se especifica cómo se almacenarán los valores ni cómo se implementarán las operaciones.
Implementación del TDA
La separación entre la interfaz (qué hace) y la implementación (cómo lo hace) es crucial. Una misma TDA puede ser implementada utilizando distintas estructuras de datos, manteniendo la misma funcionalidad.
La implementación de un TDA implica:
1. Encontrar una estructura de datos (ED) adecuada para representar el modelo subyacente.
2. Escribir los procedimientos o funciones que cumplirán con las tareas definidas por las operaciones.
El paradigma de orientación a objetos facilita esto mediante el encapsulamiento de datos y operaciones a través de clases e interfaces, ocultando los detalles de implementación. Un cambio en la implementación de un TDA debe ser transparente para los programas que lo utilizan.
Ejemplos de TAD Fundamentales
Muchos de los TADs más importantes son contenedores de datos, es decir, agregaciones de múltiples datos en una unidad conceptual, incluyendo operaciones para manipularlos.
Ejemplos típicos de TAD incluyen:
• Listas: Colecciones secuenciales de elementos.
• Pilas (Stack): Colecciones que siguen la propiedad LIFO (Last In, First Out). Utilizadas, por ejemplo, para llevar el seguimiento de nodos a procesar en ciertos algoritmos.
• Colas (Queue): Colecciones que siguen la propiedad FIFO (First In, First Out).
• Diccionarios/Tablas: Conjuntos de pares clave-valor.
• Árboles: Tipos arborescentes que representan colecciones de datos en una jerarquía.
III. Representación en Memoria: Arreglo vs. Nodo/Enlace (Estática vs. Dinámica)
Las estructuras de datos se pueden clasificar, según su organización en memoria, como enlazadas (usando punteros) o no enlazadas (como los arreglos/vectores). Esta elección tiene implicaciones directas en el coste temporal (Big-O) y espacial de las operaciones.
A. Representación Estática (Arreglo/Vector)
La representación estática, a menudo implementada mediante un arreglo (o vector), implica que el espacio de almacenamiento se conoce en tiempo de compilación y se mantiene reservado durante la ejecución, independientemente de la necesidad de uso real.
1. Características:
    ◦ Contigüidad: Los elementos se almacenan en ubicaciones de memoria contiguas.
    ◦ Acceso Directo: Permite la representación de acceso directo (como las tablas hash basadas en vectores).
    ◦ Coste en Tiempo: La ventaja fundamental del acceso directo (vector) es que el coste de operaciones como insertar, modificar valor, obtener valor y borrar es O(1) (coste constante).
    ◦ Limitación: Si un arreglo necesita redimensionarse (por ejemplo, para insertar un elemento cuando está lleno), esta operación implica copiar todos los n elementos al nuevo arreglo más grande, resultando en una complejidad de O(n).
2. Uso en TADs:
    ◦ Pilas y Colas: Se puede usar una representación estática, aunque puede limitar la capacidad máxima (como en la representación estática circular de una cola, donde la operación de añadir se vuelve parcial si se supera el tamaño máximo, max).
B. Representación Dinámica (Nodo/Enlace o Punteros)
La representación dinámica, típicamente utilizando nodos y enlaces (punteros), permite que el espacio de almacenamiento se obtenga durante la ejecución, a medida que se necesita.
1. Características:
    ◦ Nodos y Punteros: Se usa memoria dinámica con punteros. Un apuntador (o puntero) es un valor que direcciona una determinada célula o registro en la memoria.
    ◦ Estructura Dinámica: La cantidad máxima de memoria ocupada no se conoce hasta que finaliza la ejecución.
    ◦ Coste en Tiempo (Listas Enlazadas): En implementaciones dinámicas (como listas enlazadas ordenadas para un diccionario), operaciones como añadir, buscar y borrar generalmente tienen un coste de O(n) en el peor de los casos, donde n es el cardinal del diccionario.
    ◦ Ejemplo de Nodos Enlazados: En la implementación dinámica de una cola, se utilizan punteros (ptDato ↑ unDato) para enlazar los nodos, donde cada nodo contiene el dato (elemento) y un puntero al siguiente (sig:ptDato).
2. Ventajas y Desventajas (Arreglo vs. Enlace):
Representación
Coste en Espacio
Coste en Tiempo (Peor Caso) para operaciones clave (Añadir/Buscar/Borrar)
Flexibilidad
Arreglo/Vector (Acceso Directo)
O(MAX) (Fijo)
O(1)
Menos flexible; requiere redimensionamiento costoso (O(n))
Lista Enlazada Ordenada (Nodo/Enlace)
O(n) (Dinámico)
O(n)
Más flexible; evita limitación de cardinal máximo en tiempo de compilación
Árbol Binario de Búsqueda Equilibrado (AVL)
O(n)
O(\log n)
Excelente rendimiento equilibrado
Una implementación dinámica (basada en punteros) evita la limitación impuesta por las implementaciones estáticas, las cuales se basan en vectores con un cardinal máximo (max) fijado en tiempo de compilación, y además previene que el coste espacial sea O(max) sin importar el cardinal real del diccionario.
En el contexto de estructuras enlazadas como las tablas hash con encadenamiento separado, los nodos se almacenan en una lista enlazada mediante punteros, donde la dirección del primer elemento se guarda en el componente del vector correspondiente a la entrada primaria (zona de desbordamientos).
Referencias
Angel Vázquez Patiño. (s.f.). Programación 3: tablas de dispersión [Presentación en PPTX]. SlideShare.
Ángel Software Dev [@angelsoftwaredev]. (s.f.). Entendiendo TODO sobre ARREGLOS de programación (ARRAYS) [Video]. YouTube.
Alves, S. (2024, 29 de octubre). Complejidad algorítmica: Notación Big-O. Alveritmos.
Campos, J. (2022). Apuntes de Estructuras de Datos y Algoritmos (2a ed., v. 4). Departamento de Informática e Ingeniería de Sistemas, Universidad de Zaragoza.
Chio Code [@ChioCode]. (s.f.-a). Aprende a usar Pilas y Colas | Estructuras de Datos [Video]. YouTube.
Chio Code [@ChioCode]. (s.f.-b). Estructuras de Datos | Primeros Pasos [Video]. YouTube.
Corporación Universitaria Remington. (s.f.). Estructuras de Datos. (Obra publicada bajo licencia Creative Commons).
De León, H. [@hdeleonnet]. (2024, 18 de abril). Notación Big O Explicado con Código [Video]. YouTube.
JUG Nicaragua. (s.f.). Serie Estructuras de Datos: Pilas y Colas [Video]. YouTube.
Q2BStudio. (s.f.). Magia de las Tablas Hash: Guía Definitiva (Parte 1).
Señas, P., & Martig, S. (2005). Estructuras de Datos y Algoritmos: Módulo I Tipos de datos, estructuras de datos y tipos de datos abstractos.
TecnoDigital Informatec Digital. (2025, 1 de julio). Guía Completa para Recorrer Árboles Binarios: Métodos, Ejemplos y Aplicaciones.
Universidad Nacional del Sur (UNS). (s.f.-a). Estructuras de Datos Clase 4 – Pilas y colas.
Universidad Nacional del Sur (UNS). (s.f.-b). TABLAS HASH.
Velez, D. A., Garzón, M. A., & Parra, B. S. (2020). Solución de Colisiones para Búsquedas Internas.
Villca Gutierrez, C. F. (Traductor). (2024, 1 de febrero). Guía: Notación Big O - Gráfico de complejidad de tiempo. freeCodeCamp.