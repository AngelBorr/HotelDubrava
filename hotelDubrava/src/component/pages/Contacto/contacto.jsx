import { useState } from "react"

const Contacto = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    })

    const handleInputChange = (event) => {        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()        
        try {            
            if(!datos){
                throw new Error("Faltan campos por llenar, verifique los datos ingresados")
            }else{                      
                fetch('http://localhost:8080/contactMailing', {
                    method: 'POST',
                    body: JSON.stringify(datos),        
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(result => {
                    result.json()
                    try {                         
                        if(result.status === 200){
                            window.location.replace('/confirmContact') 
                        }else{
                            window.location.replace('/errorContact') 
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
        <main className="container font-sans">
            <div className="p-2 box-border text-justify text-[#3f1010] text-sm md:text-base lg:text-lg">
                <p>
                    Si desea mayor información puede contactarse con 
                    nosotros por vía telefónica o mandar un mensaje 
                    completando el siguiente formulario:
                </p>
            </div>
            <div className="flex justify-center">
                <form className='mb-2 w-full md:w-[80%] lg:w-[60%]' action="/" method="post"  onSubmit={enviarDatos}>
                    <fieldset className="rounded border border-[#a92c2d] w-full p-2 block text-[#3f1010] text-sm md:text-base lg:text-lg">
                        <label className="" htmlFor="" name='nombre'>Nombre</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            name="nombre" 
                            id=""
                            placeholder="Nombre" 
                            required
                            onChange={handleInputChange}
                            pattern='[a-z,A-Z]{4,20}'
                        />
                        <br/>

                        <label className="pt-2" htmlFor="apellido" name='apellido'>Apellido</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="text" 
                            name="apellido" 
                            id="" 
                            placeholder="Apellido" 
                            required
                            onChange={handleInputChange}
                            pattern='[a-z,A-Z]{2,20}'
                        /><br/>

                        <label className="pt-2" htmlFor=""name='telefono'>Telefono</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" 
                            type="tel" 
                            name="telefono" 
                            id="" 
                            placeholder="Teléfono" 
                            required
                            onChange={handleInputChange}
                            pattern="[0-9]{3,13}"
                        /><br/>

                        <label className="pt-2" htmlFor="">Email</label>
                        <input className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" type="email" 
                            name="email" 
                            id="" 
                            placeholder="Correo electrónico" 
                            required
                            onChange={handleInputChange}
                        /><br/>

                        <label className="pt-2" htmlFor="" name='mensaje'>Mensaje</label>
                        <textarea className="hover:border-[#3f1010] bg-[#fbe5e5] w-full p-1 border-1 border-[#ea7f80] rounded" name="mensaje" 
                            placeholder="Tu Mensaje"
                            onChange={handleInputChange}
                            pattern="[a-z, A-Z]{10,200}" 
                            field-sizing='content'>
                        </textarea><br/>

                        <div className="flex justify-center pt-4 pb-2">
                            <button className="hover:bg-[#fff] hover:border hover:border-[#c9393a] hover:text-[#c9393a] p-1 text-[#fff] bg-[#c9393a] rounded " 
                            type="submit"
                            >Enviar</button>
                        </div>                        
                    </fieldset>
                    
                </form>
            </div>
        </main>
    )
}

export default Contacto