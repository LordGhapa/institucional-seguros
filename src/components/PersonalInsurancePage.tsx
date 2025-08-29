"use client"
import React, { useState } from 'react';

// Icons
const HomeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>;
const ChevronRightIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>;
const HeartIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8 text-blue-600' }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const HomeModernIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CarIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l-2 2-2-2m4 4V5a2 2 0 012-2h4a2 2 0 012 2v12m-6 0h6m-6 0H5a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0116.414 5H19a2 2 0 012 2v10a2 2 0 01-2 2h-1" /></svg>;
const ShieldCheckIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;


const FeaturePill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-2 border shadow-sm">
        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        <span className="text-gray-700">{children}</span>
    </div>
);


const FAQItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50">
                <span className="font-medium text-gray-800">{question}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 bg-gray-50 text-gray-600">{answer}</div>}
        </div>
    );
};

const ProductSection: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; description: string; features: string[]; buttonText: string; buttonClass: string; image: string; reverse?: boolean }> = ({ icon, title, subtitle, description, features, buttonText, buttonClass, image, reverse }) => (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-row-dense' : ''}`}>
        <div className={` ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="flex items-center space-x-3">
                <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
                <div>
                    <h2 className="text-3xl font-bold text-brand-blue-dark">{title}</h2>
                    <p className="font-semibold">{subtitle}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-600">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
                {features.map(item => <FeaturePill key={item}>{item}</FeaturePill>)}
            </div>
            <a href="#contato" className={`mt-8 inline-block text-white font-bold py-3 px-6 rounded-lg ${buttonClass}`}>{buttonText}</a>
        </div>
        <div className={`rounded-lg overflow-hidden shadow-2xl ${reverse ? 'lg:col-start-1' : ''}`}>
            <img src={image} alt={title} className="w-full h-full object-cover"/>
        </div>
    </div>
);


const PersonalInsurancePage: React.FC = () => {
    const faqs = [
        { q: "Posso incluir dependentes no meu plano de saúde individual?", a: "Sim, a maioria dos planos de saúde individuais permite a inclusão de dependentes diretos, como cônjuges e filhos. As condições e custos podem variar, por isso é importante consultar as especificidades de cada plano." },
        { q: "O seguro de vida cobre apenas morte natural?", a: "Não, os seguros de vida oferecem diversas coberturas, incluindo morte acidental, invalidez permanente por acidente, doenças graves e outras. Você pode personalizar sua apólice para atender às suas necessidades." },
        { q: "Meu seguro residencial cobre danos causados por vazamentos?", a: "Geralmente sim. A cobertura básica de seguro residencial costuma incluir danos por incêndio, queda de raio e explosão. Coberturas adicionais para danos elétricos, roubo, e vazamentos podem ser contratadas para uma proteção mais completa." },
        { q: "O que é a cobertura para terceiros no seguro auto?", a: "A cobertura de Responsabilidade Civil Facultativa de Veículos (RCF-V) garante o reembolso de indenizações que você tenha que pagar a terceiros por danos materiais ou corporais causados em um acidente de trânsito." },
    ];

    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-brand-blue-dark text-white py-20 md:py-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Family"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center text-sm text-gray-300">
              <a href="#" className="hover:text-white flex items-center">
                <HomeIcon /> <span className="ml-1">Home</span>
              </a>
              <ChevronRightIcon />
              <span>Seguros Pessoais</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
              Proteção Completa para Você e sua Família
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              Cuide do que é mais importante com nossas soluções de seguros para
              pessoa física. Tranquilidade e segurança em todas as fases da sua
              vida.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
              >
                Falar com um especialista
              </a>
              <a
                href="#produtos-pessoais"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-lg"
              >
                Ver Seguros
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos-pessoais" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <ProductSection
              icon={<HeartIcon className="h-8 w-8 text-blue-600" />}
              title="Plano de Saúde Individual"
              subtitle="Sua saúde em primeiro lugar"
              description="Garanta acesso a uma ampla rede de hospitais, laboratórios e médicos com um plano de saúde que se encaixa no seu perfil e no seu bolso. Cuidar da saúde é o melhor investimento."
              features={[
                'Ampla rede credenciada',
                'Reembolso',
                'Atendimento nacional',
                'Planos sem coparticipação'
              ]}
              buttonText="Simular Plano de Saúde"
              buttonClass="bg-brand-blue hover:bg-blue-800"
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductSection
              icon={<HomeModernIcon />}
              title="Seguro Residencial"
              subtitle="Proteção para o seu lar"
              description="Seu lar é seu porto seguro, e merece estar protegido. Com o seguro residencial, você tem cobertura contra incêndio, roubo, danos elétricos e muito mais, além de contar com serviços de assistência 24 horas."
              features={[
                'Cobertura de incêndio',
                'Proteção contra roubo',
                'Danos elétricos',
                'Assistência 24h'
              ]}
              buttonText="Cotar Seguro Residencial"
              buttonClass="bg-brand-green-dark hover:bg-green-700"
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              reverse={true}
            />

            <ProductSection
              icon={<CarIcon />}
              title="Seguro Auto"
              subtitle="Dirija com mais tranquilidade"
              description="Proteja seu veículo contra roubo, furto, colisões e danos a terceiros. Oferecemos diversas opções de cobertura e assistências para você dirigir sem preocupações."
              features={[
                'Cobertura para colisão',
                'Roubo e furto',
                'Carro reserva',
                'Assistência 24h'
              ]}
              buttonText="Cotar Seguro Auto"
              buttonClass="bg-indigo-600 hover:bg-indigo-700"
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductSection
              icon={<ShieldCheckIcon />}
              title="Seguro de Vida e Acidentes Pessoais"
              subtitle="Garanta o futuro de quem você ama"
              description="Proteja sua família de imprevistos financeiros. O seguro de vida oferece tranquilidade, garantindo apoio em momentos difíceis como acidentes, doenças graves ou falecimento."
              features={[
                'Cobertura por morte',
                'Invalidez por acidente',
                'Doenças graves',
                'Assistência funeral'
              ]}
              buttonText="Fazer Cotação de Seguro"
              buttonClass="bg-purple-600 hover:bg-purple-700"
              image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              reverse={true}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-brand-blue-dark">
                Dúvidas Frequentes
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Respostas para as perguntas mais comuns sobre seguros para
                pessoa física.
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md border">
              {faqs.map(faq => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
};

export default PersonalInsurancePage;
