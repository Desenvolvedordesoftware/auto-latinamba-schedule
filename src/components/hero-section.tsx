
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

export function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-primary py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Auto Latina MBA
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Serviços automotivos de qualidade e confiança em Salvador
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => navigate("/agendar")}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Serviço
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => navigate("/servicos")}
          >
            Ver Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
