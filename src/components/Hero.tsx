import Image from "next/image";
import CountUp from "./ui/CountUp";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-blue-dark relative flex min-h-[calc(100vh-5rem)] items-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/home-hero.avif"
          width={1920}
          height={1080}
          alt="Office Background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-7xl">
          <span>Proteção Completa para </span>
          <span className="text-sky-300">Você</span>
          <span> e sua </span>
          <span className="text-sky-300">Empresa</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
          Há mais de 15 anos oferecemos soluções personalizadas em seguros para
          pessoas físicas e empresas. Nossa consultoria especializada desenvolve
          a proteção ideal para cada necessidade, transformando riscos em
          tranquilidade.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/5511995303261"
            target="_blank"
            className="bg-brand-green w-full transform rounded-lg px-8 py-4 text-lg font-bold text-white capitalize shadow-lg transition-transform hover:scale-105 hover:bg-green-600 sm:w-auto"
          >
            Solicite uma Cotação
          </Link>
        </div>

        <div className="mx-auto mt-20 hidden max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 md:grid">
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl font-bold text-white lg:text-5xl">
              <CountUp to={2000} duration={1} separator={"."} />+
            </p>
            <p className="mt-2 text-gray-300">Clientes Atendidos</p>
          </div>
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl font-bold text-white lg:text-5xl">
              {" "}
              <CountUp to={40} duration={2} />+
            </p>
            <p className="mt-2 text-gray-300">Anos de Experiência</p>
          </div>
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl font-bold text-white lg:text-5xl">
              {" "}
              <CountUp to={99} duration={2} />%
            </p>
            <p className="mt-2 text-gray-300">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
