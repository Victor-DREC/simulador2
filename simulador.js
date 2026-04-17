function calcular() {
    let ingresos = parseFloat(document.getElementById('txtIngresos').value);
    
    let egresos = parseFloat(document.getElementById('txtEgresos').value);

    if (isNaN(ingresos)) ingresos = 0;
    if (isNaN(egresos)) egresos = 0;

    let disponible = calcularDisponible(ingresos, egresos);

    let componenteDisponible = document.getElementById('spnDisponible');
    
    if (componenteDisponible) {
        componenteDisponible.innerText = disponible.toFixed(2);
    }
}
