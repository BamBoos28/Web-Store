import { useState, useEffect } from "react"
import { laptopCategory, printerCategory, projectorCategory, komponenCategory, lainCategory } from "../data.js"

export default function () {
    const [arrayCategory, setArrayCategory] = useState([[]])
    const [arrayIndex, setArrayIndex] = useState(0)

    const pagination = (type = false) => {
        const allData = !type ? [...laptopCategory, ...printerCategory, ...projectorCategory, ...komponenCategory, ...lainCategory] : type
        // const allData = Array.from({ length: 500 }, (_, index) => index + 1)
        const chunks = [];
        const itemPage = 15

        for (let i = 0; i < allData.length; i += itemPage) {
            chunks.push(allData.slice(i, i + itemPage));
        }

        setArrayCategory(chunks)
        setArrayIndex(0)
    }

    const viewCatalog = (type = false) => {
        !type ? pagination() : pagination(type)
    }

    useEffect(() => {
        viewCatalog()
    }, [])

    return (
        <section className="xl:flex-row flex-col flex px-6 md:px-16 xl:px-28 2xl:px-44 pb-32 lg:pt-20 pt-7 flex gap-6 xl:gap-12 bg-base-100">
            <div className="xl:w-1/5 w-full h-max rounded-lg bg-transparent backdrop-blur-lg">
                <h1 className=" text-xl font-body font-bold mb-3">Kategori</h1>
                <hr className="border-blue-300"/>
                <div className="xl:flex-col flex-row flex my-6 gap-3 text-sm md:text-md text-nowrap overflow-scroll md:overflow-hidden">
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-0" name="selector" className="radio " onChange={() => pagination()} />
                        <label htmlFor="radio-0">Semua</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-1" name="selector" className="radio " onChange={() => pagination(laptopCategory)} />
                        <label htmlFor="radio-1">Laptop</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-2" name="selector" className="radio " onChange={() => pagination(printerCategory)} />
                        <label htmlFor="radio-2">Printer</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-3" name="selector" className="radio " onChange={() => pagination(projectorCategory)} />
                        <label htmlFor="radio-3">Projector</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-4" name="selector" className="radio " onChange={() => pagination(komponenCategory)} />
                        <label htmlFor="radio-4">Komponen PC</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="radio" id="radio-5" name="selector" className="radio " onChange={() => pagination(lainCategory)} />
                        <label htmlFor="radio-5">Lain - lain</label>
                    </div>
                </div>
                {/* btn-active */}
                <div id="pagination" className="join">
                    <div className="join">
                        <button className={`join-item btn ${arrayIndex == 0 ? "btn-disabled" : ""}`} onClick={()=> setArrayIndex((value) => value - 1)}>
                            <i className="fi-rr-angle-left"></i>
                        </button>
                        <button className="join-item btn">Page {arrayIndex + 1} / {arrayCategory.length}</button>
                        <button className={`join-item btn ${arrayIndex + 1 >= arrayCategory.length ? "btn-disabled" : ""}`} onClick={()=> setArrayIndex((value) => value + 1)}>
                            <i className="fi fi-rr-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="xl:w-4/5 grid md:grid-cols-3 xl:grid-cols-5 grid-rows-3 gap-x-2 gap-y-3 ">
                {arrayCategory[arrayIndex].map((value, index) => {
                    return (
                        <li key={index} className="rounded-lg card  bg-base-100 shadow-xl h-max border hover:scale-95 hover:shadow-2xl duration-150">
                            <figure><img src="https://down-id.img.susercontent.com/file/28a6611b9283e13c8944a1f12290a542_tn" className="h-64 xl:h-32 2xl:h-44 w-full object-cover hover:brightness-90	duration-300" alt="Shoes" /></figure>
                            <div className="card-body flex h-max">
                                <div className="text-container h-12 2xl:h-14">
                                    <p className="font-body text-lg">
                                        {value.name}
                                    </p>
                                </div>
                                <hr />
                                <div className="flex flex-col mt-1">
                                    <button className="btn bg-blue-50/70 hover:bg-blue-50 ">
                                        <img src="shoppe-icon.png" className="h-5" alt="" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </div>
        </section>
    )
}

