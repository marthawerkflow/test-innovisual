
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VanCreatieTotBeleving from "./pages/VanCreatieTotBeleving";
import ImpactDoorInnovatie from "./pages/ImpactDoorInnovatie";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* De routes voor je pagina's */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/van-creatie-tot-beleving" element={<VanCreatieTotBeleving />} />
          <Route path="/impact-door-innovatie" element={<ImpactDoorInnovatie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      {/* Force Tailwind to include custom color class */}
<div className="hidden bg-ivory">ivory</div>

        <Footer />
      </BrowserRouter>
      <div className="hidden bg-ivory">force Tailwind to include bg-ivory</div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
