import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


export const Footer2 = () => {
    return (
        <footer className='shadow bg-[#335c67]' /* className=" mt-2 w-screen sm:grid sm:footer-areas sm:footer-areas-sm" */>
            <CDBBox className="md:flex-col md:flex mx-auto py-3 md:w-[90%]">
                <CDBBox className="md:flex-wrap md:flex md:justify-between">
                    <CDBBox className='justify-center flex'>
                        <a href="/" className="md:flex md:items-center md:p-0">
                        <img
                            className='bg-[#335c67] '
                            alt="logo"
                            src="/img/LogoHotelDubrava-estilo4.png"
                            width="300px"
                        />
                        <span className="ms-3 h5 font-weight-bold"></span>
                        </a>
                    </CDBBox>
                    <CDBBox className='flex md:justify-between justify-around sm:w-full items-center md:w-[55%]'>
                        <CDBBox>
                            <p className="h5 mb-4 w-full" style={{ fontWeight: '600' }}>
                                Navegacion
                            </p>
                            <CDBBox className='p-0 flex flex-col cursor-pointer w-full'>
                                <a className='no-underline' href="/">Inicio</a>
                                <a className='no-underline' href="/">Acerca del Hotel</a>
                                <a className='no-underline' href="/">Habitaciones</a>
                                <a className='no-underline' href="/">Promociones</a>
                                <a className='no-underline' href="/">Reservas</a>
                                <a className='no-underline' href="/">Servicios</a>
                                <a className='no-underline' href="/">Contacto</a>
                                <a className='no-underline' href="/">Ubicacion</a>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <div className="mb-4 hidden md:flex">
                                <img src="/img/LogoHotelDubrava-estilo4-removebg-preview.png" alt="logo hotel dubrava" />
                            </div>
                            <CDBBox className='flex flex-col p-0 cursor-pointer'>
                                <ul>                                    
                                    <li className='list-none'>Irigoyen 121. Ostende, Pinamar.</li>
                                    <li className='list-none'>Buenos Aires, Argentina</li>
                                    <li className='list-none'>Tel / Fax: (02254-482566)</li>
                                    <li className='list-none'>reservas@hoteldubrava.com.ar</li>
                                </ul>
                                
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox className="md:mt-4 flex justify-between p-2">
                    <small className="ms-2">&copy; Hotel Dubrava, 2024. All rights reserved.</small>
                    <CDBBox className="flex">                        
                        <CDBBtn color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBBox>
        </footer>
    );
};