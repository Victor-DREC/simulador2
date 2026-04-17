
function calcular() {
    let ingresos = parseFloat(document.getElementById('txtIngresos').value) || 0;
    let egresos = parseFloat(document.getElementById('txtEgresos').value) || 0;

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById('spnDisponible').innerText = disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById('spnCapacidadPago').innerText = capacidadPago.toFixed(2);


    let monto = parseInt(document.getElementById('txtMonto').value) || 0;
    let plazo = parseInt(document.getElementById('txtPlazo').value) || 0;
    let tasa = parseInt(document.getElementById('txtTasaInteres').value) || 0;

    let interesTotal = calcularInteresSimple(monto, tasa, plazo);

    let componenteInteres = document.getElementById('spnInteresPagar');
    if (componenteInteres) {
        componenteInteres.innerText = interesTotal.toFixed(2);
    }
}
