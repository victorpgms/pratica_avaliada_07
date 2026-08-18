
function Home() {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col gap-12">
            <section className="my-10 flex flex-col md:flex-row items-center justify-between gap-8 ">
                <div className="flex flex-1 flex-col gap-4 md:min-w-99">
                    <h1
                        className="text-4xl md:text-6xl font-bold
                        text-blue-600"
                    >
                        Inovando o <br /> Futuro Digital
                    </h1>
                    <p className="text-base text-slate-600 text-justify">
                        {" "}
                        Construímos soluções tecnológicas inteligentes que
                        aceleram a transformação da sua empresa.
                        Precisão enterprise com a agilidade de uma startup
                        moderna.
                    </p>
                    <div>
                    <button className="bg-blue-600 text-white text-base px-4 py-2 rounded-lg hover:bg-blue-700 font-bold cursor-pointer ">Saiba mais</button>
                    </div>
                </div>
                <div className="flex flex-1 w-full h-64 md:h-80 rounded-3xl border overflow-hidden">
                    <img
                        src="https://ik.imagekit.io/vpgms/pratica_avaliada-18-08-2026/hero.jpg"
                        alt="Imagem ilustração tech"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;
