'use client'
import React, { useState } from 'react'

const PhoneIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-blue-300"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
)

const MailIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-blue-300"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
)

const LocationIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-blue-300"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
)

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', phone: '', email: '', company: '', message: '' })
  }

  return (
    <footer id="contato" className="bg-brand-blue-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white">Fale com a gente.</h2>
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  João Zambon
                </h3>
                <p className="text-blue-200">Diretor Comercial</p>
              </div>
              <a
                href="tel:11995303261"
                className="flex items-center hover:text-white transition-colors"
              >
                <PhoneIcon />
                <span>(11) 99530-3261</span>
              </a>
              <a
                href="mailto:joao@palagos.com.br"
                className="flex items-center hover:text-white transition-colors"
              >
                <MailIcon />
                <span>joao@palagos.com.br</span>
              </a>
              <div className="flex items-start">
                <LocationIcon />
                <span>
                  Rua Brigadeiro Jordão, 25
                  <br />
                  Ipiranga - São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome e Sobrenome*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone/WhatsApp*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Empresa*"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensagem*"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
          <p>
            Todos os direitos reservados à Palagos Consultoria e Corretora de
            Seguros
          </p>
          <a href="#" className="hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
