import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Como a Educação Transforma Comunidades: O Caso da Vila São José",
      excerpt: "Conheça a história inspiradora de como nosso programa de reforço escolar mudou a realidade educacional de uma comunidade inteira em São Paulo.",
      date: "15 de Janeiro, 2024",
      category: "Educação",
      readTime: "5 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6a02db4-0001-431a-9994-f5acf9231af1.png",
      featured: true
    },
    {
      id: 2,
      title: "Prevenção em Saúde: Campanhas que Salvam Vidas",
      excerpt: "Descubra como nossas campanhas de vacinação e educação em saúde preventiva têm impactado positivamente a vida de centenas de famílias.",
      date: "10 de Janeiro, 2024",
      category: "Saúde",
      readTime: "4 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb6c64e8-1b38-4dd7-9e97-71ba94421aeb.png",
      featured: false
    },
    {
      id: 3,
      title: "Jovens Empreendedores: Histórias de Sucesso",
      excerpt: "Conheça três jovens que participaram do nosso programa de capacitação profissional e hoje são exemplos de superação e empreendedorismo.",
      date: "8 de Janeiro, 2024",
      category: "Juventude",
      readTime: "6 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f03dd49f-dd16-4495-83cb-b9b1e751b1c8.png",
      featured: false
    },
    {
      id: 4,
      title: "Transparência em Ação: Relatório de Impacto 2023",
      excerpt: "Apresentamos os resultados detalhados de todos os nossos projetos em 2023, com dados, métricas e histórias reais de transformação.",
      date: "5 de Janeiro, 2024",
      category: "Transparência",
      readTime: "8 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c6ab979-65c0-42b9-886d-934c207fcf9e.png",
      featured: false
    },
    {
      id: 5,
      title: "Parceria com Empresas: Multiplicando o Impacto Social",
      excerpt: "Saiba como as parcerias corporativas têm sido fundamentais para ampliar nosso alcance e criar soluções inovadoras para problemas sociais.",
      date: "2 de Janeiro, 2024",
      category: "Parcerias",
      readTime: "5 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbe5d9a8-f042-41a8-bdd3-8036dd2ecace.png",
      featured: false
    },
    {
      id: 6,
      title: "Voluntariado: Como Você Pode Fazer a Diferença",
      excerpt: "Descubra as diferentes formas de se voluntariar no Instituto Impactus e como sua contribuição pode transformar vidas na sua comunidade.",
      date: "28 de Dezembro, 2023",
      category: "Voluntariado",
      readTime: "4 min",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8939d214-33bb-4417-851c-884a43e45d18.png",
      featured: false
    }
  ]

  const categories = ["Todos", "Educação", "Saúde", "Juventude", "Transparência", "Parcerias", "Voluntariado"]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Blog do Instituto Impactus
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Acompanhe nossas atividades, conheça histórias inspiradoras e fique por dentro 
                de tudo que acontece no mundo da transformação social.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros de Categoria */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={category === "Todos" 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "border-amber-600 text-amber-600 hover:bg-amber-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Post em Destaque */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                Post em Destaque
              </h2>
              <div className="w-20 h-1 bg-amber-600 rounded"></div>
            </div>

            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600 text-white">Destaque</Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-amber-600 text-amber-600">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">• {post.readTime} de leitura</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white w-fit">
                      Ler Artigo Completo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Posts Recentes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-2">
                Posts Recentes
              </h2>
              <div className="w-20 h-1 bg-amber-600 rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className="bg-white/90 backdrop-blur-sm border-amber-600 text-amber-600"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} de leitura</span>
                    </div>
                    <CardTitle className="text-lg font-poppins leading-tight group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="border-amber-600 text-amber-600 hover:bg-amber-50 w-full"
                    >
                      Ler Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-6">
                Receba Nossas Novidades
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Inscreva-se em nossa newsletter e seja o primeiro a saber sobre 
                novos projetos, eventos e histórias de transformação.
              </p>
              
              <Card className="border-0 shadow-lg p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 whitespace-nowrap">
                    Inscrever-se
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Enviamos no máximo 2 e-mails por mês. Você pode cancelar a qualquer momento.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Categorias Populares */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-6">
                Explore por Categoria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encontre conteúdos específicos sobre os temas que mais interessam você.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Educação */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins group-hover:text-blue-600 transition-colors">
                    Educação
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">8 artigos</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Histórias e insights sobre nossos programas educacionais 
                    e seu impacto nas comunidades.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Saúde */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins group-hover:text-green-600 transition-colors">
                    Saúde
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">6 artigos</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Campanhas de prevenção, educação em saúde e 
                    cuidados com a comunidade.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Juventude */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins group-hover:text-purple-600 transition-colors">
                    Juventude
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">5 artigos</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Capacitação profissional, empreendedorismo e 
                    desenvolvimento de liderança jovem.
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
              Quer Compartilhar sua História?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Se você foi impactado por nossos projetos ou tem uma história inspiradora 
              para contar, entre em contato conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Contar Minha História
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
                asChild
              >
                <a href="mailto:blog@institutoimpactus.org.br">
                  Enviar Sugestão
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
