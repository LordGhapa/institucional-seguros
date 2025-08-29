import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "../../components/ui/icons";

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  features: string[];
  linkText?: string;
  href: string;
}

export default function ServiceCard({
  icon,
  color,
  title,
  description,
  features,
  linkText,
  href,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex w-full items-start justify-between">
        <div
          className={`xs:block hidden rounded-full bg-gray-100 p-3 ${color}`}
        >
          {icon}
        </div>
        <ArrowRightIcon className="group-hover:text-brand-blue ml-auto size-6 text-gray-400 transition-transform group-hover:translate-x-1" />
      </div>
      <div className="flex-grow">
        <h3 className="text-brand-blue-dark mt-6 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6">
        <Link
          href={href}
          className="text-brand-blue group flex items-center font-semibold hover:text-blue-700"
        >
          <span>{linkText || "Ver Mais Detalhes"}</span>
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
