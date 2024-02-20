const Navigation = () => {
    return (
        <div>
            <div className="fixed top-0 left-0">
                <ul className="flex flex-col gap-8 bg-[#222] w-auto h-auto text-white shadow-md p-4 rounded-md opacity-85  ">
                    <li><a href="#" className="li-custom">Contato</a></li>
                    <li><a href="#" className="li-custom">Produtos</a></li>
                    <li><a href="#" className="li-custom">Nossa história</a></li>
                    <li><a href="#" className="li-custom">Trabalhe conosco</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
