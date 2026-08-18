export default function Sobre() {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col gap-12">
            <section className="my-10 flex flex-col md:flex-row items-center justify-between gap-8 ">
                <div className="flex flex-1 flex-col gap-4 md:min-w-99">
                    <h1
                        className="text-4xl md:text-6xl font-bold
                        text-blue-600"
                    >
                        Nossa Missão
                    </h1>
                    <p className="text-base text-slate-600 text-justify">Transformar o cenário empresarial através da tecnologia. Na TechNexus, acreditamos que a inovação não é apenas um diferencial, mas a espinha dorsal do progresso sustentável. Desenvolvemos soluções robustas, escaláveis e intuitivas que capacitam as organizações a atingirem seu potencial máximo na era digital.
                    </p>
                </div>
                <div className="flex flex-1 w-full h-64 md:h-80 rounded-3xl border overflow-hidden">
                    <img
                        src="https://ik.imagekit.io/vpgms/pratica_avaliada-18-08-2026/sobre.png"
                        alt="Imagem sala de reunião Tech Nexus"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </main>
    );
}
