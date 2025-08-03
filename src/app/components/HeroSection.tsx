import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight">
                Transformando
                <span className="text-amber-600 block">Vidas</span>
                através da Educação
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                O Instituto Impactus é uma organização sem fins lucrativos dedicada ao 
                desenvolvimento de programas educacionais nas áreas de saúde, educação 
                e juventude no Brasil.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 font-poppins">500+</div>
                <div className="text-sm text-gray-600">Vidas Impactadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 font-poppins">15+</div>
                <div className="text-sm text-gray-600">Projetos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 font-poppins">3</div>
                <div className="text-sm text-gray-600">Áreas de Atuação</div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/doe-agora">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold">
                  Doe Agora
                </Button>
              </Link>
              <Link href="/seja-parceiro">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold"
                >
                  Seja Parceiro
                </Button>
              </Link>
              <Link href="/sobre-nos">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-gray-700 hover:text-amber-600 px-8 py-3 text-lg font-semibold"
                >
                  Saiba Mais →
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e4572f22-73b9-47ad-8a6c-9eb17032d9f0.png"
                alt="Crianças estudando em sala de aula moderna com professor dedicado"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-40 z-0"></div>
          </div>
        </div>
      </div>

      {/* Seção de Destaque do Projeto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-4">
              Projeto em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossa iniciativa mais recente que está transformando a vida de jovens em comunidades carentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c493194-60b9-4bcf-b6a3-230a0d9522d2.png"
                alt="Jovens participando de oficina de capacitação profissional"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 font-poppins">
                Capacitação Profissional para Jovens
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nosso programa piloto oferece capacitação profissional em tecnologia e 
                empreendedorismo para jovens de 16 a 24 anos em situação de vulnerabilidade 
                social. Já formamos 50 jovens em nossa primeira turma.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                  50 jovens formados
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  85% empregabilidade
                </div>
              </div>
              <Link href="/o-que-fazemos">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 mt-4">
                  Ver Todos os Projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
