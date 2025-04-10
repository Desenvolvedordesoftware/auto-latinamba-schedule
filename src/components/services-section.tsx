
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Droplet, Settings, Wrench, RotateCw, Gauge, Battery } from "lucide-react";

export function ServicesSection() {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Troca de Óleo",
      description: "Troca de óleo e filtros com produtos de alta qualidade",
      icon: Droplet
    },
    {
      title: "Revisão Completa",
      description: "Revisão detalhada de todos os componentes do seu veículo",
      icon: Settings
    },
    {
      title: "Reparo de Motor",
      description: "Diagnóstico e reparo de problemas no motor",
      icon: Wrench
    },
    {
      title: "Manutenção Preventiva",
      description: "Serviços para prevenir problemas futuros e aumentar a vida útil do veículo",
      icon: RotateCw
    },
    {
      title: "Sistema Elétrico",
      description: "Reparos e manutenção de todo o sistema elétrico",
      icon: Battery
    },
    {
      title: "Alinhamento e Balanceamento",
      description: "Alinhamento e balanceamento para maior segurança e menos desgaste de pneus",
      icon: Gauge
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços automotivos para manter seu veículo em perfeitas condições.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/servicos")}
            className="bg-primary hover:bg-primary/90"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
