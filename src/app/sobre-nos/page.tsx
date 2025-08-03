import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SobreNosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Sobre o Instituto Impactus
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Conheça nossa história, missão e as pessoas que dedicam suas vidas 
                para transformar o Brasil através da educação, saúde e desenvolvimento da juventude.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Missão */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-amber-600">Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed text-base">
                    Promover o desenvolvimento humano integral através de programas educacionais 
                    inovadores, iniciativas de saúde preventiva e capacitação da juventude, 
                    contribuindo para a construção de uma sociedade mais justa e próspera.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-orange-600">Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed text-base">
                    Ser reconhecido como uma organização de referência nacional em transformação 
                    social, criando impacto positivo duradouro na vida de milhares de brasileiros 
                    e inspirando outras iniciativas similares.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-amber-700">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Transparência total
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Compromisso social
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Inovação educacional
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Respeito à dignidade humana
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Sustentabilidade
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* História do Instituto */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Nossa História
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma jornada de dedicação e transformação social que começou com um sonho 
                e se tornou realidade através do trabalho coletivo.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="text-xl leading-relaxed mb-6">
                    O Instituto Impactus nasceu em 2020 da união de educadores, profissionais 
                    da saúde e líderes comunitários que compartilhavam uma visão comum: 
                    transformar a realidade social brasileira através de ações concretas 
                    e sustentáveis.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Inspirados pelos desafios enfrentados durante a pandemia, nossos fundadores 
                    perceberam a urgente necessidade de criar programas que pudessem atender 
                    às demandas educacionais, de saúde e desenvolvimento da juventude em 
                    comunidades vulneráveis.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Começamos com projetos piloto em São Paulo, focando inicialmente em 
                    reforço escolar e orientação em saúde básica. O sucesso dessas primeiras 
                    iniciativas nos motivou a expandir nosso escopo de atuação e desenvolver 
                    programas mais abrangentes.
                  </p>

                  <p className="leading-relaxed">
                    Hoje, mesmo sendo uma organização jovem, já impactamos centenas de vidas 
                    e estabelecemos parcerias importantes com outras instituições, empresas 
                    e órgãos públicos. Nosso crescimento é sustentado pela transparência, 
                    eficiência e, principalmente, pelo impacto real que geramos nas comunidades 
                    que atendemos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe Fundadora */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Equipe Fundadora
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça as pessoas que dedicaram suas carreiras e experiências 
                para criar e liderar o Instituto Impactus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fundador 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32f05f57-3af0-4d98-990c-39eac776d42e.png"
                    alt="Maria Silva - Diretora Executiva"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl font-poppins">Maria Silva</CardTitle>
                  <CardDescription className="text-amber-600 font-semibold">
                    Diretora Executiva
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Pedagoga com 15 anos de experiência em educação social. 
                    Mestre em Políticas Públicas pela USP e especialista em 
                    gestão de organizações do terceiro setor.
                  </p>
                </CardContent>
              </Card>

              {/* Fundador 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e254b6ff-87da-4f80-a1b6-5fb63891e741.png"
                    alt="Dr. João Santos - Coordenador de Saúde"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl font-poppins">Dr. João Santos</CardTitle>
                  <CardDescription className="text-amber-600 font-semibold">
                    Coordenador de Saúde
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Médico sanitarista com ampla experiência em saúde pública 
                    e medicina preventiva. Doutor em Saúde Coletiva e defensor 
                    da medicina comunitária.
                  </p>
                </CardContent>
              </Card>

              {/* Fundador 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/baddbca0-596c-4d40-9ba0-cee24fdd7d4d.png"
                    alt="Ana Costa - Coordenadora de Juventude"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl font-poppins">Ana Costa</CardTitle>
                  <CardDescription className="text-amber-600 font-semibold">
                    Coordenadora de Juventude
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Psicóloga social especializada em desenvolvimento juvenil. 
                    Trabalha há 10 anos com programas de capacitação profissional 
                    e liderança jovem em comunidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Linha do Tempo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Marcos Importantes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma linha do tempo dos principais momentos e conquistas do Instituto Impactus.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Linha vertical */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>

                {/* Marco 1 */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2020
                  </div>
                  <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fundação do Instituto</h3>
                    <p className="text-gray-600">
                      Criação oficial do Instituto Impactus com foco inicial em educação 
                      e saúde comunitária durante a pandemia.
                    </p>
                  </div>
                </div>

                {/* Marco 2 */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2021
                  </div>
                  <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Primeiros Projetos</h3>
                    <p className="text-gray-600">
                      Lançamento dos programas de reforço escolar e campanhas de vacinação, 
                      atendendo 150 famílias em São Paulo.
                    </p>
                  </div>
                </div>

                {/* Marco 3 */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2022
                  </div>
                  <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansão para Juventude</h3>
                    <p className="text-gray-600">
                      Criação do programa de capacitação profissional para jovens, 
                      estabelecendo parcerias com empresas locais.
                    </p>
                  </div>
                </div>

                {/* Marco 4 */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2023
                  </div>
                  <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reconhecimento e Crescimento</h3>
                    <p className="text-gray-600">
                      Certificação como Organização da Sociedade Civil de Interesse Público (OSCIP) 
                      e expansão para 3 comunidades.
                    </p>
                  </div>
                </div>

                {/* Marco 5 */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2024
                  </div>
                  <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Consolidação e Futuro</h3>
                    <p className="text-gray-600">
                      Mais de 500 vidas impactadas, 15 projetos ativos e planos de 
                      expansão para outras cidades do estado de São Paulo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
