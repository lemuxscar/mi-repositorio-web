// Función para obtener los valores de los campos de texto
function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Verificamos si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        return [null, null]; // Devuelve null si no son números
    }
    
    return [numero1, numero2];
}

// Función para mostrar el resultado en la página
function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado;
}

// --- Funciones para cada botón ---

function sumar() {
    const [num1, num2] = obtenerNumeros();
    if (num1 !== null && num2 !== null) {
        const resultado = num1 + num2;
        mostrarResultado(`El resultado de la suma es: ${resultado}`);
    } else {
        mostrarResultado("Por favor, ingresa números válidos.");
    }
}

function restar() {
    const [num1, num2] = obtenerNumeros();
    if (num1 !== null && num2 !== null) {
        const resultado = num1 - num2;
        mostrarResultado(`El resultado de la resta es: ${resultado}`);
    } else {
        mostrarResultado("Por favor, ingresa números válidos.");
    }
}

function multiplicar() {
    const [num1, num2] = obtenerNumeros();
    if (num1 !== null && num2 !== null) {
        const resultado = num1 * num2;
        mostrarResultado(`El resultado de la multiplicación es: ${resultado}`);
    } else {
        mostrarResultado("Por favor, ingresa números válidos.");
    }
}

function dividir() {
    const [num1, num2] = obtenerNumeros();
    if (num1 !== null && num2 !== null) {
        if (num2 === 0) {
            mostrarResultado("No se puede dividir por cero.");
        } else {
            const resultado = num1 / num2;
            mostrarResultado(`El resultado de la división es: ${resultado}`);
        }
    } else {
        mostrarResultado("Por favor, ingresa números válidos.");
    }
}   