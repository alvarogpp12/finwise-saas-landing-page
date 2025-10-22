import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* Ocultamos logos por ahora si no corresponden */}
      {/* <Logos /> */}
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Nuestro Proceso de Trabajo"
          description="Producción Técnica, Diseño Conceptual, Postproducción y Cobertura mediática."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Casos de Éxito Destacados"
          description="Proyectos y colaboraciones que amplifican marcas y resultados."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />

        {/* Ancla de destino para CTA */}
        <div id="contacto" className="sr-only" />
      </Container>
    </>
  );
};

export default HomePage;
