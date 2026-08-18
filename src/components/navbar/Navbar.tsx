import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState<boolean>(false);
    return (
        <header className="fixed top-0 w-full z-50 border-b border-slate-200 shadow-sm bg-white/75 backdrop-blur-md">
            <nav className="flex items-center justify-between px-2 md:px-2 py-1 max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center cursor-pointer active:scale-95 transition-transform"
                >
                    <img
                        alt="Logo Tech Nexus"
                        className="h-16 w-auto p-4"
                        src="https://ik.imagekit.io/vpgms/pratica_avaliada-18-08-2026/logo_startup.svg"
                    />
                </Link>

                {/* Links de navegação (Desktop) */}

                <div className="hidden md:flex items-center gap-6 text-base mx-16">
                    <Link
                        to="/"
                        className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    >
                        Home
                    </Link>
                    <Link
                        to="/sobre"
                        className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    >
                        Sobre Nós
                    </Link>
                    <Link
                        to="/contato"
                        className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    >
                        Contato
                    </Link>
                </div>

                {/* Botão hambúrguer (Mobile) */}
                <button
                    className="mx-4 md:hidden text-slate-600"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                >
                    {menuAberto ? <XIcon size={28} /> : <ListIcon size={28} />}
                </button>
            </nav>

            {/* Links de navegação (Mobile)*/}
            <div
                className={`${
                    menuAberto ? "flex" : "hidden"
                } md:hidden flex-col items-center gap-2 text-base border-t border-slate-200 px-4 py-4`}
            >
                <Link
                    to="/"
                    className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    onClick={() => setMenuAberto(false)}
                >
                    Home
                </Link>
                <Link
                    to="/sobre"
                    className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    onClick={() => setMenuAberto(false)}
                >
                    Sobre Nós
                </Link>
                <Link
                    to="/contato"
                    className="cursor-pointer active:scale-95 transition-transform text-slate-600 hover:text-blue-700 hover:underline px-3 py-1"
                    onClick={() => setMenuAberto(false)}
                >
                    Contato
                </Link>
            </div>
        </header>
    );
}
