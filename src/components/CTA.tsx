
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-brand-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
                <h2 className="text-4xl font-bold">Pronto para se Proteger?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-200">
                    Seja para você, sua família ou sua empresa, temos a solução ideal. Nossa equipe especializada está pronta para oferecer atendimento personalizado e as melhores condições do mercado.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://wa.me/5511995303261" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                        Falar no WhatsApp
                    </a>
                    <a href="#/empresas" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg">
                        Encontrar Meu Seguro
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
