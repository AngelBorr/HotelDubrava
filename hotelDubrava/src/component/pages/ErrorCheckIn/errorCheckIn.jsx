import React from "react"

const ErrorCheckIn = () => {
    return (
        <main className="container rounded border border-[#a92c2d] h-[150px] mt-2 mb-2 content-center">
            <h3 className="flex justify-center text-center">Error en el envio del formulario CheckIn</h3>
            <p className="text-[#3f1010] text-center w-full mb-0 pb-3 text-sm md:text-base lg:text-lg"
            >Se ha detectado un error en el ingreso de los datos del formulario checkIn, por favor vuelva a intentarlo mas tarde, desde ya muchas gracias</p>
            
        </main>        
    )

}

export default ErrorCheckIn