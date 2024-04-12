import { useState } from "react"

const CheckIn = () => {
    const [inputCantidadPasajeros, setInputCantidadPasajeros] = useState(1)
    
    return (
        <main className="container">
            <header className="flex justify-center pt-2">
                <img
                    className=''
                    alt="logo"
                    src="/img/LogoHotelDubrava-estilo4.png"
                    width="300px"
                />
            </header>
            <section className="">
                <form className='mb-2 w-full' action="/" method="post">
                    <fieldset className="rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Datos del Titular de la reserva</legend>

                        <label className="" htmlFor="" name='nombre'>Nombre</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" name="nombre" id=""placeholder="Nombre" required
                            pattern='[a-z,A-Z]{4,20}'
                        />
                        <br/>

                        <label className="pt-2" htmlFor="" name='apellido'>Apellido</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="text" name="apellido" id="" placeholder="Apellido" required
                            pattern='[a-z,A-Z]{2,20}'
                        /><br/>

                        <label className="pt-2" htmlFor="" name='dni'>N° de Documento</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="number" name="dni" id="" placeholder="dni" required
                            pattern="[0-9]{3,13}"
                        />
                        <br/>
                    </fieldset>

                    <fieldset className="mt-2 rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Datos del/o Acompañantes</legend>

                        <label className="pt-2" htmlFor="" name='numeroAcompanante'>N° de Acompañantes</label>
                        <select name="numeroAcompanante" id="" 
                        className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                        onChange={(e) => setInputCantidadPasajeros(e.target.value)} value={inputCantidadPasajeros} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>                            
                        </select>
                        <br />
                        {Array.from({ length: inputCantidadPasajeros }).map((_, index) => (
                            <div key={index}>
                                <label className="" htmlFor="" name='nombreAcompanante'>Nombre Acompañanate {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                                    type="text" name="nombre" id=""placeholder="Nombre" required
                                    pattern='[a-z,A-Z]{4,20}'
                                />
                                <br/>

                                <label className="pt-2" htmlFor="" name='apellidoAcompanante'>Apellido Acompañante {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="text" name="apellido" id="" placeholder="Apellido" required
                                    pattern='[a-z,A-Z]{2,20}'
                                /><br/>

                                <label className="pt-2" htmlFor="" name='dniAcompanante'>N° de Documento del Acompañante {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="number" name="dni" id="" placeholder="dni" required
                                    pattern="[0-9]{3,13}"
                                />
                                <br />
                                <hr/>                            
                            </div>
                        ))}

                    </fieldset>
                    
                    <fieldset className="mt-2 rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Informacion Adicional</legend>

                        <label className="pt-2" htmlFor="" name='fechaLlegada'>Fecha de Llegada</label>
                        <input type="date" name='fechaLlegada' 
                        className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                        required />
                        <br />

                        <label className="pt-2" htmlFor="" name='fechaSalida'>Fecha de Salida</label>
                        <input type="date" name='fechaSalida' 
                        className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                        required />
                        <br />

                        <label className="pt-2" htmlFor="" name='horarioLlegada'>Horario de llegada aproximada</label>
                        <input type="time" name='horarioLlegada' className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" />
                        <br />

                        <label className="pt-2" htmlFor="">Email</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="email" 
                            name="correo" id="" placeholder="Correo electrónico" required
                        /><br/>

                        <label className="pt-2" htmlFor=""name='telefono'>Telefono</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="tel" name="telefono" id="" placeholder="Teléfono" required
                            pattern="[0-9]{3,13}"
                        /><br/>

                        <legend className="mt-2 flex justify-center text-[#3f1010]">Direccion</legend>

                        <label className="pt-2" htmlFor="" name="calle">Calle, Numero, Dpto/Casa</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="text" 
                            name="calle" id="" placeholder="Direccion completa" required
                        /><br/>

                        <label className="pt-2" htmlFor="" name="localidad">Localidad</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="text" 
                            name="localidad" id="" placeholder="" required
                        /><br/>

                        <label className="pt-2" htmlFor="" name="pais">Pais</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="text" 
                            name="pais" id="" placeholder="" required
                        /><br/>

                        <label className="pt-2" htmlFor="" name='notas'>Notas</label>
                        <textarea className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" name="notas" 
                            placeholder="Si desea dejarnos alguna recomendacion para el dia de su llegada, la puede indicar aqui"
                            pattern="[a-z, A-Z]{10,200}" field-sizing='content'>
                        </textarea><br/>

                        <label className="pt-2" htmlFor="" name='checkAuto'>¿Tiene Auto?</label>
                        <input type="checkbox" name="checkAuto" id="" className="ml-8" />
                        <br />
                        
                    </fieldset>
                    
                </form>

                <div className="flex justify-center pt-4 pb-2">
                    <button className="hover:bg-[#fff] hover:border hover:border-[#c9393a] hover:text-[#c9393a] p-1 text-[#fff] bg-[#c9393a] rounded " type="submit">Enviar</button>
                </div>

            </section>
        </main>
    )

}

export default CheckIn