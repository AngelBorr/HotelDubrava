import { IconMenu, IconMenuCierre} from '../Icons/logoMenu.jsx';
import { useState } from 'react';

import { NavLink} from 'react-router-dom';

const NavBar = () => {

    const [open, close] = useState(false);  //Estado para abrir y cerrar el menu de nave

    return (
        <div className="p-2 border shadow w-screen flex bg-white flex-col">
            <nav className='flex justify-between'>
                <div className='w-[280px] md:w-[310px] lg:w-[340px] flex justify-start'>                
                    <img className='pt-[10px]' src="/img/LogoHotelDubrava-estilo4-removebg-preview.png" alt="logo hotel dubrava" />
                </div>

                <div className="flex justify-end pt-1">
                    <button onClick={()=>{close(true)}} className={`${open ? "hidden" : "text-slate-500 md:hidden hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"}`}>
                        <IconMenu/>
                    </button>
                    <button onClick={()=>{close(false)}} className={`${!open ? "hidden" : "text-slate-500 md:hidden hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"}`}>
                        <IconMenuCierre/>
                    </button>
                </div>

                <div className=" hidden md:flex justify-end md:pt-2 md:pb-2 w-screen">
                    <NavLink
                        className="styleLinkNav "
                        href="#home"
                        to={"/inicio"}
                        >
                        Inicio
                    </NavLink>
                    <NavLink
                        className="styleLinkNav md:text-wrap"
                        href="#link"
                        to={"/nosotros"}
                        >
                        Acerca del Hotel
                    </NavLink>
                    <NavLink
                        className="styleLinkNav"
                        href="#home"
                        to={"/habitaciones"}
                        >
                        Habitaciones
                    </NavLink>
                    <NavLink
                        className="styleLinkNav"
                        href="#link"
                        to={"/promociones"}
                        >
                        Promociones
                    </NavLink>
                    <NavLink
                        className="styleLinkNav md:text-wrap"
                        href="#home"
                        to={"/checkIn"}
                        >
                        Check In
                    </NavLink>
                    <NavLink
                        className="styleLinkNav"
                        href="#link"
                        to={"/servicios"}
                        >
                        Servicios
                    </NavLink>
                    <NavLink
                        className="styleLinkNav"
                        href="#home"
                        to={"/contacto"}
                        >
                        Contacto
                    </NavLink>
                    <NavLink
                        className="styleLinkNav"
                        href="ubicacion"
                        to={"/ubicacion"}
                        >
                        Ubicacion
                    </NavLink>
                </div>
            </nav>

            <div className=" flex w-full justify-end items-center h-full">

                <div className={`${!open ? "hidden" : "block md:hidden mt-1 h-full bg-white w-screen" }`}>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#home"
                        to={"/inicio"}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#link"
                        to={"/nosotros"}
                    >
                        Acerca del Hotel
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#home"
                        to={"/habitaciones"}
                    >
                        Habitaciones
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#link"
                        to={"/promociones"}
                    >
                        Promociones
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#home"
                        to={"/checkIn"}
                    >
                        Reservas
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#link"
                        to={"/servicios"}
                    >
                        Servicios
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#home"
                        to={"/contacto"}
                    >
                        Contacto
                    </NavLink>
                    <NavLink
                        className="flex justify-end no-underline text-slate-500 hover:text-white hover:bg-[#9e2a2b] transition-colors p-1 rounded mr-1 focus:ring-2 focus:ring-[#9e2a2b]"
                        href="#link"
                        to={"/ubicacion"}
                    >
                        Ubicacion
                    </NavLink>
                </div>

            </div>

            
        </div>
        
    );
};

export default NavBar;