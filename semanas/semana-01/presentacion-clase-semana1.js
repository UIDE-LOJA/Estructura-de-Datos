// Custom JavaScript for Semana 1 - Fundamentos de Estructuras de Datos

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Presentación Semana 1 - Fundamentos de Estructuras de Datos cargada');
    
    // Add interactive behaviors
    initializeInteractiveElements();
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
    
    // Initialize Big-O calculator
    initializeBigOCalculator();
    
    // Initialize complexity visualizer
    initializeComplexityVisualizer();
    
    // Initialize complexity chart
    initializeComplexityChart();
});

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to concept boxes
    const conceptBoxes = document.querySelectorAll('.concept-box');
    conceptBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click effects to complexity cards
    const complexityCards = document.querySelectorAll('.complexity-card');
    complexityCards.forEach(card => {
        card.addEventListener('click', function() {
            const complexity = this.querySelector('h5').textContent;
            showComplexityDetails(complexity);
        });
    });
    
    // Add click effects to TDA cards
    const tdaCards = document.querySelectorAll('.tda-card');
    tdaCards.forEach(card => {
        card.addEventListener('click', function() {
            const tdaName = this.querySelector('h5').textContent;
            showTDADetails(tdaName);
        });
    });
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Press 'h' to show help (but not Ctrl+H)
        if ((event.key === 'h' || event.key === 'H') && !event.ctrlKey && !event.metaKey) {
            showHelp();
        }
        
        // Press 'b' to show Big-O calculator (but not Ctrl+B)
        if ((event.key === 'b' || event.key === 'B') && !event.ctrlKey && !event.metaKey) {
            showBigOCalculator();
        }
        
        // Press 'c' to show complexity comparison (but not Ctrl+C)
        if ((event.key === 'c' || event.key === 'C') && !event.ctrlKey && !event.metaKey) {
            showComplexityComparison();
        }
        
        // Press 't' to show TDA cheat sheet (but not Ctrl+T)
        if ((event.key === 't' || event.key === 'T') && !event.ctrlKey && !event.metaKey) {
            showTDACheatSheet();
        }
    });
}

// Show help overlay
function showHelp() {
    const helpContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="helpOverlay">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px;">
                <h3>Atajos de Teclado</h3>
                <ul style="text-align: left;">
                    <li><strong>H:</strong> Mostrar esta ayuda</li>
                    <li><strong>B:</strong> Calculadora Big-O</li>
                    <li><strong>C:</strong> Comparación de complejidades</li>
                    <li><strong>T:</strong> Guía de TDA</li>
                    <li><strong>ESC:</strong> Cerrar overlays</li>
                    <li><strong>Espacio:</strong> Siguiente slide</li>
                    <li><strong>Shift + Espacio:</strong> Slide anterior</li>
                </ul>
                <button onclick="closeOverlay('helpOverlay')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #28a745; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', helpContent);
    
    // Close on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeOverlay('helpOverlay');
        }
    });
}

// Show Big-O calculator
function showBigOCalculator() {
    const calculatorContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="bigOCalculator">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 600px;">
                <h3>Calculadora de Complejidad Big-O</h3>
                <div style="margin: 1rem 0;">
                    <label>Tamaño de entrada (n): </label>
                    <input type="number" id="inputSize" value="1000" style="padding: 0.5rem; margin: 0.5rem;">
                </div>
                <div id="complexityResults" style="margin: 1rem 0; font-family: monospace;">
                    <!-- Results will be populated here -->
                </div>
                <button onclick="calculateComplexity()" 
                        style="margin: 0.5rem; padding: 0.5rem 1rem; 
                               background: #28a745; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Calcular
                </button>
                <button onclick="closeOverlay('bigOCalculator')" 
                        style="margin: 0.5rem; padding: 0.5rem 1rem; 
                               background: #910048; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', calculatorContent);
    calculateComplexity(); // Show initial calculation
}

// Calculate complexity for different Big-O notations
function calculateComplexity() {
    const n = parseInt(document.getElementById('inputSize').value) || 1000;
    const results = document.getElementById('complexityResults');
    
    const complexities = [
        { name: 'O(1)', value: 1, color: '#28a745' },
        { name: 'O(log n)', value: Math.log2(n), color: '#17a2b8' },
        { name: 'O(n)', value: n, color: '#ffc107' },
        { name: 'O(n log n)', value: n * Math.log2(n), color: '#ff9800' },
        { name: 'O(n²)', value: n * n, color: '#dc3545' },
        { name: 'O(2ⁿ)', value: n <= 20 ? Math.pow(2, n) : 'Demasiado grande', color: '#6f42c1' }
    ];
    
    let html = `<h4>Para n = ${n}:</h4>`;
    complexities.forEach(comp => {
        const value = typeof comp.value === 'number' ? 
                     comp.value.toLocaleString() : comp.value;
        html += `<div style="color: ${comp.color}; margin: 0.5rem 0;">
                    ${comp.name}: ${value} operaciones
                 </div>`;
    });
    
    results.innerHTML = html;
}

// Show complexity comparison
function showComplexityComparison() {
    const comparisonContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="complexityComparison">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 700px;">
                <h3>Comparación de Complejidades</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                    <thead>
                        <tr style="background: #28a745; color: white;">
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">Complejidad</th>
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">n=10</th>
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">n=100</th>
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">n=1000</th>
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 0.5rem; border: 1px solid #ddd; font-weight: bold;">O(1)</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">1</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">1</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">1</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Acceso a arreglo</td>
                        </tr>
                        <tr style="background: #f8f9fa;">
                            <td style="padding: 0.5rem; border: 1px solid #ddd; font-weight: bold;">O(log n)</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">3</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">7</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">10</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Búsqueda binaria</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.5rem; border: 1px solid #ddd; font-weight: bold;">O(n)</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">10</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">100</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">1,000</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Búsqueda lineal</td>
                        </tr>
                        <tr style="background: #f8f9fa;">
                            <td style="padding: 0.5rem; border: 1px solid #ddd; font-weight: bold;">O(n²)</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">100</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">10,000</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">1,000,000</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Bubble sort</td>
                        </tr>
                    </tbody>
                </table>
                <button onclick="closeOverlay('complexityComparison')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #910048; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', comparisonContent);
}

// Show TDA cheat sheet
function showTDACheatSheet() {
    const cheatSheetContent = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 9999; display: flex; 
                    align-items: center; justify-content: center;" id="tdaCheatSheet">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 600px;">
                <h3>Guía Rápida de TDA</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: left;">
                    <div>
                        <h4 style="color: #28a745;">Características</h4>
                        <p><strong>Abstracción:</strong> Oculta implementación</p>
                        <p><strong>Encapsulamiento:</strong> Datos + operaciones</p>
                        <p><strong>Interfaz:</strong> Define qué hace</p>
                    </div>
                    <div>
                        <h4 style="color: #910048;">Ejemplos Comunes</h4>
                        <p><strong>Lista:</strong> Secuencia de elementos</p>
                        <p><strong>Pila:</strong> LIFO (Last In, First Out)</p>
                        <p><strong>Cola:</strong> FIFO (First In, First Out)</p>
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <h4 style="color: #23356e;">Implementación</h4>
                    <p>1. Elegir estructura de datos apropiada</p>
                    <p>2. Implementar operaciones definidas</p>
                    <p>3. Mantener abstracción (interfaz vs implementación)</p>
                </div>
                <button onclick="closeOverlay('tdaCheatSheet')" 
                        style="margin-top: 1rem; padding: 0.5rem 1rem; 
                               background: #910048; color: white; border: none; 
                               border-radius: 5px; cursor: pointer;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', cheatSheetContent);
}

// Show complexity details
function showComplexityDetails(complexity) {
    const details = {
        'O(1)': {
            name: 'Constante',
            description: 'El tiempo de ejecución no cambia con el tamaño de entrada',
            examples: ['Acceso a elemento de arreglo', 'Inserción en hash table', 'Push/Pop en pila'],
            color: '#28a745'
        },
        'O(log n)': {
            name: 'Logarítmica',
            description: 'El tiempo crece logarítmicamente con el tamaño de entrada',
            examples: ['Búsqueda binaria', 'Inserción en árbol balanceado', 'Heap operations'],
            color: '#17a2b8'
        },
        'O(n)': {
            name: 'Lineal',
            description: 'El tiempo crece proporcionalmente al tamaño de entrada',
            examples: ['Búsqueda lineal', 'Recorrer arreglo', 'Encontrar máximo'],
            color: '#ffc107'
        },
        'O(n²)': {
            name: 'Cuadrática',
            description: 'El tiempo crece cuadráticamente con el tamaño de entrada',
            examples: ['Bubble sort', 'Selection sort', 'Nested loops'],
            color: '#dc3545'
        }
    };
    
    const detail = details[complexity];
    if (detail) {
        alert(`${complexity} - ${detail.name}\n\n${detail.description}\n\nEjemplos:\n• ${detail.examples.join('\n• ')}`);
    }
}

// Show TDA details
function showTDADetails(tdaName) {
    const details = {
        'Listas': 'Colección secuencial de elementos con operaciones de inserción, eliminación y búsqueda.',
        'Pilas (Stack)': 'Estructura LIFO (Last In, First Out) con operaciones push, pop y top.',
        'Colas (Queue)': 'Estructura FIFO (First In, First Out) con operaciones enqueue, dequeue y front.',
        'Árboles': 'Estructura jerárquica con nodos padre e hijos, útil para búsquedas eficientes.',
        'Diccionarios': 'Colección de pares clave-valor con operaciones de inserción, búsqueda y eliminación.'
    };
    
    const detail = details[tdaName];
    if (detail) {
        alert(`${tdaName}\n\n${detail}`);
    }
}

// Close overlay function
function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.remove();
    }
}

// Initialize Big-O calculator
function initializeBigOCalculator() {
    // This function can be expanded to add more calculator functionality
    console.log('Big-O calculator initialized');
}

// Initialize complexity visualizer
function initializeComplexityVisualizer() {
    // Add visual effects to complexity cards
    const complexityCards = document.querySelectorAll('.complexity-card');
    complexityCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Add slide-specific behaviors
Reveal.addEventListener('slidechanged', function(event) {
    const currentSlide = event.currentSlide;
    
    // Auto-animate complexity cards on Big-O slides
    if (currentSlide.querySelector('.complexity-grid')) {
        animateComplexityCards();
    }
    
    // Auto-animate TDA cards
    if (currentSlide.querySelector('.tda-examples')) {
        animateTDACards();
    }
    
    // Auto-animate memory type cards
    if (currentSlide.querySelector('.memory-type-card')) {
        animateMemoryCards();
    }
});

// Animate complexity cards
function animateComplexityCards() {
    const cards = document.querySelectorAll('.complexity-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 300);
        }, index * 150);
    });
}

// Animate TDA cards
function animateTDACards() {
    const cards = document.querySelectorAll('.tda-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'rotateY(360deg)';
            card.style.transition = 'transform 0.6s ease';
            setTimeout(() => {
                card.style.transform = 'rotateY(0deg)';
            }, 600);
        }, index * 200);
    });
}

// Animate memory cards
function animateMemoryCards() {
    const cards = document.querySelectorAll('.memory-type-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.4s ease';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 400);
        }, index * 300);
    });
}

// Variables globales para la demostración
let searchDemo = {
    isRunning: false,
    data: [],
    currentIndex: 0,
    target: 'María',
    startTime: 0,
    intervalId: null,
    comparisons: 0
};

// Generar datos de prueba
function generateTestData(size) {
    const nombres = [
        'Ana', 'Carlos', 'Luis', 'Pedro', 'Sofia', 'Diego', 'Elena', 'Miguel', 
        'Carmen', 'Javier', 'Laura', 'Roberto', 'Patricia', 'Fernando', 'Isabel',
        'Antonio', 'Rosa', 'Manuel', 'Teresa', 'José', 'Pilar', 'Francisco',
        'Dolores', 'Juan', 'Mercedes', 'Ángel', 'Concepción', 'Jesús', 'Josefa'
    ];
    
    const data = [];
    
    // Agregar nombres aleatorios
    for (let i = 0; i < size - 1; i++) {
        const randomName = nombres[Math.floor(Math.random() * nombres.length)];
        data.push(`${randomName}${i > 20 ? i : ''}`);
    }
    
    // Insertar el objetivo en una posición aleatoria (pero no al principio para mostrar el problema)
    const targetPosition = Math.floor(size * 0.3) + Math.floor(Math.random() * Math.floor(size * 0.6));
    data.splice(targetPosition, 0, searchDemo.target);
    
    return data;
}

// Iniciar demostración de búsqueda
function startSearchDemo() {
    if (searchDemo.isRunning) return;
    
    const size = parseInt(document.getElementById('dataSize').value);
    const speed = parseInt(document.getElementById('speed').value);
    
    // Generar datos
    searchDemo.data = generateTestData(size);
    searchDemo.currentIndex = 0;
    searchDemo.comparisons = 0;
    searchDemo.startTime = Date.now();
    searchDemo.isRunning = true;
    
    // Actualizar UI
    document.getElementById('startDemo').disabled = true;
    document.getElementById('currentElement').textContent = '0';
    document.getElementById('comparisons').textContent = '0';
    document.getElementById('timeElapsed').textContent = '0.0s';
    
    const searchResult = document.getElementById('searchResult');
    if (searchResult) searchResult.style.display = 'none';
    
    const performanceMessage = document.getElementById('performanceMessage');
    if (performanceMessage) performanceMessage.style.display = 'none';
    
    // Crear visualización inicial
    createSearchVisualization();
    
    // Iniciar búsqueda animada
    searchDemo.intervalId = setInterval(() => {
        performSearchStep();
    }, speed);
}

// Detener demostración
function stopSearchDemo() {
    if (searchDemo.intervalId) {
        clearInterval(searchDemo.intervalId);
        searchDemo.intervalId = null;
    }
    searchDemo.isRunning = false;
    document.getElementById('startDemo').disabled = false;
}

// Crear visualización de la búsqueda estática
function createSearchVisualization() {
    const container = document.getElementById('searchVisualization');
    container.innerHTML = '';
    
    // Mostrar elementos con fuente más pequeña
    const maxVisible = Math.min(searchDemo.data.length, 100);
    const showEllipsis = searchDemo.data.length > maxVisible;
    
    for (let i = 0; i < maxVisible; i++) {
        const element = document.createElement('div');
        element.id = `element-${i}`;
        element.style.cssText = `
            padding: 0.2rem 0.4rem;
            margin: 0.1rem;
            border: 1px solid #ddd;
            border-radius: 3px;
            background: #ffffff;
            font-size: 0.65em;
            font-weight: bold;
            min-width: 35px;
            text-align: center;
            transition: all 0.3s ease;
            display: inline-block;
        `;
        element.textContent = searchDemo.data[i];
        container.appendChild(element);
    }
    
    if (showEllipsis) {
        const ellipsis = document.createElement('div');
        ellipsis.style.cssText = `
            padding: 0.2rem 0.4rem;
            margin: 0.1rem;
            font-size: 0.65em;
            color: #666;
            font-style: italic;
            display: inline-block;
        `;
        ellipsis.textContent = `... +${searchDemo.data.length - maxVisible}`;
        container.appendChild(ellipsis);
    }
}

// Realizar un paso de búsqueda
function performSearchStep() {
    if (searchDemo.currentIndex >= searchDemo.data.length) {
        // No encontrado
        finishSearch(false);
        return;
    }
    
    const currentElement = searchDemo.data[searchDemo.currentIndex];
    searchDemo.comparisons++;
    
    // Actualizar estadísticas
    document.getElementById('currentElement').textContent = searchDemo.currentIndex + 1;
    document.getElementById('comparisons').textContent = searchDemo.comparisons;
    
    const elapsed = (Date.now() - searchDemo.startTime) / 1000;
    document.getElementById('timeElapsed').textContent = elapsed.toFixed(2) + 's';
    
    // Actualizar barra de progreso
    const progress = ((searchDemo.currentIndex + 1) / searchDemo.data.length) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
    
    // Actualizar visualización estática con efecto de barrido
    if (searchDemo.currentIndex < 100) { // Solo si es visible
        const elementDiv = document.getElementById(`element-${searchDemo.currentIndex}`);
        if (elementDiv) {
            // Colorear elemento actual mientras se está revisando
            elementDiv.style.background = 'linear-gradient(135deg, #ff9800, #ffb74d)';
            elementDiv.style.borderColor = '#ff9800';
            elementDiv.style.color = '#ffffff';
            elementDiv.style.transform = 'scale(1.1)';
            elementDiv.style.opacity = '1';
            elementDiv.style.boxShadow = '0 4px 12px rgba(255, 152, 0, 0.5)';
            elementDiv.style.fontWeight = 'bold';
            elementDiv.style.zIndex = '50';
            elementDiv.style.position = 'relative';
            elementDiv.style.animation = 'searching 0.5s ease-in-out';
            
            // Después de un breve momento, marcar como revisado si no es el objetivo
            setTimeout(() => {
                if (searchDemo.data[searchDemo.currentIndex] !== searchDemo.target && searchDemo.isRunning) {
                    // Marcar como revisado (rojo)
                    elementDiv.style.background = 'linear-gradient(135deg, #f44336, #ef5350)';
                    elementDiv.style.borderColor = '#f44336';
                    elementDiv.style.color = '#ffffff';
                    elementDiv.style.transform = 'scale(0.95)';
                    elementDiv.style.opacity = '0.8';
                    elementDiv.style.boxShadow = '0 2px 6px rgba(244, 67, 54, 0.3)';
                    elementDiv.style.zIndex = '1';
                }
            }, 200); // Breve pausa para mostrar el elemento siendo revisado
        }
    }
    
    // Verificar si encontramos el objetivo
    if (currentElement === searchDemo.target) {
        finishSearch(true);
        return;
    }
    
    searchDemo.currentIndex++;
}

// Finalizar búsqueda
function finishSearch(found) {
    stopSearchDemo();
    
    const elapsed = (Date.now() - searchDemo.startTime) / 1000;
    const resultDiv = document.getElementById('searchResult');
    
    if (found) {
        resultDiv.style.background = 'rgba(40, 167, 69, 0.1)';
        resultDiv.style.color = '#28a745';
        resultDiv.style.border = '2px solid #28a745';
        resultDiv.innerHTML = `
            <i class="fas fa-check-circle"></i> 
            ¡ENCONTRADO! "${searchDemo.target}" en la posición ${searchDemo.currentIndex + 1}<br>
            <small>Tiempo: ${elapsed.toFixed(2)}s | Comparaciones: ${searchDemo.comparisons} | Elementos revisados: ${searchDemo.currentIndex + 1}/${searchDemo.data.length}</small>
        `;
        
        // ¡ELEMENTO ENCONTRADO! Efecto dramático
        if (searchDemo.currentIndex < 100) { // Solo si es visible
            const foundElement = document.getElementById(`element-${searchDemo.currentIndex}`);
            if (foundElement) {
                // Primero, un momento de suspense (mantener naranja)
                setTimeout(() => {
                    // Luego, explotar en verde con efecto dramático
                    foundElement.style.background = 'linear-gradient(135deg, #28a745, #20c997, #17a2b8)';
                    foundElement.style.borderColor = '#28a745';
                    foundElement.style.color = '#ffffff';
                    foundElement.style.transform = 'scale(1.3)';
                    foundElement.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.8)';
                    foundElement.style.fontWeight = '900';
                    foundElement.style.zIndex = '100';
                    foundElement.style.position = 'relative';
                    foundElement.style.border = '3px solid #28a745';
                    
                    // Agregar efecto de pulso
                    foundElement.style.animation = 'pulse 1.5s infinite';
                }, 300); // Pausa dramática antes de mostrar que se encontró
            }
        }
    } else {
        resultDiv.style.background = 'rgba(220, 53, 69, 0.1)';
        resultDiv.style.color = '#dc3545';
        resultDiv.style.border = '2px solid #dc3545';
        resultDiv.innerHTML = `
            <i class="fas fa-times-circle"></i> 
            No se encontró "${searchDemo.target}" en la lista<br>
            <small>Tiempo: ${elapsed.toFixed(2)}s | Comparaciones: ${searchDemo.comparisons}</small>
        `;
    }
    
    resultDiv.style.display = 'block';
    
    // Mostrar mensaje de rendimiento
    showPerformanceMessage(elapsed);
}

// Mostrar mensaje de rendimiento simplificado
function showPerformanceMessage(actualTime) {
    const size = searchDemo.data.length;
    const messageDiv = document.getElementById('performanceMessage');
    
    if (messageDiv) {
        const baseTime = actualTime / size; // Tiempo por elemento
        const ratio10 = Math.round(actualTime / (baseTime * 10));
        const ratio20 = Math.round(actualTime / (baseTime * 20));
        
        messageDiv.innerHTML = `
            Con ${size} elementos: ${actualTime.toFixed(1)}s y ${searchDemo.comparisons} comparaciones<br>
            <strong>Complejidad O(n) - Lineal: más datos = más tiempo proporcionalmente</strong>
        `;
        messageDiv.style.display = 'block';
    }
}

// Agregar CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { 
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.8);
            transform: scale(1.4);
        }
        50% { 
            box-shadow: 0 12px 35px rgba(40, 167, 69, 1), 0 0 0 10px rgba(40, 167, 69, 0.3);
            transform: scale(1.5);
        }
        100% { 
            box-shadow: 0 8px 25px rgba(40, 167, 69, 0.8);
            transform: scale(1.4);
        }
    }
    
    @keyframes searching {
        0% { transform: scale(1.15); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1.15); }
    }
`;
document.head.appendChild(style);

// Inicializar gráfico de complejidad
function initializeComplexityChart() {
    const slider = document.getElementById('nSlider');
    const nValue = document.getElementById('nValue');
    
    if (slider && nValue) {
        // Actualizar gráfico cuando cambie el slider
        slider.addEventListener('input', function() {
            const n = parseInt(this.value);
            nValue.textContent = n;
            updateComplexityChart(n);
        });
        
        // Inicializar con valor por defecto
        updateComplexityChart(10);
    }
}

// Actualizar gráfico de complejidad
function updateComplexityChart(n) {
    const chartContainer = document.getElementById('complexityChart');
    
    if (!chartContainer) return;
    
    // Definir complejidades y sus funciones
    const complexities = [
        {
            name: 'O(1)',
            func: (n) => 1,
            color: '#28a745',
            example: 'Acceso a array[i]'
        },
        {
            name: 'O(log n)',
            func: (n) => Math.log2(n),
            color: '#17a2b8',
            example: 'Búsqueda binaria'
        },
        {
            name: 'O(n)',
            func: (n) => n,
            color: '#ffc107',
            example: 'Búsqueda lineal'
        },
        {
            name: 'O(n log n)',
            func: (n) => n * Math.log2(n),
            color: '#fd7e14',
            example: 'Merge sort'
        },
        {
            name: 'O(n²)',
            func: (n) => n * n,
            color: '#dc3545',
            example: 'Bubble sort'
        }
    ];
    
    // Calcular valores
    const values = complexities.map(comp => ({
        ...comp,
        value: comp.func(n)
    }));
    
    // Encontrar el valor máximo para escalar
    const maxValue = Math.max(...values.map(v => v.value));
    const maxHeight = 180; // altura máxima de las barras
    
    // Limpiar contenedor
    chartContainer.innerHTML = '';
    
    // Crear barras
    values.forEach(comp => {
        const barContainer = document.createElement('div');
        barContainer.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 0.5rem;
        `;
        
        const height = Math.max(5, (comp.value / maxValue) * maxHeight);
        
        const bar = document.createElement('div');
        bar.style.cssText = `
            width: 40px;
            height: ${height}px;
            background: ${comp.color};
            border-radius: 4px 4px 0 0;
            margin-bottom: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
        `;
        
        // Tooltip con el valor y ejemplo
        const tooltip = document.createElement('div');
        tooltip.style.cssText = `
            position: absolute;
            top: -45px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 0.4rem 0.6rem;
            border-radius: 4px;
            font-size: 0.7em;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            text-align: center;
        `;
        const value = comp.value < 1000 ? comp.value.toFixed(1) : comp.value.toExponential(1);
        tooltip.innerHTML = `<strong>${comp.name}</strong><br>${value} ops<br><em>${comp.example}</em>`;
        
        bar.appendChild(tooltip);
        
        // Mostrar tooltip al hover
        bar.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            bar.style.transform = 'scale(1.05)';
        });
        
        bar.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            bar.style.transform = 'scale(1)';
        });
        
        const label = document.createElement('div');
        label.style.cssText = `
            font-size: 0.7em;
            font-weight: bold;
            text-align: center;
            color: ${comp.color};
            writing-mode: horizontal-tb;
        `;
        label.textContent = comp.name;
        
        barContainer.appendChild(bar);
        barContainer.appendChild(label);
        chartContainer.appendChild(barContainer);
    });
    

}

// Ejemplos interactivos de complejidad
function showComplexityExample(type) {
    const modal = document.getElementById('complexityModal');
    const content = document.getElementById('complexityModalContent');
    
    modal.style.display = 'flex';
    
    const examples = {
        'O1': {
            title: 'O(1) - Tiempo Constante',
            color: '#28a745',
            description: 'Siempre tarda lo mismo, sin importar el tamaño de los datos',
            code: `// Acceso directo a un elemento del array
function obtenerPrimero(array) {
    return array[0];  // ¡Siempre 1 operación!
}

// Obtener valor de un objeto
function obtenerNombre(persona) {
    return persona.nombre;  // ¡Siempre 1 operación!
}`,
            visualization: createO1Visualization(),
            realExample: 'Acceder a tu perfil en Facebook, obtener el primer elemento de una lista, consultar un valor en una tabla hash'
        },
        'Ologn': {
            title: 'O(log n) - Tiempo Logarítmico',
            color: '#17a2b8',
            description: 'Divide el problema por la mitad en cada paso',
            code: `// Búsqueda binaria en array ordenado
function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;
    
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        
        if (array[medio] === objetivo) {
            return medio;  // ¡Encontrado!
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;  // Buscar en mitad derecha
        } else {
            fin = medio - 1;     // Buscar en mitad izquierda
        }
    }
    return -1;  // No encontrado
}`,
            visualization: createOlognVisualization(),
            realExample: 'Buscar una palabra en el diccionario, encontrar un contacto en tu teléfono, búsquedas en Google'
        },
        'On': {
            title: 'O(n) - Tiempo Lineal',
            color: '#ffc107',
            description: 'Debe revisar cada elemento una vez',
            code: `// Buscar un elemento en array no ordenado
function buscarElemento(array, objetivo) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === objetivo) {
            return i;  // ¡Encontrado!
        }
    }
    return -1;  // No encontrado
}

// Sumar todos los elementos
function sumarTodos(array) {
    let suma = 0;
    for (let elemento of array) {
        suma += elemento;  // Visita cada elemento
    }
    return suma;
}`,
            visualization: createOnVisualization(),
            realExample: 'Leer todos los mensajes de WhatsApp, contar likes en Instagram, revisar cada producto en Amazon'
        },
        'On2': {
            title: 'O(n²) - Tiempo Cuadrático',
            color: '#dc3545',
            description: '¡Peligro! Cada elemento se compara con todos los demás',
            code: `// Bubble Sort - ordenamiento burbuja
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar elementos
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Encontrar duplicados (método ineficiente)
function encontrarDuplicados(array) {
    let duplicados = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                duplicados.push(array[i]);
            }
        }
    }
    return duplicados;
}`,
            visualization: createOn2Visualization(),
            realExample: 'Comparar cada persona con todas las demás en una red social, algoritmos de ordenamiento básicos'
        }
    };
    
    const example = examples[type];
    content.innerHTML = `
        <h2 style="color: ${example.color}; margin-bottom: 1rem;">
            <i class="fas fa-code"></i> ${example.title}
        </h2>
        
        <div style="background: rgba(${hexToRgb(example.color)}, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <p style="font-size: 1.1em; margin: 0;"><strong>${example.description}</strong></p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div>
                <h4 style="color: ${example.color}; margin-bottom: 0.5rem;">
                    <i class="fas fa-terminal"></i> Código de Ejemplo
                </h4>
                <div style="background: #2d3748; color: #e2e8f0; padding: 1rem; border-radius: 6px; font-family: 'Courier New', monospace; font-size: 0.8em; overflow-x: auto;">
                    <pre style="margin: 0; white-space: pre-wrap;">${example.code}</pre>
                </div>
            </div>
            
            <div>
                <h4 style="color: ${example.color}; margin-bottom: 0.5rem;">
                    <i class="fas fa-eye"></i> Visualización
                </h4>
                <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; min-height: 200px;">
                    ${example.visualization}
                </div>
            </div>
        </div>
        
        <div style="background: rgba(${hexToRgb(example.color)}, 0.05); padding: 1rem; border-radius: 8px; border-left: 4px solid ${example.color};">
            <h4 style="color: ${example.color}; margin-bottom: 0.5rem;">
                <i class="fas fa-globe"></i> Ejemplos del Mundo Real
            </h4>
            <p style="margin: 0; font-size: 0.9em;">${example.realExample}</p>
        </div>
    `;
}

// Cerrar modal
function closeComplexityModal() {
    document.getElementById('complexityModal').style.display = 'none';
}

// Función auxiliar para convertir hex a rgb
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '0, 0, 0';
}

// Crear visualizaciones para cada complejidad
function createO1Visualization() {
    return `
        <div style="text-align: center;">
            <div style="margin-bottom: 1rem;">
                <div style="display: inline-block; padding: 0.5rem 1rem; background: #28a745; color: white; border-radius: 4px; margin: 0.2rem;">
                    array[0]
                </div>
            </div>
            <div style="font-size: 0.9em; color: #666;">
                <p><strong>1 operación</strong> sin importar el tamaño del array</p>
                <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem;">
                    <span style="background: #e8f5e8; padding: 0.2rem 0.5rem; border-radius: 3px;">n=10: 1 op</span>
                    <span style="background: #e8f5e8; padding: 0.2rem 0.5rem; border-radius: 3px;">n=1000: 1 op</span>
                    <span style="background: #e8f5e8; padding: 0.2rem 0.5rem; border-radius: 3px;">n=1M: 1 op</span>
                </div>
            </div>
        </div>
    `;
}

function createOlognVisualization() {
    return `
        <div style="text-align: center;">
            <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.8em; margin-bottom: 0.5rem;">Búsqueda Binaria:</div>
                <div style="display: flex; justify-content: center; gap: 0.1rem; margin-bottom: 0.3rem;">
                    ${Array.from({length: 8}, (_, i) => 
                        `<div style="width: 25px; height: 25px; background: ${i === 3 ? '#17a2b8' : '#e9ecef'}; 
                         border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 0.7em;">
                         ${i + 1}</div>`
                    ).join('')}
                </div>
                <div style="font-size: 0.7em; color: #17a2b8;">↑ Paso 1: Revisar elemento del medio</div>
            </div>
            <div style="font-size: 0.9em; color: #666;">
                <p><strong>Divide por 2 en cada paso</strong></p>
                <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem;">
                    <span style="background: #e1f5fe; padding: 0.2rem 0.5rem; border-radius: 3px;">n=8: 3 pasos</span>
                    <span style="background: #e1f5fe; padding: 0.2rem 0.5rem; border-radius: 3px;">n=1000: 10 pasos</span>
                </div>
            </div>
        </div>
    `;
}

function createOnVisualization() {
    return `
        <div style="text-align: center;">
            <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.8em; margin-bottom: 0.5rem;">Búsqueda Lineal:</div>
                <div style="display: flex; justify-content: center; gap: 0.1rem; margin-bottom: 0.3rem;">
                    ${Array.from({length: 6}, (_, i) => 
                        `<div style="width: 25px; height: 25px; background: ${i < 3 ? '#ffecb3' : '#e9ecef'}; 
                         border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 0.7em;">
                         ${i + 1}</div>`
                    ).join('')}
                </div>
                <div style="font-size: 0.7em; color: #f57c00;">↑ Revisando elemento por elemento</div>
            </div>
            <div style="font-size: 0.9em; color: #666;">
                <p><strong>Debe revisar cada elemento</strong></p>
                <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem;">
                    <span style="background: #fff8e1; padding: 0.2rem 0.5rem; border-radius: 3px;">n=10: 10 ops</span>
                    <span style="background: #fff8e1; padding: 0.2rem 0.5rem; border-radius: 3px;">n=1000: 1000 ops</span>
                </div>
            </div>
        </div>
    `;
}

function createOn2Visualization() {
    return `
        <div style="text-align: center;">
            <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.8em; margin-bottom: 0.5rem;">Bucles Anidados:</div>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.1rem; max-width: 120px; margin: 0 auto;">
                    ${Array.from({length: 16}, (_, i) => 
                        `<div style="width: 25px; height: 25px; background: ${i < 6 ? '#ffcdd2' : '#f5f5f5'}; 
                         border: 1px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 0.6em;">
                         ${i + 1}</div>`
                    ).join('')}
                </div>
                <div style="font-size: 0.7em; color: #d32f2f; margin-top: 0.3rem;">↑ Cada elemento se compara con todos</div>
            </div>
            <div style="font-size: 0.9em; color: #666;">
                <p><strong>¡Crece exponencialmente!</strong></p>
                <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.5rem;">
                    <span style="background: #ffebee; padding: 0.2rem 0.5rem; border-radius: 3px;">n=10: 100 ops</span>
                    <span style="background: #ffebee; padding: 0.2rem 0.5rem; border-radius: 3px;">n=1000: 1M ops</span>
                </div>
            </div>
        </div>
    `;
}

// Agregar efectos hover a las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.complexity-card[onclick]');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});

// Variables para la carrera de algoritmos
let raceInProgress = false;
let raceIntervals = [];

// Iniciar carrera de algoritmos
function startAlgorithmRace() {
    if (raceInProgress) return;
    
    const n = parseInt(document.getElementById('raceDataSize').value);
    raceInProgress = true;
    
    // Deshabilitar botón
    document.getElementById('startRace').disabled = true;
    document.getElementById('raceResult').style.display = 'none';
    
    // Resetear posiciones
    resetRunnerPositions();
    
    // Definir complejidades y calcular operaciones reales
    const algorithms = [
        { id: 'O1', operations: 1, name: 'O(1)', color: '#28a745' },
        { id: 'Ologn', operations: Math.max(1, Math.log2(n)), name: 'O(log n)', color: '#17a2b8' },
        { id: 'On', operations: n, name: 'O(n)', color: '#ffc107' },
        { id: 'On2', operations: n * n, name: 'O(n²)', color: '#dc3545' }
    ];
    
    // Encontrar el máximo de operaciones para escalar los tiempos
    const maxOperations = Math.max(...algorithms.map(alg => alg.operations));
    const baseTime = 500; // tiempo base en ms para O(1)
    const maxTime = 4000; // tiempo máximo en ms
    
    // Calcular duración real para cada algoritmo basado en sus operaciones
    const racers = algorithms.map(alg => {
        // Escalar el tiempo basado en las operaciones, pero con un mínimo
        let duration;
        if (alg.operations === 1) {
            duration = baseTime; // O(1) siempre es rápido
        } else {
            // Escalar logarítmicamente para que las diferencias sean visibles pero no extremas
            const scaleFactor = Math.log(alg.operations + 1) / Math.log(maxOperations + 1);
            duration = baseTime + (maxTime - baseTime) * scaleFactor;
        }
        
        return {
            ...alg,
            duration: Math.max(baseTime, duration) // Mínimo tiempo base
        };
    });
    
    const raceDistance = 300; // píxeles
    
    // Iniciar cada corredor
    racers.forEach(racer => {
        const runner = document.getElementById(`runner-${racer.id}`);
        const timeDisplay = document.getElementById(`time-${racer.id}`);
        
        let startTime = Date.now();
        let currentPosition = 0;
        
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / racer.duration, 1);
            
            currentPosition = progress * raceDistance;
            runner.style.left = currentPosition + 'px';
            timeDisplay.textContent = (elapsed / 1000).toFixed(1) + 's';
            
            if (progress >= 1) {
                clearInterval(interval);
                timeDisplay.textContent = (racer.duration / 1000).toFixed(1) + 's';
                
                // Verificar si todos terminaron
                const finishedCount = racers.filter(r => {
                    const runnerEl = document.getElementById(`runner-${r.id}`);
                    return parseFloat(runnerEl.style.left) >= raceDistance;
                }).length;
                
                if (finishedCount === racers.length) {
                    setTimeout(() => finishRace(racers, n), 500); // Pequeña pausa antes de mostrar resultados
                }
            }
        }, 50);
        
        raceIntervals.push(interval);
    });
}

// Resetear posiciones de corredores
function resetRunnerPositions() {
    const runners = document.querySelectorAll('[id^="runner-"]');
    const times = document.querySelectorAll('[id^="time-"]');
    
    runners.forEach(runner => {
        runner.style.left = '0px';
    });
    
    times.forEach(time => {
        time.textContent = '0.0s';
    });
}

// Reiniciar carrera
function resetAlgorithmRace() {
    // Limpiar intervalos
    raceIntervals.forEach(interval => clearInterval(interval));
    raceIntervals = [];
    
    // Resetear estado
    raceInProgress = false;
    document.getElementById('startRace').disabled = false;
    document.getElementById('raceResult').style.display = 'none';
    
    // Resetear posiciones
    resetRunnerPositions();
}

// Finalizar carrera y mostrar resultados
function finishRace(racers, n) {
    raceInProgress = false;
    document.getElementById('startRace').disabled = false;
    
    // Ordenar por número de operaciones (menor a mayor)
    const sortedRacers = [...racers].sort((a, b) => a.operations - b.operations);
    
    const resultDiv = document.getElementById('raceResult');
    
    // Calcular diferencias dramáticas
    const fastest = sortedRacers[0];
    const slowest = sortedRacers[sortedRacers.length - 1];
    const difference = Math.round(slowest.operations / fastest.operations);
    
    resultDiv.innerHTML = `
        <h4 style="color: var(--uide-primary); margin-bottom: 1rem;">
            🏆 Resultados de la Carrera (n = ${n.toLocaleString()})
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
            ${sortedRacers.map((racer, index) => `
                <div style="background: rgba(${hexToRgb(racer.color)}, 0.1); padding: 0.8rem; border-radius: 6px; border: 2px solid ${racer.color};">
                    <div style="font-size: 1.2em; margin-bottom: 0.3rem;">
                        ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🐌'}
                    </div>
                    <div style="font-weight: bold; color: ${racer.color};">${racer.name}</div>
                    <div style="font-size: 0.8em; color: #666;">
                        ${racer.operations >= 1000 ? 
                            racer.operations.toExponential(1) : 
                            racer.operations.toLocaleString()} ops
                    </div>
                    <div style="font-size: 0.7em; color: ${racer.color};">
                        ${(racer.duration / 1000).toFixed(1)}s
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="margin-top: 1rem; padding: 0.8rem; background: rgba(145, 0, 72, 0.1); border-radius: 6px;">
            <p style="margin: 0; font-size: 0.9em; text-align: center;">
                <strong>¡Diferencia dramática!</strong><br>
                ${slowest.name} hizo <span style="color: #dc3545; font-weight: bold;">${slowest.operations.toLocaleString()}</span> operaciones<br>
                vs ${fastest.name} que hizo solo <span style="color: #28a745; font-weight: bold;">${fastest.operations}</span> operación${fastest.operations > 1 ? 'es' : ''}<br>
                <span style="font-size: 1.1em; color: var(--uide-primary);">
                    ¡${difference.toLocaleString()}x más lento!
                </span>
            </p>
        </div>
        
        ${n >= 100 ? `
        <div style="margin-top: 0.5rem; padding: 0.6rem; background: rgba(220, 53, 69, 0.1); border-radius: 6px; border-left: 4px solid #dc3545;">
            <p style="margin: 0; font-size: 0.8em; color: #dc3545;">
                <strong>⚠️ Imagina con 1 millón de elementos:</strong> O(n²) haría 1,000,000,000,000 operaciones!
            </p>
        </div>
        ` : ''}
    `;
    resultDiv.style.display = 'block';
}

// Variables para las estructuras de datos
let stack = [];
let queue = [];

// Funciones para la Pila (Stack - LIFO)
function pushToStack() {
    const input = document.getElementById('stackInput');
    const value = input.value.trim();
    
    if (value === '') {
        alert('Por favor ingresa un elemento');
        return;
    }
    
    stack.push(value);
    input.value = '';
    updateStackVisualization();
}

function popFromStack() {
    if (stack.length === 0) {
        alert('La pila está vacía');
        return;
    }
    
    const poppedElement = stack.pop();
    updateStackVisualization();
    
    // Mostrar elemento removido temporalmente
    showRemovedElement('stack', poppedElement);
}

function clearStack() {
    stack = [];
    updateStackVisualization();
}

function updateStackVisualization() {
    const container = document.getElementById('stackVisualization');
    
    if (stack.length === 0) {
        container.innerHTML = '<div style="color: #666; font-style: italic; margin: auto;">La pila está vacía</div>';
        return;
    }
    
    container.innerHTML = '';
    
    // Crear elementos de la pila (de abajo hacia arriba)
    stack.forEach((element, index) => {
        const stackElement = document.createElement('div');
        stackElement.style.cssText = `
            width: 120px;
            height: 40px;
            background: ${index === stack.length - 1 ? 'linear-gradient(135deg, #910048, #b8004f)' : 'linear-gradient(135deg, #e9ecef, #f8f9fa)'};
            color: ${index === stack.length - 1 ? 'white' : '#333'};
            border: 2px solid ${index === stack.length - 1 ? '#910048' : '#dee2e6'};
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2px 0;
            font-weight: bold;
            font-size: 0.9em;
            transition: all 0.3s ease;
            box-shadow: ${index === stack.length - 1 ? '0 4px 8px rgba(145, 0, 72, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'};
        `;
        stackElement.textContent = element;
        
        if (index === stack.length - 1) {
            stackElement.innerHTML += ' <span style="margin-left: 0.5rem;">← TOP</span>';
        }
        
        container.appendChild(stackElement);
    });
}

// Funciones para la Cola (Queue - FIFO)
function enqueue() {
    const input = document.getElementById('queueInput');
    const value = input.value.trim();
    
    if (value === '') {
        alert('Por favor ingresa un elemento');
        return;
    }
    
    queue.push(value);
    input.value = '';
    updateQueueVisualization();
}

function dequeue() {
    if (queue.length === 0) {
        alert('La cola está vacía');
        return;
    }
    
    const desencoladoElement = queue.shift(); // Remover del frente
    updateQueueVisualization();
    
    // Mostrar elemento removido temporalmente
    showRemovedElement('queue', desencoladoElement);
}

function clearQueue() {
    queue = [];
    updateQueueVisualization();
}

function updateQueueVisualization() {
    const container = document.getElementById('queueVisualization');
    
    if (queue.length === 0) {
        container.innerHTML = '<div style="color: #666; font-style: italic; margin: auto;">La cola está vacía</div>';
        return;
    }
    
    container.innerHTML = '';
    
    // Crear elementos de la cola (de izquierda a derecha)
    queue.forEach((element, index) => {
        const queueElement = document.createElement('div');
        queueElement.style.cssText = `
            width: 80px;
            height: 40px;
            background: ${index === 0 ? 'linear-gradient(135deg, #23356E, #2a4086)' : 'linear-gradient(135deg, #e9ecef, #f8f9fa)'};
            color: ${index === 0 ? 'white' : '#333'};
            border: 2px solid ${index === 0 ? '#23356E' : '#dee2e6'};
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2px;
            font-weight: bold;
            font-size: 0.8em;
            transition: all 0.3s ease;
            box-shadow: ${index === 0 ? '0 4px 8px rgba(35, 53, 110, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'};
            position: relative;
        `;
        queueElement.textContent = element;
        
        // Agregar etiquetas
        if (index === 0) {
            const frontLabel = document.createElement('div');
            frontLabel.style.cssText = `
                position: absolute;
                top: -25px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.7em;
                color: #23356E;
                font-weight: bold;
            `;
            frontLabel.textContent = 'FRENTE';
            queueElement.appendChild(frontLabel);
        }
        
        if (index === queue.length - 1) {
            const rearLabel = document.createElement('div');
            rearLabel.style.cssText = `
                position: absolute;
                bottom: -25px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.7em;
                color: #6c757d;
                font-weight: bold;
            `;
            rearLabel.textContent = 'FINAL';
            queueElement.appendChild(rearLabel);
        }
        
        container.appendChild(queueElement);
        
        // Agregar flecha entre elementos
        if (index < queue.length - 1) {
            const arrow = document.createElement('div');
            arrow.style.cssText = `
                display: flex;
                align-items: center;
                color: #6c757d;
                font-size: 1.2em;
                margin: 0 0.2rem;
            `;
            arrow.innerHTML = '→';
            container.appendChild(arrow);
        }
    });
}

// Función para mostrar elemento removido
function showRemovedElement(type, element) {
    const info = document.getElementById(type + 'Info');
    const originalContent = info.innerHTML;
    
    info.style.background = 'rgba(220, 53, 69, 0.1)';
    info.style.border = '2px solid #dc3545';
    info.innerHTML = `
        <p style="margin: 0; font-size: 0.9em; color: #dc3545;">
            <strong>🗑️ Elemento removido: "${element}"</strong>
        </p>
    `;
    
    setTimeout(() => {
        info.style.background = 'rgba(233, 171, 33, 0.1)';
        info.style.border = 'none';
        info.innerHTML = originalContent;
    }, 2000);
}

// Agregar event listeners para Enter key
document.addEventListener('DOMContentLoaded', function() {
    const stackInput = document.getElementById('stackInput');
    const queueInput = document.getElementById('queueInput');
    
    if (stackInput) {
        stackInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                pushToStack();
            }
        });
    }
    
    if (queueInput) {
        queueInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enqueue();
            }
        });
    }
    
    // Inicializar visualizaciones
    updateStackVisualization();
    updateQueueVisualization();
});

console.log('Estructuras de Datos - Semana 1 JavaScript cargado correctamente');