import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.jpg"

const GridTwo = () => {
    return (
        <section className="grid grid-cols-2 lg:px-3 smartphone:flex flex-col lg:grid lg:grid-cols-2">
            <div className="bg-purple-700 row-start-1 row-end-3" style={{ backgroundImage: `url(${f3})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div>
                <div className="flex flex-col items-center justify-start pb-9 text-center md:px-4">
                    <div className="h-6 w-48 bg-[#117050] mt-[55px] mb-7"></div>
                    <h2 className="font-black text-3xl uppercase mb-8 smartphone:text-2xl">
                        Apresentando Vanilla Sweet <br /> Cream Cold Brew - Doce, <br /> Cremoso, Frio, Ousado.
                    </h2>
                    <p className="font-extralight tracking-wider text-[#111111]">Pouco antes de servir, nossa mistura<br /> personalizada de café Starbucks® Cold Brew de infusão lenta é coberta <br /> com uma camada delicada de creme doce de baunilha feito em casa que cai em cascata <br /> por toda a xícara.
                    </p>
                    <button className="mt-16 border-2 border-black py-4 px-8">Leia mais</button>
                </div>
            </div>
            <div className="col-start-2 col-end-3 h-[450px]" style={{ backgroundImage: `url(${f4})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </section>
    )
}

export default GridTwo
