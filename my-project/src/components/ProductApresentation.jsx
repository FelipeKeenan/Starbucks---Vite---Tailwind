import bg3 from '../assets/bg3.jpg'

const ProductApresentation = () => {
    return (
        <section className="flex justify-center px-20 bg-[#e8e9ee] lg:px-3 md:px-0">
            <div>
                <div className="flex flex-col items-center justify-start pb-9 text-center pt-[120px] md:px-4 lg:pl-10">
                    <div className="h-6 w-48 bg-[#117050] mt-[55px] mb-7"></div>
                    <h2 className="font-black text-3xl uppercase mb-8">O amor<br />começa com uma xícara</h2>
                    <p className="font-extralight tracking-wider text-[#111111]">
                        Apresentamos a coleção Cups of Kindness: quatro drinks muito especiais, <br /> tão deliciosos e
                        refrescantes quanto lindos. <br /> Duas novas criações, Matcha Lemonade e Violet Drink, juntarão-se ao
                        <br />
                        Pink Drink e ao Ombré Pink Drink como favoritos instantâneos do verão.
                    </p>
                    <button className="mt-16 border-2 border-black py-4 px-8">Leia mais</button>
                </div>
            </div>
            <div className="flex-auto h-[770px]" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>
    )
}

export default ProductApresentation
