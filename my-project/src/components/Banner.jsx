import Background from '../assets/bg.jpg';
import C1 from '../assets/c1.jpg'
import C2 from '../assets/c2.jpg'
import C3 from '../assets/c3.jpg'

const Banner = () => {
    return (
        <section className="w-full h-[700px] px-4"
            style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="container">
                <h1 className="font-bold text-4xl pt-24 uppercase md:text-7xl lg:text-7xl">
                    Starbucks® <br />
                    Happy Hour
                </h1>
                <p className="mt-16 font-light text-xl text-[#111] tracking-wider md:text-xl lg:text-2xl">
                    Nos encontraremos com você <br />
                    em sua caixa de entrada. Ofertas de bebidas estão a caminho.
                </p>
                <div className="flex flex-col gap-2 items-center justify-center mt-10 pb-10 md:flex-row md:pt-8">
                    {/* coffe */}
                    <img className="rounded-full img-custom" src={C1} alt="coffe" />
                    <img className="rounded-full img-custom hidden sm:block" src={C2} alt="coffe-2" />
                    <img className="rounded-full img-custom hidden md:block" src={C3} alt="coffe-3" />
                </div>
            </div>
        </section>
    )
}

export default Banner
