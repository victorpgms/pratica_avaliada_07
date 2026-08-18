export default function Contato() {
    return (
        <main className="grow w-full min-h-screen bg-slate-50 px-4 md:px-8 pt-16 md:pt-20 pb-16">
            {/* Cabeçalho */}
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
                    Fale Conosco
                </h1>
                <p className="mt-3 text-slate-600 text-base">
                    Entre em contato para discutir parcerias, soluções enterprise ou dúvidas técnicas.
                </p>
            </div>

            {/* Card do Formulário */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
                <form className="flex flex-col gap-6">
                    {/* Nome Completo */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-sm font-semibold text-slate-900">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Jane Doe"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email Corporativo */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">
                            Email Corporativo
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="jane@empresa.com"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Assunto */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="assunto" className="text-sm font-semibold text-slate-900">
                            Assunto
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            placeholder="Soluções Enterprise"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="mensagem" className="text-sm font-semibold text-slate-900">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            placeholder="Como podemos ajudar a escalar seu negócio?"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Botão de Envio */}
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
                        >
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}