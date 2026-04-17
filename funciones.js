function calcularDisponible(ingresos, egresos) {
    return Math.max(0, ingresos - egresos);
}