import { useState } from 'react';

//const url = 'http://localhost:8080/contactMailing'

const useFormCheckInData = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        fechaIngreso: '',
        fechaSalida: '',
        horarioLlegada: '',
        email: '',
        telefono: '',
        direccion: '',
        localidad: '',        
        notas: '',
        nombreAcompanante1: '',
        nombreAcompanante2: '', 
        nombreAcompanante3: '',
        nombreAcompanante4: '',
        apellidoAcompanante: '',
        dniAcompanante: '',
        checkAuto: '',

    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const enviarDatos = (event) => {   
        console.log(datos)  
        event.preventDefault()            
        
        /* try {            
            if(!datos){
                throw new Error("Faltan campos por llenar, verifique los datos ingresados")
            }else{                      
                fetch(url, {
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
        } */
    }

    return {
        datos,
        handleInputChange,
        enviarDatos
    };
};

export default useFormCheckInData;
