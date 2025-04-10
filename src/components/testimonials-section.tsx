
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      comment: "Excelente atendimento! Fiz a revisão do meu carro e o serviço foi muito bem feito. Recomendo.",
      rating: 5,
      date: "15/03/2024"
    },
    {
      name: "Maria Oliveira",
      comment: "Serviço de qualidade e atendimento super profissional. Preços justos e prazo de entrega conforme combinado.",
      rating: 5,
      date: "10/02/2024"
    },
    {
      name: "Pedro Santos",
      comment: "A melhor oficina que já fui! Conseguiram identificar um problema que outras oficinas não encontraram. Resolveram rapidamente.",
      rating: 5,
      date: "23/01/2024"
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa prioridade. Confira alguns depoimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
