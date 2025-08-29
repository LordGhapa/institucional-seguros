
import React, { useState } from 'react';

// Icons
const HomeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>;
const ChevronRightIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>;
const HeartIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const BuildingOfficeIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1 4h1" /></svg>;
const ShieldCheckIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg p-4 flex items-start space-x-4 border border-gray-100 h-full">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <h4 className="font-bold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
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

const BusinessInsurancePage: React.FC = () => {
    // Data would typically come from a CMS or API
    const corporateHealthPlan = {
        features: [
            { icon: <HeartIcon />, title: "Cobertura Médica Completa", description: "Consultas, exames, internações e cirurgias com rede credenciada nacional" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, title: "Atendimento 24 Horas", description: "Pronto-socorro e emergências disponíveis todos os dias do ano" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m0-2.657A8 8 0 0121.657 16.343S21 15 19 14m-4-2a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, title: "Medicina Preventiva", description: "Check-ups regulares e programas de prevenção para manter a equipe saudável" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.95l.001-.001M16.263 16.95l.001-.001M12 20.055V17m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path></svg>, title: "Cobertura Nacional", description: "Atendimento em todo território brasileiro para empresas com filiais" },
        ],
        targetAudience: [
            "Empresas com 2 ou mais funcionários",
            "Negócios que valorizam retenção de talentos",
            "Organizações focadas em produtividade",
            "Empresas que buscam vantagem competitiva no mercado",
        ]
    };
    const businessInsurance = {
        features: [
            { icon: <BuildingOfficeIcon />, title: "Proteção Patrimonial", description: "Cobertura completa para equipamentos, móveis e estrutura física da empresa" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, title: "Responsabilidade Civil", description: "Proteção contra danos causados a terceiros durante as atividades empresariais" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>, title: "Lucros Cessantes", description: "Indenização por interrupção das atividades devido a sinistros cobertos" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, title: "Assistência 24h", description: "Suporte técnico e jurídico disponível a qualquer momento" },
        ],
        idealFor: [
            "Escritórios e estabelecimentos comerciais",
            "Indústrias e fábricas",
            "Prestadores de serviços",
            "Empresas com equipamentos de alto valor",
        ]
    };
    const lifeInsurance = {
        features: [
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-3 5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>, title: "Morte e Invalidez", description: "Indenização para beneficiários em casos de morte ou invalidez permanente" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>, title: "Auxílio Financeiro", description: "Renda mensal temporária em caso de incapacidade temporária para o trabalho" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-3 3a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, title: "Assistência Funeral", description: "Cobertura completa para despesas funerárias e apoio à família" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, title: "Cobertura 24h", description: "Proteção durante trabalho, lazer e deslocamentos do colaborador" },
        ],
        benefits: [
            "Funcionários de todas as idades",
            "Famílias dos colaboradores",
            "Empresas que valorizam responsabilidade social",
            "Organizações focadas em retenção de talentos",
        ]
    };

    const faqs = [
        { q: "Qual o número mínimo de funcionários para contratar?", a: "Oferecemos planos para empresas a partir de 2 funcionários, garantindo que mesmo pequenos negócios possam proteger sua equipe." },
        { q: "Como funciona o período de carência?", a: "O período de carência varia de acordo com o plano e os procedimentos. Nossa equipe fornecerá todas as informações detalhadas durante a cotação para que não haja surpresas." },
        { q: "Posso personalizar as coberturas?", a: "Sim, um dos nossos diferenciais é a personalização. Montamos o plano de acordo com as necessidades da sua empresa e o perfil dos seus colaboradores." },
        { q: "Como é feito o pagamento?", a: "O pagamento é flexível, podendo ser realizado via boleto bancário, débito em conta ou cartão de crédito, com opções de faturamento mensal, trimestral ou anual." },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-brand-blue-dark text-white py-20 md:py-28">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business Meeting" className="w-full h-full object-cover opacity-20" />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center text-sm text-gray-300">
                        <a href="#" className="hover:text-white flex items-center"><HomeIcon /> <span className="ml-1">Home</span></a>
                        <ChevronRightIcon />
                        <span>Seguros Empresariais</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4">Proteção Completa para sua Empresa</h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-200">Oferecemos soluções integradas de seguros corporativos: Plano de Saúde, Seguro Empresarial e Vida e Acidentes Pessoais. Proteja seu negócio, seus colaboradores e garanta a continuidade das suas operações.</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a href="#contato" className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">Solicitar Cotação Completa</a>
                        <a href="#produtos" className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-lg">Conhecer Produtos</a>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="produtos" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    
                    {/* Corporate Health Plan */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-blue-100 rounded-full"><HeartIcon /></div>
                                <div>
                                    <h2 className="text-3xl font-bold text-brand-blue-dark">Plano de Saúde Corporativo</h2>
                                    <p className="text-blue-600 font-semibold">Investimento na saúde e produtividade</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">Um plano de saúde corporativo é muito mais que um benefício – é um investimento estratégico na produtividade e bem-estar da sua equipe. Colaboradores saudáveis são mais engajados, faltam menos e contribuem significativamente para o crescimento da empresa.</p>
                            <h3 className="mt-6 font-bold text-lg text-gray-800">Público-alvo ideal:</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                                {corporateHealthPlan.targetAudience.map(item => <li key={item}>{item}</li>)}
                            </ul>
                            <a href="#contato" className="mt-6 inline-block bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">Solicitar Cotação →</a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {corporateHealthPlan.features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
                        </div>
                    </div>
                    
                    {/* Business Insurance */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {businessInsurance.features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-green-100 rounded-full"><BuildingOfficeIcon /></div>
                                <div>
                                    <h2 className="text-3xl font-bold text-brand-blue-dark">Seguro Empresarial</h2>
                                    <p className="text-green-600 font-semibold">Proteção patrimonial completa</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">Proteja o patrimônio da sua empresa contra riscos diversos: incêndio, roubo, danos elétricos, responsabilidade civil e muito mais. Nossa cobertura abrangente garante que imprevistos não comprometam a continuidade do seu negócio.</p>
                            <h3 className="mt-6 font-bold text-lg text-gray-800">Ideal para:</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                                {businessInsurance.idealFor.map(item => <li key={item}>{item}</li>)}
                            </ul>
                            <a href="#contato" className="mt-6 inline-block bg-brand-green-dark hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">Proteger Minha Empresa →</a>
                        </div>
                    </div>

                    {/* Life and Personal Accidents */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-purple-100 rounded-full"><ShieldCheckIcon /></div>
                                <div>
                                    <h2 className="text-3xl font-bold text-brand-blue-dark">Vida e Acidentes Pessoais</h2>
                                    <p className="text-purple-600 font-semibold">Segurança para colaboradores e famílias</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">Ofereça tranquilidade aos seus colaboradores com um seguro de vida e acidentes pessoais abrangente. Este benefício demonstra o cuidado da empresa com o bem-estar dos funcionários e suas famílias, fortalecendo o vínculo e a lealdade com a organização.</p>
                            <h3 className="mt-6 font-bold text-lg text-gray-800">Beneficia:</h3>
                            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                               {lifeInsurance.benefits.map(item => <li key={item}>{item}</li>)}
                            </ul>
                            <a href="#contato" className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">Garantir Proteção →</a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {lifeInsurance.features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold text-brand-blue-dark">Perguntas Frequentes</h2>
                        <p className="mt-2 text-lg text-gray-600">Esclarecemos as principais dúvidas sobre seguros empresariais</p>
                    </div>
                    <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md border">
                       {faqs.map(faq => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-brand-blue">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold">Procurando Seguro Saúde para sua Empresa?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-200">
                        Trabalhamos com as melhores operadoras de saúde do mercado. Estamos prontos para oferecer uma implementação rápida e fácil com suporte total e atendimento personalizado.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                            Contato WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessInsurancePage;
