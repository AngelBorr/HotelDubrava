import { useState } from 'react'
import './css/style.css'
import 'react-bootstrap'
import NavBar from './component/NavBar/navBar'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { listDataImgInicio, listDataImgDescuentos, dataGroupCard, dataCarousel } from './assets/data.js';
import "react-image-gallery/styles/css/image-gallery.css";
import { Footer2 } from './component/Footer/footer';
import { Navigate, Route, Routes } from 'react-router-dom'
import GroupCard from './component/GroupCard/groupCard.jsx';


console.log(dataGroupCard);

function App() {
  
  return (
    
    <div className='bg-[#fdf3f3] m-0 p-0 h-full max-w-full box-border'>
      <header className=' w-screen max-w-full'>
        <NavBar/>
      </header>
      



      {/* <Routes>
        {/* <Route path="/" element={<Navigate to="/inicio"/>} />
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/acercaDelHotel' element={<AcercaDelHotel/>}/>
        <Route path='/habitaciones' element={<Habitaciones/>}/>
        <Route path='/promociones' element={<Promociones/>}/>
        <Route path='/reservas' element={<Reservas/>}/>
        <Route path='/servicio' element={<Servicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/location' element={<Location/>}/> }
      </Routes>*/}

      <section>
        <ImageGallery
          additionalClass={'max-w-[1350px]'}
          items={listDataImgInicio} 
          fullscreen={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
          showBullets={true}
          autoPlay={true}
          size={"auto"}
        />
      </section>

      <div className='flex justify-center box-border pt-3'>
          <p className='font-bold text-2xl text-[#3f1010]'>Habitaciones destacadas</p>      
      </div>

      <GroupCard dataCards={dataGroupCard}/>      

      <div className='w-screen box-border contents'>
        <h2 className='text-center font-bold text-2xl text-[#3f1010] pt-3'>Ofertas y Promociones</h2>
        <p className='sm:text-base md:text-xl text-center text-[#c9393a]'>Encontrá acá los mejores descuentos para tus vacaciones</p>
      </div>

      <section>
        <ImageGallery
          additionalClass='max-w-full box-border pb-3'
          lazyLoad={true}
          items={listDataImgDescuentos} 
          fullscreen={true}      
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
          showBullets={true}
          autoPlay={true}
        /> 
      </section>          

      <Footer2/>

    </div>    
    
  )
}

export default App
