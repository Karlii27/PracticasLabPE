function establecerRecordatorio(fechaHoraRecordatorio, mensaje)
 {
    const ahora= new Date()

    const horaRecordatorio= new Date(fechaHoraRecordatorio)

    const diferenciaTIempo= horaRecordatorio.getTime()- ahora.getTime()

    if (diferenciaTIempo>0) {
        setTimeout(()=>{
            const anio=horaRecordatorio.getFullYear()
            const mes= horaRecordatorio.getMonth()+1
            const dia= horaRecordatorio.getDate()
            const horas= horaRecordatorio.getHours()
            const minutos= horaRecordatorio.getMinutes()
            const segundos= horaRecordatorio.getSeconds()

            console.log(`Recordatorio para: ${dia}${mes}/${anio} ${horas}:${minutos}:${segundos}: ${mensaje}`)
        }, diferenciaTIempo)
        
    }else{
        console.log("La fecha y hora ya han pasado")
    }
    
}
establecerRecordatorio("2024-08-29T18:30:50", "¡Es hora de la practica!")