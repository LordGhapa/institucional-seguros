import { Clock, CheckCircle2Icon, TrendingUp } from "lucide-react";
const icons: { [key: string]: React.ReactNode } = {
  clock: <Clock className="size-10" />,
  solutions: <CheckCircle2Icon className="size-10" />,
  cost: <TrendingUp className="size-10" />,
  team: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

const reasons = [
  {
    icon: "clock",
    color: "text-blue-500 bg-blue-100",
    title: "Atendimento Rápido",
    description: "Respostas em até 24h e suporte especializado",
  },
  {
    icon: "solutions",
    color: "text-green-500 bg-green-100",
    title: "Soluções Personalizadas",
    description: "Produtos sob medida para seu negócio",
  },
  {
    icon: "cost",
    color: "text-purple-500 bg-purple-100",
    title: "Melhor Custo-Benefício",
    description: "Preços competitivos com máxima cobertura",
  },
  {
    icon: "team",
    color: "text-orange-500 bg-orange-100",
    title: "Equipe Especializada",
    description: "Profissionais certificados e experientes",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-brand-blue-dark xs:text-3xl text-2xl font-bold md:text-4xl">
            Por que Escolher a Palagos?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experiência, confiança e resultados comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-6 text-center">
              <div
                className={`xs:size-20 mx-auto flex size-14 items-center justify-center rounded-full ${reason.color}`}
              >
                {icons[reason.icon]}
              </div>
              <h3 className="text-brand-blue-dark mt-6 text-xl font-bold">
                {reason.title}
              </h3>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
