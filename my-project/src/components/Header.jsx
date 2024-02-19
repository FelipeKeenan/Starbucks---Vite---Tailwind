const Header = () => {
    return (
        <header className="lg:px-3">
      <div className="h-2 bg-[#117050]"></div>
      <div className="container h-[100px] flex justify-between items-center">
        <div className="md:px-4 smartphone:pl-2"> {/*L.E/Logotipo*/}
          <img className="h-[64px] w-[64px]" src="logo.png" alt="" />
        </div>
        <div className="flex items-center md:px-4 smartphone:pr-2"> {/*Lado direito do header*/}
          <div className="flex smartphone:ml-5"> {/*L.D/Pesquisar*/}
            <form>
              <input className="text-base py-2 px-8 border border-[#999] outline-none w-full max-w-[220px]"
                type="search" name="search" placeholder="Pesquisar" />
            </form>
            <button className="border-0 bg-transparent cursor-pointer ml-[-30px]">
              <img className="w-4 h-4" src="loupe.png" alt="" />
            </button>
          </div>
          <div className="ml-24"> {/*L.D/Menu*/}
            <img className="h-6 w-6 cursor-pointer" src="menu.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    )
  }
  
  export default Header
  