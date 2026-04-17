function calcular() {
    let ingresos = parseFloat(document.getElementById('txtIngresos').value);
    let egresos = parseFloat(document.getElementById('txtEgresos').value);

    if (isNaN(ingresos)) ingresos = 0;
    if (isNaN(egresos)) egresos = 0;

    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById('spnDisponible').innerText = disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);

    let componenteCapacidad = document.getElementById('spnCapacidadPago');
    if (componenteCapacidad) {
        componenteCapacidad.innerText = capacidadPago.toFixed(2);
    }
}
