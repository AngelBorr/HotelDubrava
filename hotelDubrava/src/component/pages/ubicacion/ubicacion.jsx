const Ubicacion = () => {
    return (
        <main className="container pt-2">
            <div className=" p-1 text-justify box-border text-sm text-[#3f1010] md:text-base lg:text-lg">
                <p>
                    El Hotel Dubrava se encuentra en Ostende, a solo 50 metros de la playa de mar, en la localidad de Pinamar, 
                    Provincia de Buenos Aires, Argentina1. Este acogedor hotel familiar, atendido por sus dueños, ofrece una 
                    excelente ubicación, ya que está cerca del centro comercial y a pocos pasos de la costa argentina. Además, 
                    cuenta con cochera privada y desayuno incluido. Las habitaciones son luminosas y cómodas, con baño privado, 
                    ducha, nevera, ventilador y TV por cable. ¡Una opción ideal para disfrutar de la tranquilidad y la cercanía 
                    al mar! 🌊🏨
                </p>
            </div>
            <section className="flex justify-center mb-2 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.0554845239412!2d-56.866701498238385!3d-37.12759497215556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cfc057dbab5%3A0xf728a25823d285c0!2sDubrava!5e0!3m2!1ses-419!2sar!4v1711655145670!5m2!1ses-419!2sar" 
                className='border border-[#a92c2d] p-2 w-[450px] h-[350px] md:w-full md:h-[400px] lg:h-[450px]'allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>
    )

}

export default Ubicacion