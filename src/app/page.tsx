import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />

        {/* Seção Sobre o Instituto */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-4">
                Sobre o Instituto Impactus
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fundado com o propósito de criar impacto social positivo, trabalhamos 
                incansavelmente para desenvolver programas que transformem realidades 
                e construam um futuro mais justo e próspero.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Missão */}
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Promover o desenvolvimento humano através de programas educacionais 
                    inovadores que capacitem indivíduos e fortaleçam comunidades.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">Nossa Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Ser referência nacional em transformação social, criando um Brasil 
                    mais educado, saudável e próspero para as futuras gerações.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Transparência, compromisso social, inovação educacional e 
                    respeito à dignidade humana guiam todas as nossas ações.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-4">
                Nossas Áreas de Atuação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trabalhamos em três pilares fundamentais para o desenvolvimento humano e social.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Educação */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45bb93cd-d92a-47c1-bede-84c514d4796e.png"
                    alt="Sala de aula com crianças aprendendo matemática"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold font-poppins mb-2">Educação</h3>
                    <p className="text-sm opacity-90">Programas de reforço escolar e alfabetização</p>
                  </div>
                </div>
              </div>

              {/* Saúde */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8352c91-d578-4fb2-a331-81fbd132915a.png"
                    alt="Profissionais de saúde atendendo comunidade"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold font-poppins mb-2">Saúde</h3>
                    <p className="text-sm opacity-90">Campanhas de prevenção e educação em saúde</p>
                  </div>
                </div>
              </div>

              {/* Juventude */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6017e944-6eed-42d5-a70a-802f00c1f979.png"
                    alt="Jovens em atividade de desenvolvimento pessoal"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold font-poppins mb-2">Juventude</h3>
                    <p className="text-sm opacity-90">Capacitação profissional e liderança jovem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/o-que-fazemos">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                  Conheça Todos os Nossos Projetos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-6">
              Faça Parte da Transformação
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Sua contribuição pode mudar vidas. Junte-se a nós nessa missão de 
              construir um Brasil melhor através da educação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doe-agora">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Fazer Doação
                </Button>
              </Link>
              <Link href="/seja-parceiro">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
                >
                  Tornar-se Parceiro
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
