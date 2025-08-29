import Link from "next/link";
import { CheckIcon } from "../../components/ui/icons";

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

export default function SolutionCard({
  bgColor,
  icon,
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonColor,
  buttonHref,
}: SolutionCardProps) {
  return (
    <div
      className={`${bgColor} transform rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`xs:block hidden rounded-full p-3 ${buttonColor === "bg-brand-blue" ? "bg-blue-500" : "bg-green-500"}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-medium text-gray-600">{subtitle}</p>
        </div>
      </div>
      <p className="mt-6 text-gray-700">{description}</p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-2">
            <CheckIcon
              className={`h-6 w-6 ${buttonColor === "bg-brand-blue" ? "text-blue-500" : "text-green-500"}`}
            />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          href={buttonHref}
          className={`inline-block w-full text-center ${buttonColor} rounded-lg px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:opacity-90`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
