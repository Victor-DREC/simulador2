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
    document.getElementById('spnInteresPagar').innerText = interesTotal.toFixed(2);

    let totalPrestamo = calcularTotalPagar(monto, interesTotal);
    document.getElementById('spnTotalPrestamo').innerText = totalPrestamo.toFixed(2);

    let cuotaMensual = calcularCuotaMensual(totalPrestamo, plazo);
    document.getElementById('spnCuotaMensual').innerText = cuotaMensual.toFixed(2);

    let esAprobado = aprobarCredito(capacidadPago, cuotaMensual);

    let lblEstado = document.getElementById('spnEstadoCredito');

    if (esAprobado) {
        lblEstado.innerText = "CREDITO APROBADO";
        lblEstado.style.color = "#27ae60"; 
    } else {
        lblEstado.innerText = "CREDITO RECHAZADO";
        lblEstado.style.color = "#e74c3c"; 
    }
}
