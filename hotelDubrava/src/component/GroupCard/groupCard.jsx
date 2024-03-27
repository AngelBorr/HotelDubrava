const GroupCard = ({dataCards}) => {
    return (
        <div className='block w-screen md:flex md:flex-row md:flex-nowrap md:m-1'>
            {
                dataCards.map((item) => {
                    
                    return (
                        <article className='p-2 rounded bg-[#f8d0d0] border-1 border-[#7b3c3b] overflow-hidden object-center mt-2 md:mt-0 md:w-full md:ml-1 md:mr-1 md:pt-0'>
                            <div className='h-60'>
                                <img className="h-full w-full object-cover" src={item.images} alt={item.alt} />
                            </div>
                            <div className='p-4 space-y-3 md:h-40'>
                                <h3 className=' font-bold text-xl'>{item.title}</h3>
                                <p className='text-slate-500'>{item.description}</p>
                            </div>
                            <div className=' p-3'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium 
                                        text-center text-white bg-[#c9393a] rounded-lg hover:bg-[#8c2829] 
                                        focus:ring-4 focus:outline-none focus:ring-[#3f1010] ">
                                        Info
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    );
}

export default GroupCard;