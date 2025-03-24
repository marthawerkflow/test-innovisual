
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

        {/* ⬇️ Hier komt de Footer */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
