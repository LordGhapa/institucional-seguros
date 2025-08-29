import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import { ShieldIcon } from "./ui/icons";

const companyInfo = {
  name: "PALAGOS",
  description:
    "Especialistas em seguros empresariais com mais de 15 anos de experiência. Protegemos empresas de todos os tamanhos com soluções personalizadas e atendimento de excelência.",
  cnpj: "00.000.000/0001-00",
  susep: "00000.000000/0000-00",
  copyrightYear: new Date().getFullYear(),
};

const contactInfo = {
  personName: "João Zambon",
  personTitle: "Diretor Comercial",
  phone: "(11) 99530-3261",
  phoneHref: "tel:11995303261",
  email: "joao@palagos.com.br",
  emailHref: "mailto:joao@palagos.com.br",
  address: "Rua DOS CORNOS Jordão, 25\nIpiranga - São Paulo - SP",
  // address: "Rua Brigadeiro Jordão, 25\nIpiranga - São Paulo - SP",
};

const navLinks = {
  products: [
    { href: "#plano-saude", label: "Plano de Saúde Corporativo" },
    { href: "#seguro-empresarial", label: "Seguro Empresarial" },
    { href: "#vida-acidentes", label: "Vida e Acidentes Pessoais" },
    { href: "/", label: "Outros Seguros" },
  ],
  company: [
    { href: "/sobre-nos", label: "Sobre a Palagos" },
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
    { href: "#contato", label: "Fale Conosco" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
];

const CompanyInfoSection = () => (
  <div className="flex flex-col gap-6">
    <Link
      href="/"
      className="flex items-center gap-3 text-white focus:outline-none"
    >
      <ShieldIcon className="h-8 w-8 text-blue-400" />
      <span className="text-2xl font-bold tracking-wider">
        {companyInfo.name}
      </span>
    </Link>
    <p className="max-w-md text-slate-400">{companyInfo.description}</p>
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          className="text-slate-400 transition-colors hover:text-white"
        >
          <span className="sr-only">{social.name}</span>
          <social.icon className="h-6 w-6" aria-hidden="true" />
        </Link>
      ))}
    </div>
  </div>
);

const ContactDetailsSection = () => (
  <div className="flex flex-col gap-4">
    <div>
      <h3 className="text-xl font-semibold text-white">
        {contactInfo.personName}
      </h3>
      <p className="text-sm text-blue-200">{contactInfo.personTitle}</p>
    </div>
    <address className="flex flex-col gap-4 not-italic">
      <ContactLink
        href={contactInfo.phoneHref}
        icon={PhoneIcon}
        text={contactInfo.phone}
      />
      <ContactLink
        href={contactInfo.emailHref}
        icon={MailIcon}
        text={contactInfo.email}
      />
      <div className="flex items-start gap-3">
        <MapPinIcon
          className="mt-1 h-5 w-5 flex-shrink-0 text-slate-400"
          aria-hidden="true"
        />
        <span className="whitespace-pre-line text-slate-300">
          {contactInfo.address}
        </span>
      </div>
    </address>
  </div>
);

const ContactLink = ({
  href,
  icon: Icon,
  text,
}: {
  href: string;
  icon: React.ElementType;
  text: string;
}) => (
  <Link
    href={href}
    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
  >
    <Icon className="h-5 w-5 text-slate-400" aria-hidden="true" />
    <span>{text}</span>
  </Link>
);

const LinkList = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => (
  <div>
    <h4 className="mb-4 text-base font-semibold tracking-wider text-white uppercase">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link
            href={link.href}
            className="text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterBottom = () => (
  <div className="border-t border-slate-800 pt-8">
    <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-slate-300! sm:flex-row sm:px-6 lg:px-8">
      <p className="text-sm text-slate-300">
        &copy; {companyInfo.copyrightYear} {companyInfo.name}. Todos os direitos
        reservados.
      </p>
      <div className="flex items-center gap-x-4 text-xs text-slate-300">
        <span>CNPJ: {companyInfo.cnpj}</span>
        <span className="h-4 w-px text-slate-300"></span>
        <span>SUSEP: {companyInfo.susep}</span>
      </div>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer
      className="bg-slate-900 pt-20 pb-8 text-slate-300"
      aria-labelledby="footer-heading"
      id="footer"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <CompanyInfoSection />
          </div>

          <div className="lg:col-start-3 xl:col-span-2">
            <ContactDetailsSection />
          </div>

          <LinkList title="Institucional" links={navLinks.company} />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
