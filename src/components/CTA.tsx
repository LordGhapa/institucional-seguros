import Link from "next/link";
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="bg-brand-blue">
      <div className="container mx-auto px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold">Pronto para se Proteger?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
          Seja para você, sua família ou sua empresa, temos a solução ideal.
          Nossa equipe especializada está pronta para oferecer atendimento
          personalizado e as melhores condições do mercado.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/5511995303261"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green w-full transform rounded-lg px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 sm:w-auto"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
