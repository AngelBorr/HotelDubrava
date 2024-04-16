const Promociones = () => {
    return (
        <main className="container p-2">
            <section className="w-full box-border p-2 md:flex md:gap-3 border border-[#a92c2d] rounded">
                <aside className="w-full md:text-center">
                    <h3 className="flex justify-center">Oferta Especial de Verano</h3>
                    <p className=" text-justify text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                        ¡Disfruta del sol y las vibrantes calles de Pinamar! Reserva ahora y 
                        obtén un descuento del 15% en tu estadía en  Hotel Dubrava, vive una 
                        experiencia inolvidable en el corazón de la ciudad. ¡No dejes pasar esta
                        oportunidad!
                    </p>
                </aside>
                <picture className="box-border">
                    <img className="box-border w-full p-1" src="/img/descuento1-700x400.jpg" alt="fotoPromociones" />
                </picture>                
            </section>
            <section className="w-full box-border p-2 md:flex md:gap-3 border border-[#a92c2d] rounded">
                <aside className="w-full md:text-center">
                    <h3 className="flex justify-center">Escapada Romántica</h3>
                    <p className=" text-justify text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                        ¿Buscas un refugio romántico? Hotel Dubrava es el lugar perfecto. Reserva 
                        tu habitación y sorprende a tu pareja con una estadia inolvidable. Disfruta de los 
                        beneficios exclusivos que Hotel Dubrava tiene para ofrecerte, con una ubicación ideal
                        que te permitirá explorar la ciudad de Pinamar a fondo.
                    </p>
                </aside>
                <picture className="box-border">
                    <img className="box-border w-full p-1" src="/img/descuento2-700x400.jpg" alt="fotoPromociones" />
                </picture>                
            </section>
            <section className="w-full box-border p-2 md:flex md:gap-3 border border-[#a92c2d] rounded">
                <aside className="w-full md:text-center">
                    <h3 className="flex justify-center">Oferta Especial Invierno en la Costa</h3>
                    <p className=" text-justify text-[#3f1010] w-full mb-0 pb-3 text-sm md:text-base lg:text-lg">
                        ¿Prefieres la costa? Aprovecha nuestra promoción especial para las 
                        vacaciones de invierno. Reserva tu habitación en Hotel Dubrava y 
                        disfruta de un descuento del 30%. Relájate en la playa, disfruta de 
                        la brisa marina y descubre la belleza de la costa argentina.
                    </p>
                </aside>
                <picture className="box-border">
                    <img className="box-border w-full p-1" src="/img/descuento3-700x400.png" alt="fotoPromociones" />
                </picture>                
            </section>

        </main>    
        )
        

}

export default Promociones