
import React from 'react';

const icons: { [key: string]: React.ReactNode } = {
    clock: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    solutions: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    cost: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    team: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const reasons = [
    {
        icon: 'clock',
        color: 'text-blue-500 bg-blue-100',
        title: 'Atendimento Rápido',
        description: 'Respostas em até 24h e suporte especializado',
    },
    {
        icon: 'solutions',
        color: 'text-green-500 bg-green-100',
        title: 'Soluções Personalizadas',
        description: 'Produtos sob medida para seu negócio',
    },
    {
        icon: 'cost',
        color: 'text-purple-500 bg-purple-100',
        title: 'Melhor Custo-Benefício',
        description: 'Preços competitivos com máxima cobertura',
    },
    {
        icon: 'team',
        color: 'text-orange-500 bg-orange-100',
        title: 'Equipe Especializada',
        description: 'Profissionais certificados e experientes',
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-brand-blue-dark">Por que Escolher a Palagos?</h2>
                    <p className="mt-4 text-lg text-gray-600">Experiência, confiança e resultados comprovados.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map(reason => (
                        <div key={reason.title} className="text-center p-6">
                            <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${reason.color}`}>
                                {icons[reason.icon]}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-brand-blue-dark">{reason.title}</h3>
                            <p className="mt-2 text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
