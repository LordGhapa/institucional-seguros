import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote:
      "A Palagos oferece o melhor custo-benefício em seguros corporativos. Nossa equipe está muito satisfeita com o plano de saúde.",
    name: "Maria Silva",
    title: "Diretora de RH",
    company: "TechCorp Ltda",
    initial: "M",
    color: "bg-blue-600",
  },
  {
    quote:
      "Excelente atendimento e soluções personalizadas. Recomendo para qualquer empresa que busca proteção completa.",
    name: "Carlos Santos",
    title: "CEO",
    company: "Indústria ABC",
    initial: "C",
    color: "bg-indigo-600",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-brand-blue-dark xs:text-3xl text-2xl font-bold md:text-4xl">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Confiança construída através de resultados.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:mt-16 lg:grid-cols-2">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
