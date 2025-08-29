
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const UserGroupIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const OfficeBuildingIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1 4h1" />
    </svg>
);


interface SolutionCardProps {
    bgColor: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonColor: string;
    buttonHref: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ bgColor, icon, title, subtitle, description, features, buttonText, buttonColor, buttonHref }) => (
    <div className={`${bgColor} rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300`}>
        <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full ${buttonColor === 'bg-brand-blue' ? 'bg-blue-500' : 'bg-green-500'}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-600 font-medium">{subtitle}</p>
            </div>
        </div>
        <p className="mt-6 text-gray-700">{description}</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                    <CheckIcon className={`w-6 h-6 ${buttonColor === 'bg-brand-blue' ? 'text-blue-500' : 'text-green-500'}`} />
                    <span className="text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-8">
            <a href={buttonHref} className={`w-full text-center inline-block ${buttonColor} text-white font-bold py-3 px-6 rounded-lg text-lg transition-opacity hover:opacity-90`}>
                {buttonText}
            </a>
        </div>
    </div>
);


const Solutions: React.FC = () => {
    const personalFeatures = ["Plano de Saúde Individual", "Seguro de Vida", "Seguro Residencial", "Seguro Auto", "Plano Odontológico", "Seguro Viagem"];
    const businessFeatures = ["Plano de Saúde Corporativo", "Seguro Empresarial", "Vida e Acidentes", "Seguro de Frota", "Responsabilidade Civil", "Plano Odontológico"];

    return (
        <section id="solucoes" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-brand-blue-dark">Soluções Personalizadas para Cada Necessidade</h2>
                    <p className="mt-4 text-lg text-gray-600">Oferecemos proteção completa tanto para você e sua família quanto para sua empresa.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                   <SolutionCard
                        bgColor="bg-brand-light-blue"
                        icon={<UserGroupIcon />}
                        title="Para Você e sua Família"
                        subtitle="Pessoa Física"
                        description="Proteja quem você mais ama com nossos seguros personalizados para pessoas físicas. Oferecemos tranquilidade e segurança para todas as fases da sua vida."
                        features={personalFeatures}
                        buttonText="Ver Seguros para Pessoa Física"
                        buttonColor="bg-brand-blue"
                        buttonHref="#/pessoais"
                   />
                   <SolutionCard
                        bgColor="bg-brand-light-green"
                        icon={<OfficeBuildingIcon />}
                        title="Para sua Empresa"
                        subtitle="Pessoa Jurídica"
                        description="Mantenha seu negócio protegido e seus colaboradores seguros com nossas soluções corporativas. Investimento estratégico em proteção e produtividade."
                        features={businessFeatures}
                        buttonText="Ver Seguros Empresariais"
                        buttonColor="bg-brand-green-dark"
                        buttonHref="#/empresas"
                   />
                </div>
            </div>
        </section>
    );
};

export default Solutions;
