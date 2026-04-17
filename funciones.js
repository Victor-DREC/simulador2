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