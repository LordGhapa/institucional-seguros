
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const testimonialsData = [
    {
        quote: "A Palagos oferece o melhor custo-benefício em seguros corporativos. Nossa equipe está muito satisfeita com o plano de saúde.",
        name: "Maria Silva",
        title: "Diretora de RH",
        company: "TechCorp Ltda",
        initial: "M",
        color: "bg-blue-600",
    },
    {
        quote: "Excelente atendimento e soluções personalizadas. Recomendo para qualquer empresa que busca proteção completa.",
        name: "Carlos Santos",
        title: "CEO",
        company: "Indústria ABC",
        initial: "C",
        color: "bg-indigo-600",
    }
];

const TestimonialCard: React.FC<(typeof testimonialsData)[0]> = ({ quote, name, title, company, initial, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-6 h-6" />)}
        </div>
        <blockquote className="mt-4 text-gray-700 text-lg italic">
            "{quote}"
        </blockquote>
        <div className="mt-6 flex items-center">
            <div className={`w-14 h-14 rounded-full ${color} text-white flex items-center justify-center text-2xl font-bold`}>
                {initial}
            </div>
            <div className="ml-4">
                <p className="font-bold text-brand-blue-dark">{name}</p>
                <p className="text-gray-600">{title}, {company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-brand-blue-dark">O que Nossos Clientes Dizem</h2>
                    <p className="mt-4 text-lg text-gray-600">Confiança construída através de resultados.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonialsData.map(testimonial => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
