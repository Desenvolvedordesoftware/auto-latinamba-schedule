
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Menu, Wrench, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Auto Latina MBA</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            <span>Início</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={() => navigate("/servicos")}
          >
            <Wrench size={18} />
            <span>Serviços</span>
          </Button>
          
          <Button 
            variant="primary" 
            className="flex items-center gap-2 bg-primary text-white"
            onClick={() => navigate("/agendar")}
          >
            <Calendar size={18} />
            <span>Agendar Serviço</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden p-2" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full animate-slide-in">
          <nav className="flex flex-col space-y-4 p-4">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 justify-start"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              <Home size={18} />
              <span>Início</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 justify-start"
              onClick={() => {
                navigate("/servicos");
                setIsMenuOpen(false);
              }}
            >
              <Wrench size={18} />
              <span>Serviços</span>
            </Button>
            
            <Button 
              variant="default" 
              className="flex items-center gap-2 bg-primary text-white justify-start"
              onClick={() => {
                navigate("/agendar");
                setIsMenuOpen(false);
              }}
            >
              <Calendar size={18} />
              <span>Agendar Serviço</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
