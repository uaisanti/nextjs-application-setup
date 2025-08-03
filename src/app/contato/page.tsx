'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContatoPage() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Fale Conosco
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Estamos sempre prontos para ouvir você. Entre em contato para tirar dúvidas, 
                fazer sugestões ou saber como pode contribuir com nossa missão.
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Endereço */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-amber-600">Nosso Endereço</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    <strong>Instituto Impactus</strong><br />
                    Rua das Transformações, 123<br />
                    Vila Esperança - São Paulo/SP<br />
                    CEP: 01234-567<br />
                    <br />
                    <span className="text-sm text-gray-500">
                      Próximo ao metrô Vila Madalena<br />
                      Estacionamento disponível
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Telefone */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-green-600">Telefones</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    <strong>Geral:</strong><br />
                    <a href="tel:+551133334444" className="text-green-600 hover:text-green-700">
                      (11) 3333-4444
                    </a><br />
                    <br />
                    <strong>WhatsApp:</strong><br />
                    <a href="https://wa.me/5511999999999" className="text-green-600 hover:text-green-700">
                      (11) 99999-9999
                    </a><br />
                    <br />
                    <span className="text-sm text-gray-500">
                      Atendimento: Seg a Sex, 9h às 18h<br />
                      Sábado: 9h às 12h
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>

              {/* E-mail */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-blue-600">E-mails</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    <strong>Geral:</strong><br />
                    <a href="mailto:contato@institutoimpactus.org.br" className="text-blue-600 hover:text-blue-700">
                      contato@institutoimpactus.org.br
                    </a><br />
                    <br />
                    <strong>Parcerias:</strong><br />
                    <a href="mailto:parcerias@institutoimpactus.org.br" className="text-blue-600 hover:text-blue-700">
                      parcerias@institutoimpactus.org.br
                    </a><br />
                    <br />
                    <strong>Imprensa:</strong><br />
                    <a href="mailto:imprensa@institutoimpactus.org.br" className="text-blue-600 hover:text-blue-700">
                      imprensa@institutoimpactus.org.br
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulário de Contato e Mapa */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <ContactForm 
                  title="Envie sua Mensagem"
                  description="Preencha o formulário abaixo e responderemos em breve. Todos os campos marcados com * são obrigatórios."
                />
              </div>

              {/* Mapa */}
              <div>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-poppins text-gray-900">
                      Como Chegar
                    </CardTitle>
                    <CardDescription>
                      Estamos localizados no coração de São Paulo, com fácil acesso por transporte público.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                      {!mapLoaded ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-500 mb-4">Mapa Interativo</p>
                            <Button 
                              onClick={() => setMapLoaded(true)}
                              className="bg-amber-600 hover:bg-amber-700 text-white"
                            >
                              Carregar Mapa
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Instituto Impactus</p>
                            <p className="text-xs text-gray-600">Rua das Transformações, 123</p>
                            <p className="text-xs text-gray-600">Vila Esperança - São Paulo/SP</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Transporte Público</p>
                          <p className="text-sm text-gray-600">
                            Metrô Vila Madalena (Linha 2-Verde) - 5 min caminhando<br />
                            Ônibus: Linhas 702M, 856P, 917T
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Estacionamento</p>
                          <p className="text-sm text-gray-600">
                            Vagas gratuitas disponíveis no local<br />
                            Estacionamento pago nas proximidades
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Redes Sociais */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Siga-nos nas Redes Sociais
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acompanhe nosso dia a dia, conheça histórias inspiradoras e fique por dentro 
                de todas as novidades do Instituto Impactus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Facebook */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins group-hover:text-blue-600 transition-colors">
                    Facebook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    Acompanhe nossas atividades e eventos em tempo real.
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a href="https://facebook.com/institutoimpactus" target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                    <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.876-1.366-2.027-1.366-3.324s.49-2.448 1.297-3.323c.876-.876 2.027-1.366 3.324-1.366s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins group-hover:text-pink-600 transition-colors">
                    Instagram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    Fotos e stories dos nossos projetos e beneficiários.
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-pink-600 text-pink-600 hover:bg-pink-50"
                    asChild
                  >
                    <a href="https://instagram.com/institutoimpactus" target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins group-hover:text-blue-700 transition-colors">
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    Conecte-se conosco profissionalmente e veja oportunidades.
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                    asChild
                  >
                    <a href="https://linkedin.com/company/institutoimpactus" target="_blank" rel="noopener noreferrer">
                      Conectar
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* YouTube */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins group-hover:text-red-600 transition-colors">
                    YouTube
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    Vídeos dos nossos projetos e depoimentos inspiradores.
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    asChild
                  >
                    <a href="https://youtube.com/@institutoimpactus" target="_blank" rel="noopener noreferrer">
                      Inscrever-se
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre o Instituto Impactus.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* FAQ Item 1 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins">
                    Como posso me voluntariar no Instituto Impactus?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Oferecemos diversas oportunidades de voluntariado em nossas três áreas de atuação. 
                    Entre em contato conosco através do formulário acima ou pelo e-mail 
                    contato@institutoimpactus.org.br para conhecer as vagas disponíveis.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* FAQ Item 2 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins">
                    Minha empresa pode se tornar parceira do Instituto?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Sim! Temos diferentes modalidades de parceria corporativa. Acesse nossa página 
                    "Seja Parceiro" ou entre em contato pelo e-mail parcerias@institutoimpactus.org.br 
                    para conhecer as opções disponíveis.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* FAQ Item 3 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins">
                    Como posso acompanhar o uso das minhas doações?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Publicamos relatórios trimestrais e anuais com detalhes sobre a aplicação dos recursos. 
                    Doadores recorrentes recebem relatórios personalizados. Todos os documentos estão 
                    disponíveis na nossa página de Transparência.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* FAQ Item 4 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins">
                    Vocês atendem outras cidades além de São Paulo?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Atualmente nossos projetos estão concentrados na região metropolitana de São Paulo, 
                    mas temos planos de expansão para outras cidades. Acompanhe nossas redes sociais 
                    para ficar por dentro das novidades.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-6">
              Pronto para Fazer a Diferença?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Seja através de uma doação, parceria ou voluntariado, sua participação 
              é fundamental para transformarmos mais vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold" asChild>
                <a href="/doe-agora">Fazer Doação</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
                asChild
              >
                <a href="/seja-parceiro">Ser Parceiro</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
