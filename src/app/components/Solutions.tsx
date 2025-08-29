"use client";
import SolutionCard from "./SolutionCard";
import { OfficeBuildingIcon, UserGroupIcon } from "../../components/ui/icons";

export default function Solutions() {
  const personalFeatures = [
    "Plano de Saúde Individual",
    "Seguro de Vida",
    "Seguro Residencial",
    "Seguro Auto",
    "Plano Odontológico",
    "Seguro Viagem",
  ];
  const businessFeatures = [
    "Plano de Saúde Corporativo",
    "Seguro Empresarial",
    "Vida e Acidentes",
    "Seguro de Frota",
    "Responsabilidade Civil",
    "Plano Odontológico",
  ];

  return (
    <section id="solucoes" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-brand-blue-dark text-2xl font-bold md:text-4xl">
            Soluções Personalizadas para Cada Necessidade
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oferecemos proteção completa tanto para você e sua família quanto
            para sua empresa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <SolutionCard
            bgColor="bg-brand-light-blue"
            icon={<UserGroupIcon />}
            title="Para sua Família"
            subtitle="Pessoa Física"
            description="Proteja quem você mais ama com nossos seguros personalizados para pessoas físicas. Oferecemos tranquilidade e segurança para todas as fases da sua vida."
            features={personalFeatures}
            buttonText="Ver Seguros para Pessoa Física"
            buttonColor="bg-brand-blue"
            buttonHref="/pessoais"
          />
          <SolutionCard
            bgColor="bg-brand-light-green "
            icon={<OfficeBuildingIcon className="text-white" />}
            title="Para sua Empresa"
            subtitle="Pessoa Jurídica"
            description="Mantenha seu negócio protegido e seus colaboradores seguros com nossas soluções corporativas. Investimento estratégico em proteção e produtividade."
            features={businessFeatures}
            buttonText="Ver Seguros Empresariais"
            buttonColor="bg-brand-green-dark"
            buttonHref="/empresa"
          />
        </div>
      </div>
    </section>
  );
}
