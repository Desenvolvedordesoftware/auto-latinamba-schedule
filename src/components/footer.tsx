
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Auto Latina MBA</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em reparos e manutenção de veículos com foco em qualidade, agilidade e satisfação do cliente.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda - Sexta: 8:00 - 18:00</li>
              <li>Sábado: 8:00 - 12:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Salvador, Bahia, Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>(71) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contato@autolatinamba.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Auto Latina MBA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
