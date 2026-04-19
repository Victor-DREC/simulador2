function calcular() {
    const campos = [
        document.getElementById('txtIngresos'),
        document.getElementById('txtEgresos'),
        document.getElementById('txtMonto'),
        document.getElementById('txtPlazo'),
        document.getElementById('txtTasaInteres')
    ];

    let formularioValido = true;

    campos.forEach(input => {
        if (!validarInput(input)) {
            formularioValido = false;
        }
    });

    if (!formularioValido) return;

    let ingresos = parseFloat(document.getElementById('txtIngresos').value) || 0;
    let egresos = parseFloat(document.getElementById('txtEgresos').value) || 0;
    let monto = parseFloat(document.getElementById('txtMonto').value) || 0;
    let plazo = parseInt(document.getElementById('txtPlazo').value) || 0;
    let tasa = parseFloat(document.getElementById('txtTasaInteres').value) || 0;


    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById('spnDisponible').innerText = disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById('spnCapacidadPago').innerText = capacidadPago.toFixed(2);

    let interesTotal = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById('spnInteresPagar').innerText = interesTotal.toFixed(2);

    let totalPrestamo = calcularTotalPagar(monto, interesTotal);
    document.getElementById('spnTotalPrestamo').innerText = totalPrestamo.toFixed(2);

    let cuotaMensual = calcularCuotaMensual(totalPrestamo, plazo);
    document.getElementById('spnCuotaMensual').innerText = cuotaMensual.toFixed(2);


    let esAprobado = aprobarCredito(capacidadPago, cuotaMensual);
    let lblEstado = document.getElementById('spnEstadoCredito');

    if (esAprobado) {
        lblEstado.innerText = "CRÉDITO APROBADO";
        lblEstado.style.color = "var(--success)";
    } else {
        lblEstado.innerText = "CRÉDITO RECHAZADO";
        lblEstado.style.color = "var(--danger)"; 
    }
}


function validarInput(input) {
    const errorSpan = document.getElementById(`err-${input.id}`);
    if (!errorSpan) return true; 

    const valor = input.value.trim();
    let mensaje = "";

    if (valor === "") {
        mensaje = "Este campo es obligatorio.";
    } 
    else if (parseFloat(valor) < 0) {
        mensaje = "No se aceptan valores negativos.";
    }
    else if (isNaN(valor)) {
        mensaje = "Ingresa un número válido.";
    }

    if (mensaje !== "") {
        errorSpan.textContent = mensaje;
        errorSpan.classList.add("active");
        input.classList.add("input-error");
        return false;
    } else {
        errorSpan.textContent = "";
        errorSpan.classList.remove("active");
        input.classList.remove("input-error");
        return true;
    }
}