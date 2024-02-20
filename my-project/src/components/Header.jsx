import React, { useState } from "react";
import Navigation from "./Navegation";

const Header = () => {
  // States:
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {menuOpen && <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70">
        <button onClick={toggleMenu} className="border-2 bg-red-500 text-white rounded-sm px-4 fixed right-4 top-2 opacity-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">X</button>
      </div>}
      <div className="h-2 bg-[#117050]"></div>
      <div className="container h-[100px] flex justify-between items-center p-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
        <div className="md:px-4 smartphone:pl-2"> {/*L.E/Logotipo*/}
          <img className="h-[64px] rounded-full w-[64px]" src="logo.png" alt="logotipo" />
        </div>
        <div className="flex items-center md:px-4 smartphone:pr-2"> {/*Lado direito do header*/}
          <div className="flex smartphone:ml-5"> {/*L.D/Pesquisar*/}
            <form className="ml-8">
              <input className="text-base py-2 px-4 sm:px-8 border border-[#999] outline-none w-full max-w-[220px]"
                type="search" name="search" placeholder="Pesquisar" />
            </form>
            <button className="border-0 bg-transparent cursor-pointer ml-[-30px]">
              <img className="w-4 h-4" src="loupe.png" alt="lupa" />
            </button>
          </div>
          <div className="ml-24"> {/*L.D/Menu*/}
            <button onClick={toggleMenu}>
              {menuOpen && (
                <Navigation />
              )}
              {!menuOpen && (
                <img className="h-6 w-6 cursor-pointer sm:hidden" src="menu.png" alt="menu-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
