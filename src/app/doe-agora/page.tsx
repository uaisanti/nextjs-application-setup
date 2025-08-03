import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function DoeAgoraPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Doe Agora
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sua doação transforma vidas! Contribua para nossos projetos de educação, 
                saúde e desenvolvimento da juventude e faça parte dessa mudança.
              </p>
            </div>
          </div>
        </section>

        {/* Impacto da Doação */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Veja o Impacto da sua Doação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada real doado é investido diretamente em nossos projetos. 
                Veja como sua contribuição faz a diferença:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* R$ 50 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">R$</span>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-green-600">R$ 50</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    <strong>Material escolar completo</strong> para uma criança por 1 mês, 
                    incluindo cadernos, lápis e livros didáticos.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* R$ 100 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">R$</span>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-blue-600">R$ 100</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    <strong>Consulta médica</strong> e medicamentos básicos para uma família, 
                    incluindo exames preventivos.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* R$ 200 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">R$</span>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-amber-600">R$ 200</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    <strong>Curso profissionalizante</strong> para um jovem, incluindo 
                    certificação e orientação para o mercado de trabalho.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* R$ 500 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">R$</span>
                  </div>
                  <CardTitle className="text-2xl font-poppins text-purple-600">R$ 500</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    <strong>Bolsa de estudos integral</strong> para um jovem por 1 mês, 
                    incluindo transporte e alimentação.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formas de Doação */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Como Doar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Escolha a forma de doação que melhor se adequa às suas possibilidades. 
                Todas as opções são seguras e práticas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Doação Única */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                    Doação Única
                  </Badge>
                  <CardTitle className="text-2xl font-poppins">Contribuição Pontual</CardTitle>
                  <CardDescription>
                    Faça uma doação única no valor que desejar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Valores Sugeridos */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Valores Sugeridos
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                        R$ 50
                      </Button>
                      <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                        R$ 100
                      </Button>
                      <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                        R$ 200
                      </Button>
                      <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                        R$ 500
                      </Button>
                    </div>
                  </div>

                  {/* Valor Personalizado */}
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-700">
                      Ou digite um valor personalizado
                    </Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="0,00"
                        className="pl-10"
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                    Doar Agora
                  </Button>
                </CardContent>
              </Card>

              {/* Doação Recorrente */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">
                    Doação Recorrente
                  </Badge>
                  <CardTitle className="text-2xl font-poppins">Contribuição Mensal</CardTitle>
                  <CardDescription>
                    Torne-se um doador recorrente e amplifique seu impacto
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Valor Mensal */}
                  <div>
                    <Label htmlFor="monthly-amount" className="text-sm font-medium text-gray-700">
                      Valor Mensal
                    </Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                      <Input
                        id="monthly-amount"
                        type="number"
                        placeholder="0,00"
                        className="pl-10"
                        min="10"
                        step="0.01"
                      />
                    </div>
                  </div>

                  {/* Frequência */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Frequência
                    </Label>
                    <Select defaultValue="monthly">
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Mensal</SelectItem>
                        <SelectItem value="quarterly">Trimestral</SelectItem>
                        <SelectItem value="biannual">Semestral</SelectItem>
                        <SelectItem value="annual">Anual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Benefícios */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Benefícios do Doador Recorrente:</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Relatórios mensais de impacto</li>
                      <li>• Certificado de doador especial</li>
                      <li>• Convites para eventos exclusivos</li>
                      <li>• Cancelamento a qualquer momento</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold">
                    Tornar-se Doador Recorrente
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Métodos de Pagamento */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Métodos de Pagamento
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos diversas formas seguras e práticas para você fazer sua doação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* PIX */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-green-600">PIX</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Transferência instantânea e gratuita, disponível 24h por dia.
                  </CardDescription>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <p className="font-mono text-gray-800">
                      pix@institutoimpactus.org.br
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4 border-green-600 text-green-600 hover:bg-green-50">
                    Copiar Chave PIX
                  </Button>
                </CardContent>
              </Card>

              {/* Cartão de Crédito */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-blue-600">Cartão de Crédito</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Pagamento seguro com parcelamento em até 12x sem juros.
                  </CardDescription>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                    <div className="w-8 h-5 bg-orange-600 rounded text-white text-xs flex items-center justify-center">ELO</div>
                  </div>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Pagar com Cartão
                  </Button>
                </CardContent>
              </Card>

              {/* Transferência Bancária */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins text-purple-600">Transferência</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    Transferência bancária tradicional via TED ou DOC.
                  </CardDescription>
                  <div className="bg-gray-50 p-3 rounded-lg text-xs text-left">
                    <p><strong>Banco:</strong> Banco do Brasil</p>
                    <p><strong>Agência:</strong> 1234-5</p>
                    <p><strong>Conta:</strong> 12345-6</p>
                    <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
                  </div>
                  <Button variant="outline" className="mt-4 border-purple-600 text-purple-600 hover:bg-purple-50">
                    Ver Dados Completos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins mb-6">
                Transparência Total
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Acompanhe como sua doação é utilizada e o impacto que ela gera.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Aplicação dos Recursos */}
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">85%</CardTitle>
                  <CardDescription className="text-green-600 font-semibold">Projetos Sociais</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Aplicados diretamente em educação, saúde e desenvolvimento da juventude
                  </p>
                </CardContent>
              </Card>

              {/* Administração */}
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">10%</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">Administração</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Custos operacionais, gestão e manutenção da organização
                  </p>
                </CardContent>
              </Card>

              {/* Captação */}
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-poppins">5%</CardTitle>
                  <CardDescription className="text-amber-600 font-semibold">Captação</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Marketing, comunicação e captação de novos doadores
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Todos os nossos relatórios financeiros são públicos e auditados anualmente.
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Ver Relatórios de Transparência
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-poppins mb-6">
              Transforme Vidas Hoje Mesmo
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Cada doação, independente do valor, faz a diferença na vida de alguém. 
              Seja parte dessa transformação!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Fazer Doação Única
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 font-semibold"
              >
                Tornar-se Doador Recorrente
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
