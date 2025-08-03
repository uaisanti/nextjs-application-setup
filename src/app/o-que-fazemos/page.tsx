import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function OQueFazemosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                O que Fazemos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Conheça nossos programas e projetos que estão transformando vidas nas 
                áreas de educação, saúde e desenvolvimento da juventude em todo o Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Nossas Áreas de Atuação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trabalhamos em três pilares fundamentais para promover o desenvolvimento 
                humano integral e a transformação social.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Educação */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-amber-600">Educação</CardTitle>
                  <CardDescription className="text-gray-600">
                    Programas educacionais que fortalecem o aprendizado e desenvolvem 
                    habilidades essenciais para o futuro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Reforço escolar
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Alfabetização de adultos
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Educação digital
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Preparação para ENEM
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Saúde */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-orange-600">Saúde</CardTitle>
                  <CardDescription className="text-gray-600">
                    Iniciativas de promoção da saúde e prevenção de doenças 
                    para comunidades vulneráveis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Campanhas de vacinação
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Educação nutricional
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Saúde mental
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Prevenção de doenças
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Juventude */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-amber-700">Juventude</CardTitle>
                  <CardDescription className="text-gray-600">
                    Programas de capacitação e desenvolvimento de liderança 
                    para jovens em situação de vulnerabilidade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      Capacitação profissional
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      Empreendedorismo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      Liderança jovem
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      Orientação profissional
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projetos Atuais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Projetos em Andamento
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça os projetos que estão atualmente em execução e fazendo 
                a diferença na vida das comunidades que atendemos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Projeto 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a9772eb-2018-48af-8ea7-0222a43f3c5d.png"
                    alt="Jovens em curso de programação e tecnologia"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">Em Andamento</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">Capacitação Digital para Jovens</CardTitle>
                  <CardDescription>
                    Programa de 6 meses que ensina programação, design e empreendedorismo digital 
                    para jovens de 16 a 24 anos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Participantes:</span>
                      <span className="font-semibold">50 jovens</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Taxa de conclusão:</span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Empregabilidade:</span>
                      <span className="font-semibold text-green-600">78%</span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">75% concluído</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projeto 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6233e048-21b1-438a-b9ba-e75d379ffd76.png"
                    alt="Crianças em atividade de reforço escolar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white">Permanente</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">Reforço Escolar Comunitário</CardTitle>
                  <CardDescription>
                    Apoio pedagógico para crianças e adolescentes com dificuldades 
                    de aprendizagem em matemática e português.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Estudantes atendidos:</span>
                      <span className="font-semibold">120 crianças</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Melhoria nas notas:</span>
                      <span className="font-semibold text-green-600">+40%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Frequência escolar:</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Projeto permanente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projeto 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52c28a31-292d-4667-9ce7-57ba1cffe632.png"
                    alt="Campanha de vacinação em comunidade"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">Sazonal</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">Saúde na Comunidade</CardTitle>
                  <CardDescription>
                    Campanhas de vacinação, orientação nutricional e prevenção de doenças 
                    em parceria com postos de saúde locais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Famílias atendidas:</span>
                      <span className="font-semibold">200 famílias</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Campanhas realizadas:</span>
                      <span className="font-semibold">8 campanhas</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Taxa de adesão:</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Próxima campanha em março</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projeto 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99946208-4b5e-483f-819c-b5625d257fd0.png"
                    alt="Adultos em aula de alfabetização"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 text-white">Piloto</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">Alfabetização de Adultos</CardTitle>
                  <CardDescription>
                    Programa de alfabetização para adultos que não tiveram oportunidade 
                    de estudar na idade adequada.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Alunos matriculados:</span>
                      <span className="font-semibold">30 adultos</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Taxa de permanência:</span>
                      <span className="font-semibold text-green-600">88%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Alfabetizados:</span>
                      <span className="font-semibold text-green-600">25 pessoas</span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">45% do programa concluído</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projetos Futuros */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Projetos Futuros
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça nossas próximas iniciativas que estão em planejamento 
                e desenvolvimento para ampliar nosso impacto social.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Projeto Futuro 1 */}
              <Card className="border-2 border-dashed border-amber-300 hover:border-amber-500 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Centro de Inovação Social</CardTitle>
                  <Badge className="w-fit mb-2" variant="outline">Em Planejamento</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Espaço dedicado ao desenvolvimento de soluções inovadoras 
                    para problemas sociais locais.
                  </CardDescription>
                  <p className="text-sm text-gray-500">Previsão: 2025</p>
                </CardContent>
              </Card>

              {/* Projeto Futuro 2 */}
              <Card className="border-2 border-dashed border-orange-300 hover:border-orange-500 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Moradia Estudantil</CardTitle>
                  <Badge className="w-fit mb-2" variant="outline">Captação de Recursos</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Casa de apoio para jovens universitários de baixa renda 
                    com mentoria acadêmica e profissional.
                  </CardDescription>
                  <p className="text-sm text-gray-500">Previsão: 2025</p>
                </CardContent>
              </Card>

              {/* Projeto Futuro 3 */}
              <Card className="border-2 border-dashed border-green-300 hover:border-green-500 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-poppins">Telemedicina Comunitária</CardTitle>
                  <Badge className="w-fit mb-2" variant="outline">Estudo de Viabilidade</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Plataforma de telemedicina para atendimento médico 
                    básico em comunidades remotas.
                  </CardDescription>
                  <p className="text-sm text-gray-500">Previsão: 2026</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-6">
              Quer Fazer Parte dos Nossos Projetos?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Seja como voluntário, parceiro ou doador, sua participação é fundamental 
              para ampliarmos nosso impacto e transformarmos mais vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/seja-parceiro">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Seja Parceiro
                </Button>
              </Link>
              <Link href="/contato">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
                >
                  Seja Voluntário
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
