import React from "react"
import { dataGroupCard } from "../../../assets/data"
import GroupCard from "../../GroupCard/groupCard"

const Habitaciones = () => {
    return (
        <main className="pt-2">
            <div className="container">
                <p className=" text-justify text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                    El Hotel Dubrava en Ostende, Pinamar, ofrece una variedad de opciones de alojamiento para 
                    adaptarse a las necesidades de cada viajero. Las habitaciones dobles son perfectas para parejas 
                    o amigos que buscan comodidad y privacidad, equipadas con todas las comodidades necesarias para 
                    una estancia placentera.
                    Para grupos más grandes o familias, las habitaciones triples y cuádruples ofrecen el espacio 
                    adicional necesario, asegurando que todos los huéspedes se sientan cómodos y relajados. Estas 
                    habitaciones están diseñadas pensando en la funcionalidad y el confort, con una distribución 
                    que permite a los huéspedes disfrutar de su tiempo juntos sin sacrificar la privacidad personal.
                    Cada habitación en el Hotel Dubrava está meticulosamente amueblada y cuenta con servicios 
                    esenciales como baño privado con ducha, nevera, ventilador y TV por cable, garantizando una 
                    experiencia de alojamiento de calidad
                </p>
            </div>            
            <section className="pb-2">
                <GroupCard  dataCards={dataGroupCard}/>
            </section>
        </main>
    )

}

export default Habitaciones