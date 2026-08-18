import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    XLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-400">
            <div
                className="w-full max-w-7xl mx-auto px-6 py-8
                           flex flex-col gap-6
                           md:flex-row md:items-center md:justify-between"
            >
                {/* Informações */}
                <div className="flex flex-col gap-1 text-sm">
                    <p>© 2026 Tech Nexus.</p>

                    <p>
                        Esta empresa e todas as informações são fictícias e
                        criadas exclusivamente para fins educacionais.
                    </p>
                </div>

                {/* Redes sociais */}
                <div className="flex items-center justify-center gap-5 md:justify-end">
                    <a
                        href=""
                        aria-label="Facebook"
                        className="transition-colors hover:text-white"
                    >
                        <FacebookLogoIcon size={26} weight="fill" />
                    </a>

                    <a
                        href=""
                        aria-label="Instagram"
                        className="transition-colors hover:text-white"
                    >
                        <InstagramLogoIcon size={26} weight="fill" />
                    </a>

                    <a
                        href=""
                        aria-label="X"
                        className="transition-colors hover:text-white"
                    >
                        <XLogoIcon size={26} weight="bold" />
                    </a>

                    <a
                        href=""
                        aria-label="LinkedIn"
                        className="transition-colors hover:text-white"
                    >
                        <LinkedinLogoIcon size={26} weight="fill" />
                    </a>

                    <a
                        href=""
                        aria-label="YouTube"
                        className="transition-colors hover:text-white"
                    >
                        <YoutubeLogoIcon size={26} weight="fill" />
                    </a>
                </div>
            </div>
        </footer>
    );
}