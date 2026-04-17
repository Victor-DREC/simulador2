function calcularDisponible(ingresos, egresos) {
    return Math.max(0, ingresos - egresos);
}

function calcularCapacidadPago(montoDisponible) {
    let capacidad = montoDisponible * 0.5;
    return capacidad;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto * (tasa / 100);
    return interes;
}

function calcularTotalPagar(monto, interes) {
    const IMPUESTO_SOLCA = 100;
    let total = monto + interes + IMPUESTO_SOLCA;

    return total;
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    if (meses === 0) return 0;
    let cuota = total / meses;

    return cuota;
}