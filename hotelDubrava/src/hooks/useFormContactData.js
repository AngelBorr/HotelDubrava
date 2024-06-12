import { useState } from 'react';

const url = 'http://localhost:8080/contactMailing'

const useFormContactData = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const enviarDatos = (event) => {        
        event.preventDefault()            
        try {            
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
        }
    }

    return {
        datos,
        handleInputChange,
        enviarDatos
    };
};

export default useFormContactData;
