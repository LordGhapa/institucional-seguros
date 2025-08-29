
import React from 'react';

const icons: { [key: string]: React.ReactNode } = {
    health: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    business: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1 4h1" /></svg>,
    life: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    fleet: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    rc: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    portfolio: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
};

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const servicesData = [
    {
        icon: 'health',
        color: 'text-blue-500',
        title: 'Plano de Saúde Corporativo',
        description: 'Cobertura médica completa para seus colaboradores com rede credenciada ampla e atendimento de qualidade.',
        features: ['Cobertura nacional', 'Medicina preventiva', 'Atendimento 24h', 'Rede credenciada premium'],
        href: '#/empresas'
    },
    {
        icon: 'business',
        color: 'text-green-500',
        title: 'Seguro Empresarial',
        description: 'Proteção completa para seu patrimônio contra riscos diversos e responsabilidade civil.',
        features: ['Cobertura de equipamentos', 'Responsabilidade civil', 'Interrupção de negócios', 'Assessoria jurídica'],
        href: '#/empresas'
    },
    {
        icon: 'life',
        color: 'text-purple-500',
        title: 'Vida e Acidentes Pessoais',
        description: 'Segurança financeira para você e sua família com coberturas abrangentes e assistências especializadas.',
        features: ['Morte e invalidez', 'Assistência funeral', 'Renda mensal', 'Cobertura internacional'],
        href: '#/pessoais'
    },
    {
        icon: 'fleet',
        color: 'text-indigo-500',
        title: 'Frota - Leves e Pesados',
        description: 'Proteção completa para veículos comerciais com cobertura nacional.',
        features: [],
        linkText: 'Saiba Mais',
        href: '#/empresas'
    },
    {
        icon: 'rc',
        color: 'text-rose-500',
        title: 'Empresarial e RC',
        description: 'Responsabilidade civil e proteção patrimonial.',
        features: [],
        linkText: 'Saiba Mais',
        href: '#/empresas'
    },
    {
        icon: 'portfolio',
        color: 'text-orange-500',
        title: 'Portfolio Completo PJ e PF',
        description: 'Soluções integradas para pessoas jurídicas e físicas.',
        features: [],
        linkText: 'Saiba Mais',
        href: '#solucoes'
    },
];

const ServiceCard: React.FC<(typeof servicesData)[0]> = ({ icon, color, title, description, features, linkText, href }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start">
                <div className={`p-3 bg-gray-100 rounded-full ${color}`}>
                    {icons[icon]}
                </div>
                 <ArrowRightIcon className="w-6 h-6 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-bold mt-6 text-brand-blue-dark">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                {features && features.length > 0 && (
                    <ul className="mt-4 space-y-2">
                        {features.map(feature => (
                            <li key={feature} className="flex items-center space-x-2">
                                <CheckIcon className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
             <div className="mt-6">
                <a href={href} className="font-semibold text-brand-blue hover:text-blue-700 flex items-center group">
                    <span>{linkText || 'Ver Mais Detalhes'}</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-brand-blue-dark">Nossos Principais Serviços</h2>
                    <p className="mt-4 text-lg text-gray-600">Soluções completas em seguros com atendimento personalizado e as melhores condições do mercado.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map(service => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
