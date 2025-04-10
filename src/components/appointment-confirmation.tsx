
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Car, CheckCircle, Clock, User } from "lucide-react";

interface Appointment {
  name: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  service: string;
  date: string;
  time: string;
  details?: string;
}

export function AppointmentConfirmation() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  
  useEffect(() => {
    // Get appointment details from sessionStorage
    const savedAppointment = sessionStorage.getItem("appointment");
    
    if (savedAppointment) {
      setAppointment(JSON.parse(savedAppointment));
    } else {
      // If no appointment was found, redirect to schedule page
      navigate("/agendar");
    }
  }, [navigate]);
  
  if (!appointment) {
    return null;
  }
  
  const appointmentDate = new Date(appointment.date);
  
  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="bg-primary text-white text-center rounded-t-lg">
          <CheckCircle className="w-16 h-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Agendamento Confirmado!</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
                <User className="h-5 w-5" /> Dados Pessoais
              </h3>
              <div className="space-y-2">
                <p><span className="font-medium">Nome:</span> {appointment.name}</p>
                <p><span className="font-medium">E-mail:</span> {appointment.email}</p>
                <p><span className="font-medium">Telefone:</span> {appointment.phone}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
                <Car className="h-5 w-5" /> Veículo
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Veículo:</span> {appointment.vehicleMake} {appointment.vehicleModel} ({appointment.vehicleYear})
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5" /> Detalhes do Agendamento
            </h3>
            <div className="space-y-2">
              <p><span className="font-medium">Serviço:</span> {appointment.service}</p>
              <div className="flex items-center gap-6">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">Data:</span> {format(appointmentDate, "PPP", { locale: ptBR })}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">Horário:</span> {appointment.time}
                </p>
              </div>
              {appointment.details && (
                <div className="mt-4">
                  <p className="font-medium">Observações:</p>
                  <p className="text-gray-600">{appointment.details}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <p className="text-sm text-gray-600">
              Você receberá um e-mail de confirmação com os detalhes do seu agendamento. 
              Em caso de dúvidas, entre em contato conosco pelo telefone (71) 99999-9999.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => navigate("/")}
              className="bg-primary hover:bg-primary/90"
            >
              Voltar para o Início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
