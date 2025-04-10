import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar, ChevronRight, Clock, Shield, ThumbsUp, Wrench, Settings } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Troca de Óleo",
      description: "Troca de óleo e filtros com produtos de alta qualidade para garantir o bom funcionamento do motor.",
      details: [
        "Troca de óleo do motor",
        "Troca do filtro de óleo",
        "Verificação do nível dos fluidos",
        "Inspeção visual de itens de segurança"
      ],
      icon: Wrench
    },
    {
      title: "Revisão Completa",
      description: "Revisão detalhada de todos os componentes do seu veículo para garantir segurança e bom funcionamento.",
      details: [
        "Verificação de 30 itens de segurança",
        "Análise do sistema de freios",
        "Verificação da suspensão",
        "Diagnóstico eletrônico",
        "Verificação do sistema de arrefecimento"
      ],
      icon: Settings
    },
    {
      title: "Reparo de Motor",
      description: "Diagnóstico e reparo de problemas no motor, desde pequenos ajustes até recondicionamento completo.",
      details: [
        "Diagnóstico computadorizado",
        "Reparos em sistemas de injeção",
        "Correção de vazamentos",
        "Substituição de peças danificadas",
        "Retífica de motores"
      ],
      icon: Wrench
    },
    {
      title: "Manutenção Preventiva",
      description: "Serviços para prevenir problemas futuros e aumentar a vida útil do veículo, reduzindo custos a longo prazo.",
      details: [
        "Verificação e substituição de correias",
        "Verificação do sistema de arrefecimento",
        "Inspeção do sistema de freios",
        "Verificação de filtros e fluidos",
        "Diagnóstico eletrônico preventivo"
      ],
      icon: Shield
    },
    {
      title: "Sistema Elétrico",
      description: "Reparos e manutenção de todo o sistema elétrico do veículo, incluindo bateria, alternador e iluminação.",
      details: [
        "Teste e substituição de baterias",
        "Reparos no sistema de partida",
        "Verificação do alternador",
        "Reparos no sistema de iluminação",
        "Diagnóstico de falhas elétricas"
      ],
      icon: Wrench
    },
    {
      title: "Alinhamento e Balanceamento",
      description: "Alinhamento e balanceamento para maior segurança, economia de combustível e menos desgaste de pneus.",
      details: [
        "Alinhamento computadorizado",
        "Balanceamento eletrônico",
        "Verificação da geometria da suspensão",
        "Ajuste da pressão dos pneus",
        "Verificação do desgaste dos pneus"
      ],
      icon: Settings
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Nossos Serviços</h1>
            <p className="max-w-2xl mx-auto">
              Contamos com uma equipe de profissionais qualificados para oferecer os melhores serviços de manutenção e reparo para o seu veículo.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md transition-shadow hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg border">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-4">Por que escolher a Auto Latina MBA?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Agilidade</h3>
                  <p className="text-gray-600 text-center">
                    Serviços realizados com rapidez e eficiência, respeitando seu tempo.
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Qualidade</h3>
                  <p className="text-gray-600 text-center">
                    Utilizamos peças de qualidade e equipamentos de última geração.
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Profissionalismo</h3>
                  <p className="text-gray-600 text-center">
                    Equipe de mecânicos qualificados e em constante atualização.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  onClick={() => navigate("/agendar")}
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Serviço
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
