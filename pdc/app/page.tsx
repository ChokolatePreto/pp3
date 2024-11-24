import { Navbar } from "./compenents/Navbar";
import { Hero } from "./compenents/Hero";
import { Footer } from "./compenents/Footer";
import Especialidade from "./compenents/Especialidade";
import Contactos from "./compenents/Contactos";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Especialidade />
    <Contactos />
    <Footer />
    </>
  );
}
