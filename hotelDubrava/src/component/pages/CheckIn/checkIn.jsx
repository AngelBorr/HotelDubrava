import React, { useState } from "react"
import { useForm} from 'react-hook-form'

const url = 'http://localhost:8080/checkInOnline'

const CheckIn = () => {

    const [inputCantidadPasajeros, setInputCantidadPasajeros] = useState(1)

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);        
    };    

    const { register, handleSubmit, watch } = useForm()

    //hacer funcion para que se comunique con el server
    
    const enviarDatos = (data) => {   
        console.log(data)  
                  
        
        try {            
            if(!data){
                throw new Error("Faltan campos por llenar, verifique los datos ingresados")
            }else{                      
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),        
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(result => {
                    result.json()
                    try {                         
                        if(result.status === 200){
                            window.location.replace('/ConfirmCheckIn') 
                        }else{
                            window.location.replace('/ErrorCheckIn') 
                        }
                    } catch (error) {
                        console.log(error.message)
                    }
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

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
                <form className='mb-2 w-full' action="/" method="post" onSubmit={handleSubmit(enviarDatos)}> 
                    <fieldset className="rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Datos del Titular de la reserva</legend>

                        <label className="" htmlFor="name" name="name">Nombre</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            {...register('nombre')}                            
                            id=""
                            placeholder="Nombre" 
                            required
                            pattern='[a-z,A-Z]{4,20}'
                        />
                        <br/>

                        <label className="pt-2" htmlFor="apellido" name='apellido'>Apellido</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            {...register('apellido')}
                            id="" 
                            placeholder="Apellido"
                            required
                            pattern='[a-z,A-Z]{2,20}'
                        /><br/>

                        <label className="pt-2" htmlFor="dni" name='dni'>N° de Documento</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="number"
                            {...register('dni')}
                            id="" 
                            placeholder="dni" 
                            required
                            pattern="[0-9]{3,13}"
                        />
                        <br/>
                    </fieldset>

                    <fieldset className="mt-2 rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Datos del/o Acompañantes</legend>

                        <label className="pt-2" htmlFor="numeroAcompanante" name='numeroAcompanante'>N° de Acompañantes</label>
                        <select                                                        
                            {...register('numeroAcompanante')}
                            id="" 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                            onChange={(e) => setInputCantidadPasajeros(e.target.value)} value={inputCantidadPasajeros} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>                            
                        </select>
                        <br />                        
                        {Array.from({ length: inputCantidadPasajeros }).map((_, index) => (
                            <div key={index+1}>
                                <label className="" htmlFor="nombreAcompanante" name='nombreAcompanante'>Nombre Acompañanate {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                                    type="text"
                                    id=""
                                    placeholder="Nombre"
                                    {...register(`acompanante${index+1}.name`)}
                                    required
                                    pattern='[a-z,A-Z]{4,20}'
                                />
                                <br/>

                                <label className="pt-2" htmlFor="apellidoAcompanante" name='apellidoAcompanante'>Apellido Acompañante {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                                    type="text" 
                                    {...register(`acompanante${index+1}.lastName`)}
                                    id="" 
                                    placeholder="Apellido"                                     
                                    required
                                    pattern='[a-z,A-Z]{2,20}'
                                /><br/>

                                <label className="pt-2" htmlFor="dniAcompanante" name='dniAcompanante'>N° de Documento del Acompañante {index + 1}</label>
                                <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                                    type="number" 
                                    {...register(`acompanante${index+1}.dniCompanion`)}
                                    id="" 
                                    placeholder="dni" 
                                    required
                                    pattern="[0-9]{3,13}"
                                />
                                <br />
                                <hr/>                            
                            </div>
                        ))}

                    </fieldset> 
                    
                    <fieldset className="mt-2 rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <legend className="flex justify-center text-[#3f1010]">Informacion Adicional</legend>

                        <label className="pt-2" htmlFor="fechaIngreso" name='fechaIngreso'>Fecha de Llegada</label>
                        <input 
                            type="date" 
                            {...register('fechaIngreso')}                            
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                            required />
                        <br />

                        <label className="pt-2" htmlFor="fechaSalida" name='fechaSalida'>Fecha de Salida</label>
                        <input 
                            type="date" 
                            {...register('fechaSalida')}
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded"
                            required />
                        <br />

                        <label className="pt-2" htmlFor="horarioLlegada" name='horarioLlegada'>Horario de llegada aproximada</label>
                        <input 
                            type="time" 
                            {...register('horarioLlegada')}
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" />
                        <br />

                        <label className="pt-2" htmlFor="email" name="email" >Email</label>
                        <input 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="email" 
                            {...register('email')}
                            id="" 
                            placeholder="Correo electrónico"
                            pattern='\S+@\S+\.\S+'//porque no me toma esta exprersion?
                            required
                        /><br/>

                        <label className="pt-2" htmlFor="telefono"name='telefono'>Telefono</label>
                        <input 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="tel" 
                            {...register('telefono')}
                            id="" 
                            placeholder="Teléfono"                             
                            required
                            pattern="[0-9]{3,13}"
                        /><br/>

                        <legend className="mt-2 flex justify-center text-[#3f1010]">Direccion</legend>

                        <label className="pt-2" htmlFor="direccion" name="direccion">Calle, Numero, Dpto/Casa</label>
                        <input 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            {...register('direccion')}
                            id="" 
                            placeholder="Direccion completa"                             
                            required
                        /><br/>

                        <label className="pt-2" htmlFor="localidad" name="localidad">Localidad</label>
                        <input 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            {...register('localidad')}
                            id="" 
                            placeholder="Localidad"                             
                            required
                        /><br/>

                        <label className="pt-2" htmlFor="pais" name="pais">Pais</label>
                        <input 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            {...register('pais')}
                            id="" 
                            placeholder="Pais"                             
                            required
                        /><br/>

                        <label className="pt-2" htmlFor="notas" name='notas'>Notas</label>
                        <textarea 
                            className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text"
                            {...register('notas')}
                            placeholder="Si desea dejarnos alguna recomendacion para el dia de su llegada, la puede indicar aqui"                            
                            pattern="[a-z, A-Z]{10,200}" 
                            field-sizing='content'>
                        </textarea><br/>

                        <label className="pt-2" htmlFor="checkAuto" name='checkAuto'>¿Tiene Auto?</label>
                        <input 
                            type="checkbox" 
                            name="checkAuto"
                            checked={isChecked}
                            {...register('checkAuto')}
                            onChange={handleCheckboxChange}
                            id="" 
                            className="ml-8" />
                        <br />
                        
                    </fieldset>

                    <div className="flex justify-center pt-4 pb-2">
                        <button 
                            className="hover:bg-[#fff] hover:border hover:border-[#c9393a] hover:text-[#c9393a] p-1 text-[#fff] bg-[#c9393a] rounded " 
                            type="submit"
                            >Enviar
                        </button>
                    </div>                    
                </form>
            </section>
        </main>
    )
}

export default CheckIn