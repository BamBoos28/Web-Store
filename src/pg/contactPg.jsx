export default function () {
    return (
        <section className="overflow-hidden pt-10 md:pt-20">
            <div className="px-6 md:px-16 xl:px-28 2xl:px-44 flex flex-col z-10">
                <div className="flex">
                    <div className="xl:w-1/2">
                        <img src="3d-man.png" className="absolute h-4/5 bottom-0 z-10" alt="" />
                    </div>
                    <div className="bg-transparent backdrop-blur xl:w-1/2 z-10">
                        <h1 className="font-title text-4xl md:text-6xl mb-3 bg-white/50">KUNJUNGI TOKO KAMI</h1>
                        <h1 className="font-body md:text-2xl mb-6 z-20 bg-white/50">Dapatkan berbagai penawaran dan promo menarik disini dalam jumlah terbatas</h1>
                        <div className="z-10 mb-6 flex bg-blue-100 md:px-12 px-3 py-3 md:py-6 rounded-xl items-center gap-4">
                            <i className="fi fi-rr-marker md:text-4xl"></i>
                            <div className="text-left">
                                <h1 className="font-title">Alamat</h1>
                                <h5 className="font-body">Jl. Sunan Kalijaga, Randukuning, Pati Lor, Kec. Pati, Kabupaten Pati, Jawa Tengah 59111</h5>
                            </div>
                        </div>
                        <div className="z-10 flex bg-blue-100 md:px-12 px-3 py-3 md:py-6 rounded-xl items-center gap-4">
                            <i className="fi fi-rr-shopping-cart md:text-4xl"></i>
                            <div className="text-left">
                                <h1 className="font-title">Shoppe</h1>
                                <h5 className="font-body">HEHE</h5>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute w-full left-0 h-full">
                        <div className="h-1/2"></div>
                        <div className="h-1/2 bg-blue-300"></div>
                    </div> */}
                </div>
            </div>
            <div className="right-0 bottom-0 absolute w-full z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#93C5FD" fillOpacity="1" d="M0,96L40,112C80,128,160,160,240,154.7C320,149,400,107,480,96C560,85,640,107,720,138.7C800,171,880,213,960,208C1040,203,1120,149,1200,128C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}