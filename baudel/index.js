// Obtener los elementos del DOM
let entrada = document.getElementById("Entrada");
let resultado = document.getElementById("Resultado");
const button = document.getElementById("Calcular");
const porcentajeSelect = document.getElementById("porcentaje");  // Obtiene el select de porcentaje

// Función para calcular el préstamo
function calcularPrestamo() {
    const monto = parseFloat(entrada.value);  // Convertir el monto a número
    const porcentaje = parseFloat(porcentajeSelect.value);  // Obtener el porcentaje seleccionado
    
    // Validar si el monto es válido
    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Por favor, ingresa un monto válido.";  // Mostrar mensaje de error
    } else {
        const resultadoPorcentaje = monto * porcentaje;  // Calcular el porcentaje del monto
        resultado.textContent = `El monto con el porcentaje aplicado es: $${resultadoPorcentaje.toFixed(2)}`;  // Mostrar resultado
    }
}

// Añadir el evento 'click' al botón para calcular
button.addEventListener("click", calcularPrestamo);
