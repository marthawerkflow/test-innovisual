
import React, { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import Triangle from "@/components/Triangle";
import ProcessStep from "@/components/ProcessStep";
import BenefitCard from "@/components/BenefitCard";
import ContactForm from "@/components/ContactForm";
import { ChefHat, Box, Upload, Smartphone, TrendingUp, Star, Rocket, Megaphone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index: React.FC = () => {
  const vanCreatieRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "INNOVISUAL | 3D Visualisatie voor Restaurants";
  }, []);

  return <div className="min-h-screen bg-white">
      <Navigation vanCreatieRef={vanCreatieRef} impactRef={impactRef} contactRef={contactRef} />
      
      <section className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="flex-1 w-full flex items-center justify-center pb-12 pt-8">
          <div className="w-full max-w-5xl mx-auto px-4 flex justify-center items-center">
            <div className="w-full max-w-3xl">
              <Logo />
            </div>
          </div>
        </div>
        <div className="absolute bottom-28">
          <Triangle targetRef={vanCreatieRef} />
        </div>
      </section>

      <section ref={vanCreatieRef} className={`section-container ${isMobile ? 'py-12' : 'py-24'}`} id="van-creatie-tot-beleving">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {isMobile ?
        <>
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-12 animate-fade-in text-center md:text-left">VAN CREATIE TOT BELEVING</h2>
                
                <div className="space-y-8 mt-4">
                  <div className="animate-fade-in" style={{
                animationDelay: "100ms"
              }}>
                    <p className="text-innovisual-muted font-medium mb-4 text-lg italic">INNOVISUAL brengt gerechten tot leven.</p>
                    
                    <p className="text-innovisual-muted mb-6 text-lg">Laat uw gasten gerechten op een geheel nieuwe manier ontdekken.  Een unieke ervaring die verrast en overtuigt</p>
                  </div>
                  
                  <div className="animate-fade-in" style={{
                animationDelay: "200ms"
              }}>
                    <p className="text-innovisual-muted text-lg">
                      Wij verzorgen het volledige proces: van 3D-scans tot de interactieve presentatie. 
                      U hoeft enkel het gerecht klaar te zetten.
                    </p>
                  </div>
                  
                  <div className="animate-fade-in" style={{
                animationDelay: "300ms"
              }}>
                    <div>
                      <img src="/lovable-uploads/771e7fd6-dc43-40bb-a552-1e216f399625.png" alt="INNOVISUAL 3D visualization process" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/51dec0e0-3112-4ca3-a234-8cc031986dd5.png" alt="Pancakes with syrup being poured" className="w-full h-auto object-cover rounded-lg" />
                </div>
              </div>
            </> :
        <>
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-12 animate-fade-in text-center md:text-left">VAN CREATIE TOT BELEVING</h2>
                
                <div className="space-y-8 mt-4">
                  <div className="animate-fade-in" style={{
                animationDelay: "100ms"
              }}>
                    <p className="text-innovisual-muted font-medium mb-4 text-lg italic">INNOVISUAL brengt gerechten tot leven.</p>
                    
                    <p className="text-innovisual-muted mb-6 text-lg">Laat uw gasten gerechten op een geheel nieuwe manier ontdekken.  Een unieke ervaring die verrast en overtuigt</p>
                  </div>
                  
                  <div className="animate-fade-in" style={{
                animationDelay: "200ms"
              }}>
                    <p className="text-innovisual-muted text-lg">
                      Wij verzorgen het volledige proces: van 3D-scans tot de interactieve presentatie. 
                      U hoeft enkel het gerecht klaar te zetten.
                    </p>
                  </div>
                  
                  <div className="animate-fade-in" style={{
                animationDelay: "300ms"
              }}>
                    <div>
                      <img src="/lovable-uploads/771e7fd6-dc43-40bb-a552-1e216f399625.png" alt="INNOVISUAL 3D visualization process" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in order-first lg:order-last" style={{
            animationDelay: "200ms"
          }}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/51dec0e0-3112-4ca3-a234-8cc031986dd5.png" alt="Pancakes with syrup being poured" className="w-full h-auto object-cover rounded-lg" />
                </div>
              </div>
            </>}
        </div>
      </section>
      
      <section ref={impactRef} className={`section-container ${isMobile ? 'py-12' : 'py-24'}`} id="impact-door-innovatie">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {isMobile ?
        <>
              <div className="flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-8 animate-fade-in md:text-3xl">IMPACT DOOR INNOVATIE</h2>
                  
                  <p className="text-lg text-innovisual-muted font-medium mb-4 animate-fade-in italic" style={{
                animationDelay: "100ms"
              }}>INNOVISUAL zorgt voor meerwaarde.</p>
                  
                  <p className="text-lg text-innovisual-muted animate-fade-in" style={{
                animationDelay: "100ms"
              }}>De klantbeleving staat centraal en wordt op een nieuwe manier versterkt. De implementatie van 3D-modellen biedt meerdere voordelen die effect hebben.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BenefitCard icon={<TrendingUp />} title="Resultaat" description="Een aantrekkelijke presentatie stimuleert het bestelgedrag en verhoogt de gemiddelde besteding." animationDelay={100} />
                  
                  <BenefitCard icon={<Star />} title="Wow-effect" description="De interactieve 3D-weergave transformeert dineren in een bijzondere ervaring en laat een blijvende indruk achter." animationDelay={200} />
                  
                  <BenefitCard icon={<Rocket />} title="Innovatie" description="Onderscheid je van de concurrentie met geavanceerde technologie en sterke visuele impact." animationDelay={300} />
                  
                  <BenefitCard icon={<Megaphone />} title="Marketing" description="Gebruik 3D-modellen om seizoensgerechten en specials extra onder de aandacht te brengen." animationDelay={400} />
                </div>
              </div>
              
              <div className="animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
                <div className="flex items-end justify-center h-full">
                  <img 
                    src="/lovable-uploads/1a85de4e-1c2c-4724-b2d7-256aa2212644.png" 
                    alt="Koppel bekijkt menu op smartphone in restaurant" 
                    className="w-[70%] h-auto object-contain rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </> :
        <>
              <div className="animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
                <div className="flex items-end justify-center h-full">
                  <img 
                    src="/lovable-uploads/1a85de4e-1c2c-4724-b2d7-256aa2212644.png" 
                    alt="Koppel bekijkt menu op smartphone in restaurant" 
                    className="w-[70%] h-auto object-contain rounded-lg shadow-md" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-8 animate-fade-in md:text-3xl">IMPACT DOOR INNOVATIE</h2>
                  
                  <p className="text-lg text-innovisual-muted font-medium mb-4 animate-fade-in italic" style={{
                animationDelay: "100ms"
              }}>INNOVISUAL zorgt voor meerwaarde.</p>
                  
                  <p className="text-lg text-innovisual-muted animate-fade-in" style={{
                animationDelay: "100ms"
              }}>De klantbeleving staat centraal en wordt op een nieuwe manier versterkt. De implementatie van 3D-modellen biedt meerdere voordelen die effect hebben.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BenefitCard icon={<TrendingUp />} title="Resultaat" description="Een aantrekkelijke presentatie stimuleert het bestelgedrag en verhoogt de gemiddelde besteding." animationDelay={100} />
                  
                  <BenefitCard icon={<Star />} title="Wow-effect" description="De interactieve 3D-weergave transformeert dineren in een bijzondere ervaring en laat een blijvende indruk achter." animationDelay={200} />
                  
                  <BenefitCard icon={<Rocket />} title="Innovatie" description="Onderscheid je van de concurrentie met geavanceerde technologie en sterke visuele impact." animationDelay={300} />
                  
                  <BenefitCard icon={<Megaphone />} title="Marketing" description="Gebruik 3D-modellen om seizoensgerechten en specials extra onder de aandacht te brengen." animationDelay={400} />
                </div>
              </div>
            </>}
        </div>
      </section>
      
      <section ref={contactRef} className={`section-container ${isMobile ? 'py-12' : 'py-24'}`} id="lets-talk">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`font-bold mb-8 animate-fade-in ${isMobile ? 'text-5xl' : 'text-3xl md:text-6xl'}`}>LET'S TALK</h2>
          <p className="text-lg font-medium mb-2 animate-fade-in italic text-innovisual-muted" style={{
          animationDelay: "100ms"
        }}>Samen innoveren.</p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-innovisual-muted mb-8 animate-fade-in text-lg" style={{
            animationDelay: "200ms"
          }}>Ontdek vrijblijvend wat INNOVISUAL voor u kan betekenen. Wij realiseren het concept en maken het u gemakkelijk. Heeft u specifieke wensen? Ook daarvoor bieden wij alle ruimte. Ervaar het zelf – zonder kosten en zonder verplichtingen.</p>
          </div>
        </div>
        
        <ContactForm />
      </section>
    </div>;
};
export default Index;
