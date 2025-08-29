const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue-dark text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Office Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          <span>Proteção Completa para </span>
          <span className="text-sky-300">Você</span>
          <span> e sua </span>
          <span className="text-sky-300">Empresa</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Há mais de 15 anos oferecemos soluções personalizadas em seguros para
          pessoas físicas e empresas. Nossa consultoria especializada desenvolve
          a proteção ideal para cada necessidade, transformando riscos em
          tranquilidade.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#/empresas"
            className="w-full sm:w-auto bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Encontrar Meu Seguro
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl lg:text-5xl font-bold text-white">2.000+</p>
            <p className="mt-2 text-gray-300">Clientes Atendidos</p>
          </div>
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl lg:text-5xl font-bold text-white">15+</p>
            <p className="mt-2 text-gray-300">Anos de Experiência</p>
          </div>
          <div className="border-t-2 border-sky-400 pt-4">
            <p className="text-4xl lg:text-5xl font-bold text-white">98%</p>
            <p className="mt-2 text-gray-300">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
