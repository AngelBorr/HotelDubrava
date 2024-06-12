import { useEffect, useState } from 'react'
import './css/style.css'
import 'react-bootstrap'
import NavBar from './component/NavBar/navBar'
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Footer2 } from './component/Footer/footer';
import { Navigate, Route, Routes } from 'react-router-dom'
import Spinner from './assets/Spinner/spinner.jsx';
import Nosotros from './component/pages/Nosotros/nosotros.jsx'
import Habitaciones from './component/pages/Habitaciones/habitaciones.jsx'
import Promociones from './component/pages/Promociones/promociones.jsx'
import CheckIn from './component/pages/CheckIn/checkIn.jsx'
import Servicios from './component/pages/Servicios/servicios.jsx'
import Contacto from './component/pages/Contacto/contacto.jsx';
import Ubicacion from './component/pages/ubicacion/ubicacion.jsx'
import Inicio from './component/pages/Inicio/inicio.jsx';
import ConfirmContact from './component/pages/ConfirmContact/confirmContact.jsx';
import ErrorContact from './component/pages/ErrorContact/errorContact.jsx';
import ConfirmCheckIn from './component/pages/ConfirmCheckIn/confirmCheckIn.jsx';
import ErrorCheckIn from './component/pages/ErrorCheckIn/errorCheckIn.jsx';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  
  return (
    
    <div className='bg-[#fdf3f3] m-0 p-0 h-full max-w-full box-border'>
      <header className=' w-screen max-w-full'>
        <NavBar/>
      </header>
      {
        loading ? (
          <Spinner /> // Muestra el spinner mientras se carga
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/inicio"/>} />
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/habitaciones' element={<Habitaciones/>}/>
            <Route path='/promociones' element={<Promociones/>}/>
            <Route path='/checkIn' element={<CheckIn/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/ubicacion' element={<Ubicacion/>}/>
            <Route path='/confirmContact' element={<ConfirmContact/>}/>
            <Route path='/errorContact' element={<ErrorContact/>}/>
            <Route path='/confirmCheckIn' element={<ConfirmCheckIn/>}/>
            <Route path='/errorCheckIn' element={<ErrorCheckIn/>}/>
          </Routes>
        )
      }

      <Footer2/>

    </div>    
    
  )
}

export default App
