import bg3 from '../assets/bg3.jpg'

const ProductApresentation = () => {
    return (
        <section className="flex flex-col sm:flex-row px-4 sm:px-0">
            <div className="flex flex-col sm:w-1/2 items-center pb-9 text-center">
                <div className="h-6 w-48 bg-[#117050] mt-[55px] mb-7"></div>
                <h2 className="font-black text-3xl uppercase mb-8">O amor<br />começa com uma xícara</h2>
                <p className="font-extralight tracking-wider text-[#111111] md:px-4">
                    Apresentamos a coleção Cups of Kindness: quatro drinks muito especiais, <br /> tão deliciosos e
                    refrescantes quanto lindos. <br /> Duas novas criações, Matcha Lemonade e Violet Drink, juntarão-se ao
                    <br />
                    Pink Drink e ao Ombré Pink Drink como favoritos instantâneos do verão.
                </p>
                <button className="mt-16 border-2 border-black py-4 px-8">Leia mais</button>
            </div>
            <div className="flex-auto h-[770px]" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>
    )
}

export default ProductApresentation
