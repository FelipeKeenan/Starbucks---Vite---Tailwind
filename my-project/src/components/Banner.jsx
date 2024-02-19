import Background from '../assets/bg.jpg';
import C1 from '../assets/c1.jpg'
import C2 from '../assets/c2.jpg'
import C3 from '../assets/c3.jpg'

const Banner = () => {
    return (
        <section className="w-full h-[700px] lg:px-3 md:px-4"
        style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
   <div className="container">
       <h1 className="font-bold text-[96px] pt-24 uppercase md:text-[50px] smartphone:text-[30px] smartphone:pl-3">
           Starbucks® <br />
           Happy Hour
       </h1>
       <p className="mt-16 font-light text-[16px] text-[#111] tracking-wider md:text-[13px] smartphone:pl-3">
           Nos encontraremos com você <br />
           em sua caixa de entrada. Ofertas de bebidas estão a caminho.
       </p>
       <div className="flex mt-10 pb-10 smartphone:flex-col smartphone:items-center lg:flex lg:items-center lg:justify-left lg:flex-row">
           {/* coffe */}
           <img className="rounded-full img-custom" src={C1} alt="" />
           <img className="rounded-full img-custom mx-8 smartphone:mt-2" src={C2} alt="" />
           <img className="rounded-full img-custom smartphone:hidden lg:block" src={C3} alt="" />
       </div>
   </div>
</section>
    )
}

export default Banner
