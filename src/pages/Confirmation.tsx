
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppointmentConfirmation } from "@/components/appointment-confirmation";

const Confirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <AppointmentConfirmation />
      </main>
      <Footer />
    </div>
  );
};

export default Confirmation;
