
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function () {
    return (
        <>
            <section className="bg-blue-100 px-6 md:px-16 xl:px-28 2xl:px-44 py-8 md:py-16 2xl:py-32 md:mt-20 xl:flex xl:flex-row flex-col justify-center  gap-12">
                <div className="xl:w-1/3 mb-6">
                    <h1 className='font-title text-4xl xl:text-6xl 2xl:text-8xl mb-3 xl:mb-6'>Setiajaya Computer
                    </h1>
                    <p className='font-body text-lg leading-relaxed tracking-wider'>Menjual berbagai jenis perlengkapan dan kelengkapan laptop maupun komputer dengan harga yang bersaing dan kualitas yang terjamin original, juga melayani service laptop dan perakitan PC</p>
                </div>
                {/* <div className="carousel carousel-center p-4 bg-neutral rounded-box">

                </div> */}
                <Swiper slidesPerView={2} className="mySwiper xl:w-2/3" loop={true}>
                    <SwiperSlide>
                        <div className="card h-44 h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="laptop-header.png" alt="Laptop" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-300">
                                <h1 className="card-title xl:text-2xl 2xl:text-4xl font-title tracking-wider">LAPTOP</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="komputer-header.png" alt="Komputer" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-150">
                                <h1 className="card-title text-white xl:text-2xl 2xl:text-4xl font-title tracking-wider">KOMPUTER</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="printer-header.png" alt="printer-header.png" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-150">
                                <h1 className="card-title xl:text-2xl 2xl:text-4xl font-title tracking-wider">PRINTER</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="projector-header.png" alt="projector-header.png" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-150">
                                <h1 className="card-title xl:text-2xl 2xl:text-4xl font-title tracking-wider">PROJECTOR</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="keyboards-header.png" alt="keyboards-header.png" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-150">
                                <h1 className="card-title xl:text-2xl 2xl:text-4xl font-title tracking-wider">KEYBOARD & MOUSE</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-44 md:h-80 bg-base-50 shadow-xl image-full ">
                            <figure><img src="speaker-header.png" alt="speaker-header.png" /></figure>
                            <div className="card-body flex justify-center items-center hover:bg-blue-50/5 duration-150">
                                <h1 className="card-title xl:text-2xl 2xl:text-4xl font-title tracking-wider">SPEAKER KOMPUTER</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* <section className="flex px-44 py-32 flex-col w-full lg:flex-row   font-body">
                <div className="grid flex-grow h-fullrounded-box place-items-center ">
                    <div className="card w-96 bg-base-100 shadow-xl hover:bg-blue-50 duration-300">
                        <figure className="">
                            <img src="original-hero.png" alt="original-hero.png" className="rounded-xl object-contain h-72" />
                        </figure>
                    </div>
                </div>
                <div className="divider  lg:divider-horizontal"></div>
                <div className="grid flex-grow h-full  rounded-box place-items-center">
                    <div className="card w-96 bg-base-100 shadow-xl hover:bg-blue-50 duration-300">
                        <figure className="px-10">
                            <img src="fast-hero.png" alt="fast-hero.png" className="rounded-xl object-contain h-72" />
                        </figure>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-full  rounded-box place-items-center">
                    <div className="card w-96 bg-base-100 shadow-xl hover:bg-blue-50 duration-300">
                        <figure className="px-10">
                            <img src="best-hero.png" alt="best-hero.png" className="rounded-xl object-contain h-72" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className='h-screen bg-red-50'>

            </section> */}
        </>

    )
}