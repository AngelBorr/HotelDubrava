import React from 'react';
import ImageGallery from 'react-image-gallery';
import GroupCard from '../../GroupCard/groupCard.jsx';
import { dataGroupCard, listDataImgDescuentos, listDataImgInicio } from '../../../assets/data.js';

const Inicio = () => {
    return (
        <main>
            <section>
                <ImageGallery
                additionalClass={'max-w-[1350px]'}
                originalHeight={'h-[300px]'}
                items={listDataImgInicio} 
                fullscreen={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
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
        </main>        
    )
}

export default Inicio