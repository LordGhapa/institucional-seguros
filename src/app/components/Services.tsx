import {
  TruckIcon,
  ShieldCheck,
  HeartHandshake,
  FileText,
  Heart,
} from "lucide-react";
import { OfficeBuildingIcon } from "../../components/ui/icons";
import ServiceCard from "./ServiceCard";

const icons: { [key: string]: React.ReactNode } = {
  health: <ShieldCheck className="size-8" />,
  business: <OfficeBuildingIcon className={"size-8"} />,
  life: <Heart className="size-8" />,
  truck: <TruckIcon className="size-8" />,
  hands: <HeartHandshake className="size-8" />,
  portfolio: <FileText className="size-8" />,
};

const servicesData = [
  {
    icon: "health",
    color: "text-blue-500",
    title: "Plano de Saúde Corporativo",
    description:
      "Cobertura médica completa para seus colaboradores com rede credenciada ampla e atendimento de qualidade.",
    features: [
      "Cobertura nacional",
      "Medicina preventiva",
      "Atendimento 24h",
      "Rede credenciada premium",
    ],
    href: "#/empresas",
  },
  {
    icon: "business",
    color: "text-green-500",
    title: "Seguro Empresarial",
    description:
      "Proteção completa para seu patrimônio contra riscos diversos e responsabilidade civil.",
    features: [
      "Cobertura de equipamentos",
      "Responsabilidade civil",
      "Interrupção de negócios",
      "Assessoria jurídica",
    ],
    href: "#/empresas",
  },
  {
    icon: "life",
    color: "text-purple-500",
    title: "Vida e Acidentes Pessoais",
    description:
      "Segurança financeira para você e sua família com coberturas abrangentes e assistências especializadas.",
    features: [
      "Morte e invalidez",
      "Assistência funeral",
      "Renda mensal",
      "Cobertura internacional",
    ],
    href: "#/pessoais",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-brand-blue-dark text-2xl font-bold md:text-4xl">
            Nossos Principais Serviços
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Soluções completas em seguros com atendimento personalizado e as
            melhores condições do mercado.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              icon={icons[service.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
