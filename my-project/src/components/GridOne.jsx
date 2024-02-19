import F1 from '../assets/f1.jpg';
import F2 from '../assets/f2.jpg'

const GridOne = () => {
    return (
        <section className="sm:grid sm:grid-cols-2 px-4 sm:px-0">
            <div className="flex flex-col items-center justify-start pb-9 text-center sm:px-4">
                <div className="h-6 w-48 bg-[#117050] mt-[55px] mb-7"></div>
                <h2 className="font-black text-3xl uppercase mb-8 smartphone:text-2xl smartphone:pl-3">Quatro bebidas, <br />Um milhão de razões</h2>
                <p className="mb-8 font-extralight tracking-wider text-[#111111] smartphone:pl-3">"Apenas ame a si próprio e pronto." - Lady Gaga </p>
                <p className="font-extralight tracking-wider text-[#111111] smartphone:pl-3">Lady Gaga e a Starbucks compartilham uma missão: construir um mundo mais gentil <br /> e corajoso. Através da Fundação Born This Way, Lady Gaga inspirou os seus fãs a abraçar a bondade nas suas <br /> comunidades – online e no mundo. Com a sua ajuda, podemos capacitar os jovens a espalhar mais bondade.</p>
                <button className="mt-16 border-2 border-black py-4 px-8">Leia mais</button>
            </div>
            <div className="h-[350px]" style={{ backgroundImage: `url(${F2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3" style={{ backgroundImage: `url(${F1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </section>
    );
};

export default GridOne;
