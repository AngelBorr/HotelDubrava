import React from "react"

const Servicios = () => {
    return (
        <main className="container pt-2 font-sans text-justify">
            <section>
                <p className="text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                    El Hotel Dubrava en Ostende, Pinamar, no solo se destaca por su cercanía al mar y al centro de la 
                    ciudad, sino también por su amplia gama de servicios pensados para el confort de sus huéspedes. 
                    Además de las comodidades ya mencionadas, el hotel ofrece estacionamiento privado gratuito al aire
                    libre, lo que representa una gran ventaja para aquellos que viajan en coche.
                </p>
                <div className="p-2 md:flex">
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="estacionamineto-1" src="/img/estacionamiento-2.jpg" />
                    </picture>
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="estacionamineto-2" src="/img/vistaAereaFachada2.jpg" />
                    </picture>
                </div>                
            </section>
            <section>
                <p className="text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                    Los visitantes pueden disfrutar de un desayuno continental variado y completo, ideal para comenzar
                    el día con energía antes de explorar las playas y atractivos locales. La recepción del hotel está
                    siempre lista para brindar asistencia, información turística y recomendaciones personalizadas, 
                    asegurando una experiencia personalizada y atenta.
                </p>
                <div className="p-2 md:flex">
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="desayuno-1" src="/img/desayunoHotel.jpg" />
                    </picture>
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="desayuno-2" src="/img/desayunoHotel2.jpg" />
                    </picture>
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="recepcion-1" src="/img/recepcionHotel1.jpg" />
                    </picture>
                </div> 
            </section>
            <section>
                <p className="text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                    La sala de estar del hotel invita a los huéspedes a relajarse y socializar en un ambiente cálido
                    y acogedor. Es el lugar perfecto para leer un libro, planificar las actividades del día o 
                    simplemente disfrutar de un momento de descanso. Por otro lado, el jardín es un oasis de 
                    tranquilidad, donde se puede disfrutar del sol y la brisa marina, o compartir un agradable momento
                    en compañía.
                </p>
                <div className="p-2 md:flex">
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="salaDeEstar-1" src="/img/salaDeEstar1.jpg" />
                    </picture>
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="salaDeEstar-2" src="/img/salaDeEstar2.jpg" />
                    </picture>
                    <picture className="flex p-2 w-full h-[300px] md:h-[330px] lg:h-[360px]">                        
                        <img className=" box-border w-full" alt="salaDeEstar-1" src="/img/comedor2.jpg" />
                    </picture>
                </div> 
            </section>
            <p className="text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                Con todas estas características, el Hotel Dubrava se presenta como una opción ideal para quienes 
                buscan comodidad, accesibilidad y un servicio excepcional durante su estancia en Ostende.
            </p>    
                
                
            
        </main>
    )

}

export default Servicios