import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  initial: string;
  color: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  initial,
  color,
}: TestimonialCardProps) {
  return (
    <div className="transform rounded-xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <blockquote className="mt-4 text-lg text-gray-700 italic">
        "{quote}"
      </blockquote>
      <div className="mt-6 flex items-center">
        <div
          className={`h-14 min-w-14 rounded-full ${color} flex items-center justify-center text-2xl font-bold text-white`}
        >
          {initial}
        </div>
        <div className="ml-4">
          <p className="text-brand-blue-dark font-bold">{name}</p>
          <p className="text-gray-600">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
