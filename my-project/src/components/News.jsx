import backgroundTwo from '../assets/bg2.jpg'
import f5 from '../assets/f5.jpg'

const News = () => {
    return (
        <section className="flex px-4 sm:px-0">
            <div className="flex-1 h-[770px]" style={{ backgroundImage: `url(${backgroundTwo})`, backgroundPosition: 'center-left', backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center justify-start pb-9 text-center">
                    <h2 className="font-black text-3xl uppercase mb-8 pt-16 smartphone:text-2xl">
                        Chegou o novo Frappuccino <br /> Ultra Caramelo!
                    </h2>
                    <p className="font-extralight tracking-wider text-[#111111]">
                        Estamos felizes por ter você aqui! Isso pede caramelo. <br /> Muuuito. Com chantilly gelado. <br />
                        Chegou o novo Frappuccino Ultra Caramelo!
                    </p>
                    <button className="mt-16 border-2 border-black py-4 px-12">Leia mais</button>
                </div>
            </div>
            <div className="flex-1" style={{ backgroundImage: `url(${f5})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </section>
    )
}

export default News
