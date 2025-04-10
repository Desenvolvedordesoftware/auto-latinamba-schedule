
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScheduleForm } from "@/components/schedule-form";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Agendar Serviço</h1>
            <p className="max-w-2xl mx-auto">
              Preencha o formulário abaixo para agendar seu serviço conosco. Escolha a data e horário de sua preferência.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto py-12 px-4">
          <ScheduleForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
