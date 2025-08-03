import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Transparência
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A transparência é um dos nossos valores fundamentais. Aqui você encontra 
                todas as informações sobre nossa gestão, documentos legais e prestação de contas.
              </p>
            </div>
          </div>
        </section>

        {/* Documentos Legais */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Documentos Legais
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acesse nossos documentos oficiais e certidões que comprovam 
                nossa regularidade e idoneidade como organização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Estatuto */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Estatuto Social</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">PDF - 2.1 MB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Documento que estabelece os objetivos, estrutura e 
                    funcionamento do Instituto Impactus.
                  </CardDescription>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Estatuto
                  </Button>
                </CardContent>
              </Card>

              {/* CNPJ */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Cartão CNPJ</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">PDF - 850 KB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Comprovante de inscrição no Cadastro Nacional 
                    de Pessoas Jurídicas da Receita Federal.
                  </CardDescription>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar CNPJ
                  </Button>
                </CardContent>
              </Card>

              {/* Utilidade Pública */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Utilidade Pública</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">PDF - 1.2 MB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Certificado de Entidade Beneficente de Assistência 
                    Social (CEBAS) e título de utilidade pública.
                  </CardDescription>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Certificado
                  </Button>
                </CardContent>
              </Card>

              {/* Ata de Fundação */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Ata de Fundação</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">PDF - 950 KB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Documento que registra oficialmente a criação 
                    do Instituto Impactus em 2020.
                  </CardDescription>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Ata
                  </Button>
                </CardContent>
              </Card>

              {/* Certidões Negativas */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Certidões Negativas</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">ZIP - 3.2 MB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Conjunto de certidões negativas de débitos 
                    federais, estaduais e municipais.
                  </CardDescription>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Certidões
                  </Button>
                </CardContent>
              </Card>

              {/* Regimento Interno */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Regimento Interno</CardTitle>
                  <Badge className="w-fit mx-auto" variant="outline">PDF - 1.8 MB</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Normas internas que regulamentam o funcionamento 
                    e as atividades do Instituto.
                  </CardDescription>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Regimento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Relatórios Anuais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Relatórios Anuais
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acompanhe nossos resultados, impacto social e prestação de contas 
                através dos relatórios anuais de atividades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Relatório 2023 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500 text-white">Mais Recente</Badge>
                    <span className="text-2xl font-bold text-gray-900">2023</span>
                  </div>
                  <CardTitle className="text-xl font-poppins">Relatório Anual 2023</CardTitle>
                  <CardDescription>
                    Nosso ano de maior crescimento e impacto social, 
                    com expansão para 3 comunidades.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Beneficiários:</span>
                      <span className="font-semibold">350 pessoas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Projetos:</span>
                      <span className="font-semibold">8 projetos</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investimento:</span>
                      <span className="font-semibold">R$ 280.000</span>
                    </div>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver Relatório
                  </Button>
                </CardContent>
              </Card>

              {/* Relatório 2022 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">Disponível</Badge>
                    <span className="text-2xl font-bold text-gray-900">2022</span>
                  </div>
                  <CardTitle className="text-xl font-poppins">Relatório Anual 2022</CardTitle>
                  <CardDescription>
                    Ano de consolidação dos nossos programas 
                    e início da área de juventude.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Beneficiários:</span>
                      <span className="font-semibold">220 pessoas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Projetos:</span>
                      <span className="font-semibold">5 projetos</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investimento:</span>
                      <span className="font-semibold">R$ 180.000</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Relatório 2021 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">Disponível</Badge>
                    <span className="text-2xl font-bold text-gray-900">2021</span>
                  </div>
                  <CardTitle className="text-xl font-poppins">Relatório Anual 2021</CardTitle>
                  <CardDescription>
                    Nosso primeiro ano completo de atividades 
                    com foco em educação e saúde.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Beneficiários:</span>
                      <span className="font-semibold">150 pessoas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Projetos:</span>
                      <span className="font-semibold">3 projetos</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investimento:</span>
                      <span className="font-semibold">R$ 95.000</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prestação de Contas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Prestação de Contas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informações detalhadas sobre como utilizamos os recursos recebidos 
                e o impacto gerado com cada investimento.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Informações de Contato */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-6">
                      Contato para Prestação de Contas
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-amber-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Maria Silva</p>
                          <p className="text-gray-600">Diretora Executiva</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:transparencia@institutoimpactus.org.br" className="text-amber-600 hover:text-amber-700">
                          transparencia@institutoimpactus.org.br
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+5511999999999" className="text-gray-700 hover:text-amber-600">
                          (11) 99999-9999
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Horários de Atendimento */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-6">
                      Horários de Atendimento
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Segunda a Sexta:</span>
                        <span className="font-semibold">9h às 17h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábado:</span>
                        <span className="font-semibold">9h às 12h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domingo:</span>
                        <span className="font-semibold">Fechado</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-gray-600 text-sm">
                        Para solicitações de informações específicas sobre prestação de contas, 
                        envie um e-mail detalhando sua solicitação. Respondemos em até 5 dias úteis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compromissos de Transparência */}
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-6">
                    Nossos Compromissos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transparência Total</h4>
                      <p className="text-gray-600 text-sm text-center">
                        Todos os documentos e relatórios disponíveis publicamente
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Uso Eficiente</h4>
                      <p className="text-gray-600 text-sm text-center">
                        Máximo de 85% dos recursos aplicados diretamente nos projetos
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Impacto Mensurável</h4>
                      <p className="text-gray-600 text-sm text-center">
                        Relatórios trimestrais com métricas de impacto social
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-6">
              Tem Alguma Dúvida sobre Nossa Transparência?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Estamos sempre disponíveis para esclarecer qualquer questão sobre 
              nossa gestão, projetos e uso dos recursos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Entre em Contato
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
                asChild
              >
                <a href="mailto:transparencia@institutoimpactus.org.br">
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
